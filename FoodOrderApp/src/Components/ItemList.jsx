import { useDispatch } from "react-redux";
import { addItem } from "../Utils/redux/cartSlice"; // Assuming you have a cartSlice with an addItem action

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Logic to handle adding items to the cart
    dispatch(addItem(item)); // Dispatching the addItem action with a new item
    console.log("Item added to cart");
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="py-2">{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <span className="text-xs w-9/12">{item.card.info.description}</span>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="absolute p-2 top-20 mx-8 bg-black text-white rounded-lg m-auto shadow-lg m-2 border-gray-400 hover:bg-green-200 hover:cursor-pointer hover:text-black"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
