import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({

    user: String,
    password: String,
    id: String

});