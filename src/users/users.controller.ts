import { Controller, Post, Req, Body, Get } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Post()
    createUser(@Body() postData): string {
        this.userService.create(postData);
        return postData;
    }

    @Get()
    getUser() { return this.userService.findAll(); }

}
