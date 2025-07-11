import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "./UseOnlineStatus";
import UserContext from "../Utils/UserContext";

const MainContent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  const onlineStatus = UseOnlineStatus();

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
  };

  if (!onlineStatus) {
    return (
      <div className="offline-container">
        <h2>You are currently offline</h2>
        <p>Please check your internet connection.</p>
      </div>
    );
  }
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="main-container flex flex-col items-center ">
      <h2 className="my-2">Welcome to the Food Order App</h2>
      <p className="my-2">Order your favorite food online!</p>
      <div className="flex gap-2 m-2">
        <label className="font-bold my-auto">UseContext value:</label>
        <input
          type="text"
          className="border border-blue-500 px-4 py-2 rounded-md focus:outline-none"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search for food items..."
          className="border border-blue-500 px-4 py-2 rounded-md focus:outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={onHandleSearch}
        >
          Search
        </button>
        <div className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600">
          <button className="filter-button" onClick={onHandleChange}>
            Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 ">
        {restaurants.map((restaurant) => (
          <Link to={"chennai/" + restaurant.info.id} key={restaurant.info.id}>
            {restaurant.info.avgRating > 4.5 ? (
              <PromotedRestaurantCard
                key={restaurant.info.id}
                resData={restaurant}
              />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MainContent;
// This component serves as the main content area of the Food Order App.
