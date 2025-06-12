import React, { useCallback, useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { showError } from "../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../utils/store/appSlice";
import { isPageBottom } from "../utils/helper";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isLoading = useSelector((state) => state.app.isLoading);
  const dispatch = useDispatch();
  // const [isLoading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");
  //implement infinite scroll for popular video
  const getPopularVideo = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      let url = "";
      if (nextPageToken) {
        url = YOUTUBE_API + "&pageToken=" + nextPageToken;
      } else {
        url = YOUTUBE_API;
      }
      const response = await fetch(url);
      const data = await response.json();
      setVideos((prev) => [...prev, ...data.items]);
      if (data?.nextPageToken) {
        setNextPageToken(data?.nextPageToken);
      } else {
        setNextPageToken("");
      }
    } catch (error) {
      showError(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }, [nextPageToken, dispatch]);
  useEffect(() => {
    getPopularVideo();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (isPageBottom() && !isLoading && nextPageToken) {
        // throutting in react
        getPopularVideo();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, nextPageToken, getPopularVideo]);
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
