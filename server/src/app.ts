import cookieParser from "cookie-parser";
import express from "express";
import http from "http";
import morgan from "morgan"
import { Server } from "socket.io";

// http server
const app = express();
const server = http.createServer(app);

// socket.io ws server
const io = new Server();
io.attach(server);

// express middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"))

// router imports


// route handlers

export default server;
