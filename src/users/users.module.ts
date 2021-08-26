import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {userProviders} from '../users/user.providers';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService,...userProviders],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}