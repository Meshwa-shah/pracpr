import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

export const adminuser = mongoose.model('adminuser', userSchema);


