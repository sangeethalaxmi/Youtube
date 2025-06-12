import React from "react";

const Avatar = ({ img, alt = "avatar" }) => {
  if (!img) return;
  return (
    <div className="inline-block w-10 h-10">
      <img
        className="rounded-full border  object-cover w-full h-full"
        src={img}
        alt={alt}
      ></img>
    </div>
  );
};

export default Avatar;
