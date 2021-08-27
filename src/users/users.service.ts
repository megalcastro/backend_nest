import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../users/user.interface';

// This should be a real class/interface representing a user entity


@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) { }

  async create(data:User): Promise<any> {
    const createdUser = new this.userModel(data);
    return createdUser.save();
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(userModel): Promise<any> {
    return this.userModel.findOne(userModel).exec();
  }

  

}