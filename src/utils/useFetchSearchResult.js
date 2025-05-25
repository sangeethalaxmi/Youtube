import { useEffect, useState } from "react";
import { SEARCH_API, VIDEO_API } from "./constants";
import { showError } from "./toast";

const useFetchSearchResult = (searchParam) => {
  const [videosList, setVideosList] = useState([]);
  useEffect(() => {
    const getSearchResult = async () => {
      try {
        const url = SEARCH_API.replace("#####", searchParam);
        const response = await fetch(url);
        const data = await response.json();
        let videoIds = data?.items.reduce((videoList, result) => {
          videoList += result.id?.videoId + ",";
          return videoList;
        }, "");
        videoIds = videoIds.replace(/,\s*$/, "");
        const videoResponse = await fetch(VIDEO_API + videoIds);
        const videoData = await videoResponse.json();
        setVideosList(videoData?.items);
      } catch (e) {
        showError(e.message);
      }
    };
    getSearchResult();
  }, [searchParam]);
  return videosList;
};

export default useFetchSearchResult;
