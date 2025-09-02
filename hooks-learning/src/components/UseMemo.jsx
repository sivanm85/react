import React from "react";
import { useState, useMemo } from "react";
import { nthPrime } from "./utils/helper";

const UseMemo = () => {
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  //const result = nthPrime(text);
  const result = useMemo(() => nthPrime(text), [text]);
  return (
    <div
      className={
        "border-2 border-gray-300 p-4" +
        (darkMode ? " bg-black text-white" : " bg-white text-black")
      }
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        UseMemo Hook component
      </h2>
      <input
        type="number"
        placeholder="Search nth Prime number..."
        className="border-2 border-gray-300 p-2 w-80"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setText("")}
      />
      <div>
        <h3>nthPrime: {result}</h3>
      </div>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setDarkMode(!darkMode)}
      >
        Theme Toggle
      </button>
    </div>
  );
};
export default UseMemo;
