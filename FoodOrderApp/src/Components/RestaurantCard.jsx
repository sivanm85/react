const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, areaName } =
    resData?.info;

  return (
    <div className="m-4 p-3 w-[300px] h-120 bg-blue-100 shadow-lg rounded-lg flex flex-col border-2 border-gray-300 hover:bg-amber-100">
      <img
        src={
          `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
          `${cloudinaryImageId}`
        }
        alt="Restaurant"
        className="w-[300px] h-[200px] rounded-lg mb-4 object-cover"
      />
      <h3 className="p-1 text-left font-bold">{name}</h3>
      <h4 className="p-1 text-left">{cuisines.join(", ")}</h4>
      <h4 className="p-1 text-left">Rating: {avgRating} </h4>
      <h4 className="p-1 text-left"> Locality: {areaName} </h4>
      <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md mt-2 w-fit mx-auto hover:bg-blue-600">
        Order Now
      </button>
    </div>
  );
};
// Higher order component to wrap the RestaurantCard
// Input: RestaurantCard => Output: RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute px-2 py-2 m-2 bg-green-500 font-bold text-white rounded-md">
          Recommended
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
