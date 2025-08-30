import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../utils/store/appSlice";
import { YOUTUBE_API } from "../utils/constants";
import { api } from "../utils/api";
import { showError } from "../utils/toast";
import { isPageBottom } from "../utils/helper";

const useFetchPopularVideos = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.app.isLoading);
  const [nextPageToken, setNextPageToken] = useState("");
  const [videos, setVideos] = useState([]);

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
      try {
        const response = await api.get(url);
        let data = response?.data;
        setVideos((prev) => [...prev, ...data.items]);
        if (data?.nextPageToken) {
          setNextPageToken(data?.nextPageToken);
        } else {
          setNextPageToken("");
        }
      } catch (e) {}
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
        getPopularVideo();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, nextPageToken, getPopularVideo]);
  return videos;
};

export default useFetchPopularVideos;
