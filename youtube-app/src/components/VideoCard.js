import React from "react";

const VideoCard = ({ videoList }) => {
  const { snippet, statistics } = videoList;
  const { channelTitle, title, thumbnails } = snippet;

  const publishedDate = new Date(snippet.publishedAt);
  const today = new Date();
  const diffInMs = today - publishedDate;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return (
    <div className="p-2">
      <img src={thumbnails.medium.url} alt={title} className="rounded-lg" />
      <ul>
        <li className="py-1 font-bold text-sm w-60">{title}</li>
        <li className="text-gray-600 text-sm">{channelTitle}</li>
        <li className="text-gray-500 text-sm">{statistics.viewCount} views</li>
        <li className="text-gray-500 text-sm">{diffInDays} days ago</li>
      </ul>
    </div>
  );
};

export default VideoCard;
