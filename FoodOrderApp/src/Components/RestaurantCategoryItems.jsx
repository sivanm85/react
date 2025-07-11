import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategoryItems = (category) => {
  const categories = category.data.card.itemCards;
  const title = category.data.card.title;
  const [showItems, setShowItems] = useState(false);
  //console.log("title -->", title);
  //console.log("RestaurantCategoryItems >>> ", categories);
  const onhandleClick = () => {
    console.log("clicked ");
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={onhandleClick}
        >
          <span className="font-bold text-lg">
            {title} ({categories.length})
          </span>
          {showItems ? <span>-</span> : <span>+</span>}
        </div>
        {showItems && <ItemList items={categories} />}
      </div>
    </div>
  );
};
export default RestaurantCategoryItems;
