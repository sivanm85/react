import React, { useState, useEffect } from "react";

const UserFunctional = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Siva");
  useEffect(() => {
    console.log("Component mounted or updated UseEffect called");
    return () => {
      console.log("Component unmounted UseEffect called");
    };
  }, [count, name]);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="user-functional">
      <h2>User Functional Component</h2>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={decrementCount}>Decrement Count</button>
      {/* Add more user-related features here */}
    </div>
  );
};
export default UserFunctional;
