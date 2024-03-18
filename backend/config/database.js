import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const dbUrl=process.env.MONGO_URL || '';

const connectDB = async () => {
    try{
        await mongoose.connect(dbUrl).then((data)=>{
            console.log(`database connected with ${data.connection.host}`);
        });

    }catch(error){
        console.log(error)
        setTimeout(connectDB, 5000);
    }
}

export default connectDB;
