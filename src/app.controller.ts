import { Controller, Get, Request, Post, UseGuards,Body,UnauthorizedException } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) { }

  //@UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() postData) {

   let res = await this.authService.login(postData.user,postData.password);
    if(res){
      return res;
    }

    throw new UnauthorizedException();

    
   
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}