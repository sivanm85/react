import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategoryItems from "./RestaurantCategoryItems";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const [specResmenu, setSpecResMenu] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const data = await response.json();

    setMenuData(
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
    const nameRestaurant = data.data.cards[0].card.card.text;
    setSpecResMenu(nameRestaurant);
    console.log("nameRestaurant ...>", nameRestaurant);
  };

  if (menuData === null) {
    return <Shimmer />;
  }
  return (
    <div className="text-center">
      <h2 className="font-bold">{specResmenu}</h2>
      {menuData.map((category) => (
        <RestaurantCategoryItems
          key={category?.card.card.categoryId}
          data={category?.card}
        />
      ))}
      {/* {menuData.map((item) => {
        const { name, price, description } = item.card.info;
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 bg-white shadow-md rounded-md text-left"
          >
            <h3 className="font-semibold">{name}</h3>
            <p className="text-gray-500">Price: ₹{price / 100}</p>
            <p>{description}</p>
          </div>
        );
      })} */}
    </div>
  );
};
export default RestaurantMenu;
