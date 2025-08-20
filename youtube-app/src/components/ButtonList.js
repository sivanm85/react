import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonNameList = [
    "All",
    "Gaming",
    "Music",
    "JukeBox",
    "News",
    "Sports",
    "Movies",
    "Live",
    "SubWoofers",
    "Tamil Cinema",
    "Tamil Songs",
  ];
  return (
    <div className="flex px-2 space-x-2 mt-5">
      {buttonNameList.map((name, id) => (
        <Button key={id} name={name} />
      ))}
    </div>
  );
};
export default ButtonList;
