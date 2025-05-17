import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Movies",
    "Games",
    "News",
    "Cooking",
    "Live",
    "Cricket",
    "Sports",
    "Fasion",
    "Movies",
    "TED",
    // "PodeCasts",
    // "Sri Saidam",
  ];
  return (
    <div className="flex">
      {list.map((name) => (
        <Button name={name} key={name} />
      ))}
    </div>
  );
};

export default ButtonList;
