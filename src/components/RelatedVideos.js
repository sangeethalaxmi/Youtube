import React from "react";
import RelatedVideoCard from "./RelatedVideoCard";
import Shimmer from "./Shimmer";
import useFetchSearchResult from "../hooks/useFetchSearchResult";
import { Link } from "react-router-dom";

const RelatedVideos = React.memo(({ relatedTitle }) => {
  const videosList = useFetchSearchResult(relatedTitle) ?? [];
  if (videosList.length === 0) {
    return (
      <div className="mt-4 w-full rounded-lg p-2 text-center">
        <p className="text-textPrimary">No related videos found.</p>
      </div>
    );
  }

  return (
    <div className="mt-4 w-full rounded-lg p-2">
      {videosList.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          {" "}
          <RelatedVideoCard info={video} />
        </Link>
      ))}
    </div>
  );
});

RelatedVideos.displayName = "RelatedVideos";
export default RelatedVideos;
