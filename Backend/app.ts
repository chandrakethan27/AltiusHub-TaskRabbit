import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';


dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json({ limit: '30mb'}));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors({
  origin: 'http://localhost:5173', // Allow requests only from this origin
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true
}));



app.get('/', (req, res) => {
  res.send('Hello, World!');
});

export default app;
