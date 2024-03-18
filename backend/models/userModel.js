import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema;
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        required:[true, "first name is required"],
        maxLength:32,
    },
    lastname:{
        type:String,
        trim:true,
        required:[true, "last name is required"],
        maxLength:32,
    },
    email:{
        type:String,
        required:[true, "email is required"],
        trim:true,
        unique:true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password:{
        type:String,
        trim:true,
        required:[true,'please enter a password'],
        minLength:[6, 'password must be at least 6 characters'],
        match:[
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/,
            'please input a valid password'
        ]
    },
    jobHistory:[jobHistorySchema],
    role:{
        type:Number,
        default:0,
    }

    
},{timestamp:true})