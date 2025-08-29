import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_KEY, GOOGLE_API_KEY } from "../utils/Constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const selectedVideosQuery = useSelector(
    (store) => store.selectQuery.selectedVideosQuery
  );
  const [videos, setVideos] = useState([]);
  if (!selectedVideosQuery) {
    console.log("No search query provided. Fetching default videos.");
  }
  //  console.log("Selected Videos Query: ", selectedVideosQuery);
  useEffect(() => {
    if (selectedVideosQuery) {
      fetchSearchVideos(selectedVideosQuery);
    } else {
      fetchDefaultVideos();
    }
  }, [selectedVideosQuery]);

  // Fetch default videos (popular/trending)
  const fetchDefaultVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_API_KEY);
      const data = await response.json();
      setVideos(data.items || []);
    } catch (err) {
      console.error("Error fetching default videos:", err);
    }
    console.log("Default YouTube Video list >>--->", videos);
  };

  // Fetch videos by search query
  const fetchSearchVideos = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          searchQuery
        )}&type=video&maxResults=8&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      setVideos(data.items || []);
    } catch (err) {
      console.error("Error fetching search videos:", err);
    }
    console.log("Search video result  >>--FSV->", videos);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
      {videos.map((video, id) => (
        <Link to={"watch?v=" + (video.id.videoId || video.id)} key={id}>
          <VideoCard videoList={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
