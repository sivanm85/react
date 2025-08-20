import React from "react";
import store from "../utils/appStore";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="py-2 px-2">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Live</li>
        <li>Videos</li>
      </ul>
      <h2 className="text-md font-bold">Subscriptions</h2>
      <ul className="py-2 px-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Courses</li>
        <li>Movies</li>
      </ul>
      <h2 className="text-md font-bold">Watch Later</h2>
      <ul className="py-2 px-2">
        <li>Shopping</li>
        <li>Podcasts</li>
        <li>Fashion & Beauty</li>
        <li>Playlist</li>
        <li>Liked Videos</li>
        <li>Your Videos</li>
      </ul>
    </div>
  );
};

export default SideBar;
