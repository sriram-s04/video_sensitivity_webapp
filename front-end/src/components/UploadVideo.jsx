import { useState } from "react";
import api from "../api/axios.js";

const UploadVideo = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("video", file);

    try {
      await api.post("/videos/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (event) => {
          setProgress(Math.round((event.loaded * 100) / event.total));
        },
      });
      setFile(null);
      setProgress(0);
      onUpload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mb-6">
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
      >
        Upload
      </button>
      {progress > 0 && (
        <div className="mt-2 w-full bg-gray-200 rounded h-2">
          <div
            className="bg-green-600 h-2 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default UploadVideo;
