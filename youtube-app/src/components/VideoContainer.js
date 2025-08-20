import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_KEY } from "../utils/Constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_API_KEY);
    const data = await response.json();
    console.log("YouTube Video list >>--->", data.items);
    setVideos(data.items);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
      {videos.map((video) => (
        <Link to={"watch?v=" + video.id}>
          <VideoCard key={video.id} videoList={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
