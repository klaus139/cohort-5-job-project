import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
dotenv.config();

//routes
import authRoutes from "./routes/authRoutes.js";

const app = express();

//databse
connectDB();

const port = 6000;
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({limit:"5mb"}));
// app.use(bodyParser.urlencoded({extended:true})
app.use(cookieParser());
app.use(cors());



if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app._router('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
}else{
    app.get('/', (req, res) => {
        res.sendFile('API is running')
    })
}

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}


//routes
app.use('/api',authRoutes);

app.listen(port, () => console.log(`server is listening on port ${port}`));
