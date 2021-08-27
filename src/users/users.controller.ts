import { Controller, Post,Body, Get,UseGuards } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    createUser(@Body() postData): string {
        this.userService.create(postData);
        return postData;
    }

    @Get()
    getUser() { return this.userService.findAll(); }

}
