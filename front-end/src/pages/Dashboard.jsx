import { useState } from "react";
import UploadVideo from "../components/UploadVideo.jsx";
import VideoList from "../components/VideoList.jsx";

const Dashboard = () => {
  const [refresh, setRefresh] = useState(false);

  const handleUpload = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <UploadVideo onUpload={handleUpload} />
      <VideoList key={refresh} />
    </div>
  );
};

export default Dashboard;
