import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { selectedQueryClicked } from "../utils/selectQuerySlice";
import { GOOGLE_API_KEY } from "../utils/Constant";
import { cacheSearchResults } from "../utils/searchSlice";
import VideoContainer from "./VideoContainer";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState("");
  const searchCache = useSelector((store) => store.search);
  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(
        searchQuery
      )}&type=video&maxResults=50`
    );
    const data = await response.json();
    console.log("Search Suggestions : ", data[1]);
    setSearchSuggestions(data[1]);
    dispatch(cacheSearchResults({ [searchQuery]: data[1] }));
  };
  const onhandleClick = (Suggestions) => {
    //setSearchQuery(query);
    console.log("Search Query > onhandleClick >: ", Suggestions);
    //setShowSuggestions(false);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          alt="Hamburger Menu"
          className="w-6 h-6 cursor-pointer"
          onClick={toggleHandler}
        />
        <img
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="YouTube Logo"
          className="w-22 h-12"
        />
      </div>
      <div className="w-1/2 relative">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-4 py-2 bg-gray-600 text-white rounded-r-md hover:bg-gray-700">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute left-0 right-20 mt-1 bg-white shadow-lg z-10 p-5">
            <ul>
              {searchSuggestions.map((suggest, index) => (
                <li
                  key={index}
                  className="py-1 hover:bg-gray-100"
                  onMouseDown={() => {
                    setSearchQuery(suggest);
                    setSelectedQuery(suggest);
                    setShowSuggestions(false);
                    dispatch(selectedQueryClicked(suggest));
                  }}
                >
                  {suggest}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* {selectedQuery && <VideoContainer query={selectedQuery} />} */}
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
