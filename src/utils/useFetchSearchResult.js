import { useCallback, useEffect, useState } from "react";
import { SEARCH_API, VIDEO_API } from "./constants";
import { showError } from "./toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "./store/appSlice";
import { isPageBottom } from "./helper";
export const getVideosDetail = async (videoParamIds) => {
  const videoResponse = await fetch(VIDEO_API + videoParamIds);
  const videoData = await videoResponse.json();
  return videoData?.items ?? [];
};
const useFetchSearchResult = (searchParam) => {
  const [videosList, setVideosList] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.app.isLoading);
  const [historyVideoIds, setHistoryVideoIds] = useState([]);

  const getSearchResult = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      let url = SEARCH_API + searchParam;
      if (nextPageToken) {
        url += "&pageToken=" + nextPageToken;
      }
      const response = await fetch(url);
      const data = await response.json();
      let uniqueVideoIds = data?.items.reduce((videoList, result) => {
        if (historyVideoIds.includes(result.id?.videoId)) return [];
        videoList.push(result.id?.videoId);
        return videoList;
      }, []);
      uniqueVideoIds = new Set(uniqueVideoIds);
      uniqueVideoIds = [...uniqueVideoIds];
      setHistoryVideoIds((prev) => [...prev, ...uniqueVideoIds]);

      let videoParamIds = [...uniqueVideoIds];
      videoParamIds = videoParamIds.join(",");

      if (data?.nextPageToken) {
        setNextPageToken(data?.nextPageToken);
      } else {
        setNextPageToken("");
      }
      try {
        let videoData = await getVideosDetail(videoParamIds);
        // console.log(videoData);

        setVideosList((prev) => [...prev, ...videoData]);
      } catch (e) {
        showError(e.message);
      }
    } catch (e) {
      showError(e.message);
    } finally {
      dispatch(setLoading(false));
    }
  }, [searchParam, dispatch, nextPageToken]);
  useEffect(() => {
    setVideosList([]);
    getSearchResult();
  }, [searchParam]);

  useEffect(() => {
    const handleScroll = () => {
      if (isPageBottom() && !isLoading && nextPageToken) {
        getSearchResult(searchParam);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, nextPageToken, searchParam, getSearchResult]);
  return videosList;
};

export default useFetchSearchResult;
