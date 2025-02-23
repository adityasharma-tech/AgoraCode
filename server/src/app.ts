import http from "http";
import morgan from "morgan";
import express from "express";
import cookieParser from "cookie-parser";

import { Server } from "socket.io";
import { rateLimit } from "express-rate-limit";
import { ApiResponse } from "./lib/ApiResponse";

// http server
const app = express();
const server = http.createServer(app);

// socket.io ws server
const io = new Server(server);
io.attach(server);

// rate limiter
const limiter = rateLimit({
  windowMs: 1000 * 60,
  limit: 60,
  message: new ApiResponse(429, null, "Too many requests"),
  standardHeaders: true,
  legacyHeaders: false,
});

// express middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(limiter);

// router imports
import fileRouter from "./routes/files.routes"
import workspaceRouter from "./routes/workspace.routes"

// route handlers
app.use("/file", fileRouter);
app.use("/workspace", workspaceRouter);

export default server;
