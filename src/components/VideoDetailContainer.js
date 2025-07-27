import React, { useRef } from "react";
import useFetchChannelInfo from "../hooks/useFetchChannelInfo";
import Avatar from "./Avatar";
import { formatViewNumber } from "../utils/helper";
import Icons from "./Icons";
import Share from "./Share";

const VideoDetailContainer = ({ videoInfo }) => {
  const snippet = videoInfo?.snippet ?? {};
  const channelInfo = useFetchChannelInfo(snippet?.channelId || 0);
  const modalRef = useRef();
  const handleShare = () => {
    modalRef.current?.open();
  };
  return (
    <div className="mt-2 ">
      <h2 className="text-lg font-bold ">{videoInfo?.snippet?.title}</h2>
      <div className="flex items-center">
        <div className="w-[15%] md:w-[8%]">
          <Avatar
            img={channelInfo?.snippet?.thumbnails?.default?.url}
            alt="channel logo"
          />
        </div>
        <div className="w-1/2 md:w-[30%]">
          <h3 className="text-lg font-bold line-clamp-1">
            {videoInfo?.snippet?.channelTitle}
          </h3>
          <h2>
            {formatViewNumber(channelInfo?.statistics?.subscriberCount)}{" "}
            subscribers
          </h2>
        </div>
        <div className="w-[65%]">
          <button
            className="flex gap-2 bg-secondary rounded-l-full float-right rounded-r-full px-3 py-1 items-center cursor-pointer"
            onClick={handleShare}
          >
            <span className="font-bold">Share</span>
            <span>
              <Icons name="share" />
            </span>
          </button>
          <Share ref={modalRef} videoId={videoInfo?.id} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetailContainer;
