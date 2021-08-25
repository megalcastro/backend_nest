import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



export class User extends Document{
    name: string;
    age: number;
    password:string;
}

export const UserSchema = SchemaFactory.createForClass(User);