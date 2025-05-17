import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getPopularVideo = async () => {
      try {
        const response = await fetch(YOUTUBE_API);
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {}
    };
    getPopularVideo();
  }, []);
  if (videos.length === 0) {
    return <Shimmer />;
  }
  const WithAddVideoCard = AddVideoCard(VideoCard);
  return (
    <div className="flex flex-wrap">
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
