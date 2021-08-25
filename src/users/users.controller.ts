import { Controller, Post, Req ,Body} from '@nestjs/common';

@Controller('users')
export class UsersController {


    @Post()
    createUser(@Body() postData): string {


        return postData;
    }




}
