import React, { useCallback, useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { showError } from "../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../utils/store/appSlice";
import { isPageBottom } from "../utils/helper";
import api from "../utils/api";
import useFetchPopularVideos from "../hooks/useFetchPopularVideos";

const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);
  // const isLoading = useSelector((state) => state.app.isLoading);
  const videos = useFetchPopularVideos();
  if (videos.length === 0) {
    return <Shimmer />;
  }
  const WithAddVideoCard = AddVideoCard(VideoCard);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden ">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          {/* <WithAddVideoCard info={video} /> */}
          <VideoCard info={video}></VideoCard>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
