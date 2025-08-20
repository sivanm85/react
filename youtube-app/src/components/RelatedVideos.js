import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/Constant";
import { Link } from "react-router-dom";

const RelatedVideos = ({ videoId }) => {
  console.log("Fetching related videos for:", videoId);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const fetchRelatedVideos = async () => {
    if (!videoId) return;
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=IN&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      setRelatedVideos(data.items || []);
    } catch (err) {
      console.error("Error fetching related videos:", err);
    }
  };
  useEffect(() => {
    fetchRelatedVideos();
  }, [videoId]);

  return (
    <div className="w-full lg:w-96 ml-5 space-y-4">
      {relatedVideos.map((video) => (
        <Link to={"?v=" + video.id}>
          <div
            key={video.id.videoId}
            className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-40 rounded-lg"
            />
            <div>
              <p className="font-semibold text-sm line-clamp-2">
                {video.snippet.title}
              </p>
              <p className="text-xs text-gray-600">
                {video.snippet.channelTitle}
              </p>
              <p className="text-xs text-gray-600">
                {video.statistics.viewCount} views
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedVideos;
