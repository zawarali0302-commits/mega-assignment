import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import CustomerRoute from './routes/CustomerRoutes';




dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



app.use("/api/customers", CustomerRoute);




app.listen(PORT, () => console.log(`server is running on port http://localhost:${PORT}`))