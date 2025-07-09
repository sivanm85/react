import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "./UseOnlineStatus";

const MainContent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onHandleChange = (e) => {
    const filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setRestaurants(filteredRestaurants);
  };
  const onHandleSearch = () => {
    const searchRestaurants = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("searchRestaurants >>> ", searchRestaurants);
    setRestaurants(searchRestaurants);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = UseOnlineStatus();
  if (!onlineStatus) {
    return (
      <div className="offline-container">
        <h2>You are currently offline</h2>
        <p>Please check your internet connection.</p>
      </div>
    );
  }
  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="main-container">
      <h2>Welcome to the Food Order App</h2>
      <p>Order your favorite food online!</p>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for food items..."
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-button" onClick={onHandleSearch}>
          Search
        </button>
        <div className="filter-container">
          <button className="filter-button" onClick={onHandleChange}>
            Filter
          </button>
        </div>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <Link to={"chennai/" + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MainContent;
// This component serves as the main content area of the Food Order App.
