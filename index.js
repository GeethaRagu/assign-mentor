import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
import { connectDB } from './Database/config.js';

import studentrouter from './Routers/studentmentorRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.get('/',(req,res)=>{
  res.status(200).send("Welcome to student-mentor assign");
})
app.use('/api',studentrouter);

app.listen(process.env.PORT,()=>{
    console.log("App is running successfully");
})