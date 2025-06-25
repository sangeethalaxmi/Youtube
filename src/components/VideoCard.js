import React from "react";
import { formatUploadedDays, formatViewNumber } from "../utils/helper";
import Icons from "./Icons";

const VideoCard = ({ info }) => {
  const { statistics, snippet } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div>
      <div className="p-2 m-2  shadow-lg h-[280px]">
        <img
          className="rounded-lg"
          src={thumbnails?.medium?.url}
          alt="thumbnails"
        ></img>
        <ul>
          <li className="font-bold w-full text-truncate "> {title}</li>
          <li className="mt-1"> {channelTitle}</li>
          <li className="flex items-center gap-2 text-textSecondary text-sm">
            <span>{formatViewNumber(statistics.viewCount)} views</span>
            <span>
              <Icons
                name="circle"
                size={4}
                className="bg-textSecondary text-textSecondary"
                strokeWidth={2}
              />
            </span>
            <span className=""> {formatUploadedDays(publishedAt)}</span>
          </li>
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
