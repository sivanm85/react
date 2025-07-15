import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const Grocery = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="grocery-container">
      <h1>Grocery Store</h1>
      <h2 className="font-bold"> useContext : {loggedInUser}</h2>
      <p>
        Welcome to the Grocery Store! Here you can find a variety of grocery
        items.
      </p>
      <ul className="grocery-list">
        <li>Fruits and Vegetables</li>
        <li>Dairy Products</li>
        <li>Grains and Pulses</li>
        <li>Snacks and Beverages</li>
        <li>Household Essentials</li>
      </ul>
    </div>
  );
};
export default Grocery;
