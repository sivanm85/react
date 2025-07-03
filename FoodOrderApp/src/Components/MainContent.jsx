import RestaurantCard from "./RestaurantCard";
import resObjects from "../utils/resObjects";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const MainContent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const onHandleChange = (e) => {
    const filteredRestaurants = resObjects.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setRestaurants(filteredRestaurants);
  };
  console.log("filters >>> ", restaurants);

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
        />
        <button className="search-button">Search</button>
        <div className="filter-container">
          <button className="filter-button" onClick={onHandleChange}>
            Filter
          </button>
        </div>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default MainContent;
// This component serves as the main content area of the Food Order App.
