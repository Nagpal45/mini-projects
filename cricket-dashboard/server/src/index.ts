import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route';
import teamRoutes from './routes/team.route';
import matchRoutes from './routes/match.route';
import playerRoutes from './routes/player.route';
import { Server } from "socket.io";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/match', matchRoutes);
app.use('/api/player', playerRoutes);

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    throw new Error('MONGO_URI is not defined in the environment variables');
}

mongoose.connect(mongoUri).then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.log('Database connection failed. Error: ', error);
})

export const io = new Server({
    cors: {
      origin: "http://localhost:3000",
    },
  });


  
io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

io.listen(4000);

app.listen(5000, () =>{
    console.log('Server is running on port 5000');
})