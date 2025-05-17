import React from "react";

const VideoCard = ({ info }) => {
  const { statistics, snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div>
      <div className="p-2 m-2 w-56 shadow-lg max-h-72 h-72">
        <img
          className="rounded-lg"
          src={thumbnails?.medium?.url}
          alt="thumbnails"
        ></img>
        <ul>
          <li className="font-bold"> {title}</li>
          <li className="mt-2"> {channelTitle}</li>
          <li>{statistics.likeCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export const AddVideoCard = (VideoCard) => {
  return ({ info }) => {
    return (
      <div className="p-1 m-1 border border-red-500">
        <VideoCard info={info} />
      </div>
    );
  };
};
export default VideoCard;
