import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          alt="Hamburger Menu"
          className="w-6 h-6 cursor-pointer"
          onClick={() => toggleHandler()} // Placeholder for menu toggle
        />
        <img
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="YouTube Logo"
          className="w-22 h-12"
        />
      </div>
      <div className="flex items-center w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button className="px-4 py-2 bg-gray-600 text-white rounded-r-md hover:bg-gray-700">
          Search
        </button>
      </div>
      <div>
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="User Icon"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
