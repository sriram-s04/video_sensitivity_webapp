import { Router } from "express";
import { uploadVideo, listVideos } from "../controllers/video.controller.js";
import { protect } from "../middlewares/auth.js";
import { upload } from "../config/multer.js";

const router = Router();

// Upload
router.post("/upload", protect, upload.single("video"), uploadVideo);

// List
router.get("/", protect, listVideos);

export default router;
