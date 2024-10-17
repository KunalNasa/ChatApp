import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectDb from "./db/connectDB.js"
import cookieParser from "cookie-parser"
import { app, server } from "./socket/socket.js"

dotenv.config();
const PORT = process.env.PORT || 5000;
connectDb();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
    console.log(`app is live on server ${PORT}`)
})