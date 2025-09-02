import React from "react";
import { useRef, useState } from "react";

const UseMyRef = () => {
  let x = 0;
  const [count, setCount] = useState(0);
  const myRef = useRef(0);

  console.log("Rendering....in useRef");
  return (
    <div className=" border-2 border-gray-300 p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        UseRef Hook component
      </h2>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          x = x + 1;
          console.log("x=", x);
        }}
      >
        Increase X
      </button>
      <p>Let x={x}</p>
      <div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase Y
        </button>
        <p>count={count}</p>
      </div>
      <div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            myRef.current = myRef.current + 1;
            console.log("myRef=", myRef.current);
          }}
        >
          UseRef z
        </button>
        <p>UseRef={myRef.current}</p>
      </div>
    </div>
  );
};

export default UseMyRef;
