const VideoPlayer = ({ videoId }) => {
  return (
    <video width="400" controls>
      <source
        src={`http://localhost:5000/videos/stream/${videoId}`}
        type="video/mp4"
      />
    </video>
  );
};

export default VideoPlayer;
