import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/Constant";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const SearchVideos = ({ query }) => {
  const [searchVideoResults, setSearchVideoResults] = useState([]);
  const handleSearchVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          query
        )}&type=video&maxResults=5&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      setSearchVideoResults(data.items || []);
    } catch (err) {
      console.error("Error fetching SearchVideos:", err);
    }
  };
  useEffect(() => {
    if (query) {
      handleSearchVideos();
    }
  }, [query]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
      {searchVideoResults.map((video, id) => (
        <VideoCard videoList={video} />
      ))}
    </div>
  );
};
export default SearchVideos;
