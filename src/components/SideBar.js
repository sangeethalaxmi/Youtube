import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="p-5  shadow-lg mr-2 w-36 ">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <div className="border border-gray-200 divide-x-2 my-2"></div>
      <h1 className="font-bold mt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>gaming</li>
        <li>Movies</li>
      </ul>
      <div className="border border-gray-200 divide-x-2 my-2"></div>

      <h1 className="font-bold mt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
