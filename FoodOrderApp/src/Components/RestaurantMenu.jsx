import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();
  console.log("resId >>> ", resId);
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
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  };
  console.log("menuData >>> ", menuData);

  if (menuData === null) {
    return <Shimmer />;
  }
  return (
    <div className="restaurant-menu">
      <h2>Restaurant MenuList</h2>
      <ul>
        {menuData.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
