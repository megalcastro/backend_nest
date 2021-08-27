import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import _ from 'underscore';



@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {

        const user = await this.usersService.findOne(username);

        let match = bcrypt.compareSync(user.pass, pass);

        if (user && match) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: string, pass: string) {
        let userDb = await this.usersService.findOne({ user });

        if (bcrypt.compareSync(pass, userDb.password)) {
            return { token: this.jwtService.sign({ token: _.omit(userDb._doc, 'password') }) };

        }
        return null;
    }
}