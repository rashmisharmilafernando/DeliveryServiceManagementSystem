import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as process from "process";
import cors from 'cors';

import UserRoutes from "./routes/user.routes";
import CustomerRoutes from "./routes/customer.routes";
import BranchRoutes from "./routes/branch.routes";
import RiderRoutes from "./routes/rider.routes"
import OrderRoutes from "./routes/order.routes"

// invoke the express
const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,             
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL as string);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log("DB Connection Error: ", error);
});

db.on('open', () => {
    console.log("DB Connected Successfully");
});

app.use('/user', UserRoutes);
app.use('/customer', CustomerRoutes);
app.use('/branch', BranchRoutes);
app.use('/rider', RiderRoutes);
app.use('/order', OrderRoutes);

app.listen(8097, () => {
    console.log("Server started on port 8097");
});