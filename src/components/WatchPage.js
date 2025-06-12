import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VIDEO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/store/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import RelatedVideos from "./RelatedVideos";
import { getVideosDetail } from "../utils/useFetchSearchResult";
import Shimmer from "./Shimmer";
import Avatar from "./Avatar";
import useFetchChannelInfo from "../utils/useFetchChannelLogo";
import { formatViewNumber } from "../utils/helper";
import Icons from "./Icons";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get("v");

  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    const getVideoInfo = async () => {
      const videoData = await getVideosDetail(videoId);
      setVideoDetails(videoData[0]);
    };
    getVideoInfo();
  }, []);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  // console.log(videoDetails);
  const snippet = videoDetails?.snippet ?? {};
  const channelInfo = useFetchChannelInfo(snippet);

  if (!videoDetails) {
    return <Shimmer />;
  }
  return (
    <div className="flex   mt-28 flex-wrap overflow-hidden bg-primary flex-col">
      <div className=" flex gap-4  flex-col lg:flex-row">
        <div className="lg:w-[60vw] w-full">
          <iframe
            className="rounded-lg lg:w-[60vw] w-full"
            src={VIDEO_URL + videoId}
            width="750"
            height="600"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="mt-2 ">
            <h2 className="text-lg font-bold ">
              {videoDetails?.snippet?.title}
            </h2>
            <div className="flex items-center">
              <div className="w-[7%]">
                <Avatar
                  img={channelInfo?.snippet?.thumbnails?.default?.url}
                  alt="channel logo"
                />
              </div>
              <div className="w-[30%]">
                <h3 className="text-lg font-bold line-clamp-1">
                  {videoDetails?.snippet?.channelTitle}
                </h3>
                <h2>
                  {formatViewNumber(channelInfo?.statistics?.subscriberCount)}{" "}
                  subscribers
                </h2>
              </div>
              <button className="flex gap-2 bg-secondary rounded-l-full rounded-r-full px-3 py-1 items-center cursor-pointer">
                <span className="font-bold">Share</span>
                <span>
                  <Icons name="share" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <div className="grid customScreen:grid-cols-[55%_45%] grid-cols-1 w-full">
        <CommentsContainer />
        <RelatedVideos relatedTitle={videoDetails[0]?.snippet?.title} />
      </div>
    </div>
  );
};

export default WatchPage;
