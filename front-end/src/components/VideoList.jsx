import { useEffect, useState } from "react";
import api from "../api/axios.js";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await api.get("/videos/");
        setVideos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Your Videos</h3>
      {videos.length === 0 && <p>No videos uploaded yet</p>}
      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div
            key={video._id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <h4 className="font-semibold">{video.title}</h4>
            <p>
              Status:{" "}
              <span
                className={
                  video.status === "safe" ? "text-green-600" : "text-red-600"
                }
              >
                {video.status}
              </span>
            </p>
            <p>Progress: {video.progress}%</p>
            <video
              className="w-full mt-2 rounded"
              controls
              src={`http://localhost:5000/videos/stream/${video._id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;

