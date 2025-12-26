import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    title: String,
    filename: String,
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: { type: String, default: "processing" }, // 'safe' or 'flagged'
    progress: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
