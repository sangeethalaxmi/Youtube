import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { VIDEO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/store/appSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
      <div className="px-5">
        <iframe
          src={VIDEO_URL + videoId}
          width="800"
          height="600"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
