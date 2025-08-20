import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-200 text-black px-5 py-1 rounded-lg hover:bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
