import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/auth.routes.js";
import videoRoutes from "./routes/video.routes.js";
import { errorHandler } from "./middlewares/error.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "*", // You can restrict to your frontend URL in production
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// Serve uploads folder as static files
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

// Routes
app.use("/auth", authRoutes);
app.use("/videos", videoRoutes);

// Error handler
app.use(errorHandler);

export default app;
