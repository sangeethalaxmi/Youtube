import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VIDEO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/store/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import RelatedVideos from "./RelatedVideos";
import { getVideosDetail } from "../hooks/useFetchSearchResult";
import Shimmer from "./Shimmer";
import VideoDetailContainer from "./VideoDetailContainer";

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
  }, [videoId]);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
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
          <VideoDetailContainer videoInfo={videoDetails} />
        </div>
        <div className="w-full border border-gray-300 rounded-lg bg-tertiary">
          <div className="p-2 border border-b-gray-300 rounded-t-lg">
            {" "}
            <h2>Live Chat</h2>
          </div>
          <LiveChat />
        </div>
      </div>

      <div className="grid customScreen:grid-cols-[55%_45%] grid-cols-1 w-full">
        <CommentsContainer />
        <RelatedVideos relatedTitle={videoDetails?.snippet?.title} />
      </div>
    </div>
  );
};

export default WatchPage;
