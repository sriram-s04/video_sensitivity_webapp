import Video from "../models/Video.js";
import fs from "fs";
import path from "path";

// Upload Video
export const uploadVideo = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ message: "No file uploaded" });

    const video = new Video({
      title: file.originalname,
      filename: file.filename,
      uploadedBy: req.user.id, // Must come from protect middleware
      status: "processing",
      progress: 0,
    });

    await video.save();

    // Simulate processing progress
    let progress = 0;
    const interval = setInterval(async () => {
      progress += 20;
      video.progress = progress > 100 ? 100 : progress;
      if (progress >= 100) video.status = "safe"; // You can change to 'flagged' if needed
      await video.save();
      if (progress >= 100) clearInterval(interval);
    }, 500);

    res.json(video);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// List Videos
export const listVideos = async (req, res) => {
  try {
    const videos = await Video.find({ uploadedBy: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Stream Video
export const streamVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });

    const videoPath = path.join("uploads", video.filename);
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunkSize = end - start + 1;
      const file = fs.createReadStream(videoPath, { start, end });
      const head = {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize,
        "Content-Type": "video/mp4",
      };
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        "Content-Length": fileSize,
        "Content-Type": "video/mp4",
      };
      res.writeHead(200, head);
      fs.createReadStream(videoPath).pipe(res);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
