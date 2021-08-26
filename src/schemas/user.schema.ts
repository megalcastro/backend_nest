import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({

    user: String,
    password: String,
    id: String

});

UserSchema.pre('save', async function () {
    /** Encrypt password */
    const saltOrRounds = 10;
    this.password = await bcrypt.hash(this.password, saltOrRounds);
});
