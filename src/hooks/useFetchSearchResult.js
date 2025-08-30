import { useCallback, useEffect, useState } from "react";
import { SEARCH_API, VIDEO_API } from "../utils/constants";
import { showError } from "../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../utils/store/appSlice";
import { isPageBottom } from "../utils/helper";
import { api } from "../utils/api";
export const getVideosDetail = async (videoParamIds) => {
  const videoResponse = await api.get(VIDEO_API + videoParamIds);

  const videoData = videoResponse.data;

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
      const response = await api.get(url);
      const data = response.data;
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

        setVideosList((prev) => [...prev, ...videoData]);
      } catch (e) {
        showError(e.message);
      }
    } catch (e) {
      showError(e.message);
    } finally {
      dispatch(setLoading(false));
    }
  }, [searchParam, dispatch, nextPageToken, historyVideoIds]);
  useEffect(() => {
    if (searchParam) {
      // setVideosList([]);
      getSearchResult();
    }
  }, [searchParam]);

  useEffect(() => {
    const handleScroll = () => {
      if (isPageBottom() && !isLoading && nextPageToken && searchParam) {
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
