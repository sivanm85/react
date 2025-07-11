import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Utils/redux/cartSlice"; // Assuming you have a cartSlice with a clearCart action
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Cart Items >>>---->", cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatching the clearCart action to empty the cart
  };
  return (
    <div className="text-center mx-auto my-8 p-4 bg-white shadow-lg rounded-lg w-6/12 border border-gray-200">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer"
        onClick={handleClearCart}
      >
        ClearCart
      </button>
      <p className="text-gray-600">
        Items in your cart will be displayed here.
      </p>
      {
        /* Cart items will be rendered here */
        cartItems.length > 0 ? (
          //<ItemList items={cartItems} />
          <ul className="mt-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="border-b shadow-lg border-gray-300 py-2 flex items-center "
              >
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    item.card.info.imageId
                  }
                  className="w-24 mr-4 shadow-lg rounded-lg border-2 border-blue-500"
                />
                {item.card.info.name} - ₹
                {(item.card.info.price || item.card.info.defaultPrice) / 100}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-4">Your cart is empty.</p>
        )
      }
      {cartItems.length > 0 ? (
        <div className="text-right font-bold text-lg mt-4 color-blue-600 shadow-lg border border-gray-300 p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-500 text-white hover:from-blue-600 hover:to-blue-600 cursor-pointer">
          To Pay : ₹
          {cartItems.reduce(
            (acc, item) =>
              acc +
              (item.card.info.price || item.card.info.defaultPrice || 0) / 100,
            0
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
