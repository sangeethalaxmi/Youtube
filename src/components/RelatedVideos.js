import React, { useEffect, useState } from "react";
import RelatedVideoCard from "./RelatedVideoCard";
import useFetchSearchResult, {
  getVideosDetail,
} from "../utils/useFetchSearchResult";
import Shimmer from "./Shimmer";

const RelatedVideos = ({ relatedTitle }) => {
  const videosList = useFetchSearchResult(relatedTitle) ?? [];
  if (videosList.length === 0) {
    return <Shimmer />;
  }
  // console.log(videosList);
  return (
    <div className=" mt-4  w-full rounded-lg p-2  ">
      {videosList.map((video) => (
        <RelatedVideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default RelatedVideos;
