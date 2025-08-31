import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../utils/store/appSlice";
import { YOUTUBE_API } from "../utils/constants";
import { api } from "../utils/api";
import { isPageBottom } from "../utils/helper";
import { useInfiniteQuery } from "@tanstack/react-query";

const useFetchPopularVideos = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.app.isLoading);
  const [nextPageToken, setNextPageToken] = useState("");

  //implement infinite scroll for popular video
  const getVideoData = async (params = "") => {
    dispatch(setLoading(true));
    let url = "";
    // url = YOUTUBE_API + "&pageToken=" + params;
    // console.log(params);
    if (params) {
      url = YOUTUBE_API + "&pageToken=" + params;
      // console.log(url);
    } else {
      url = YOUTUBE_API;
    }
    const response = await api.get(url);
    dispatch(setLoading(false));

    let data = response?.data;
    if (data?.nextPageToken) {
      setNextPageToken(data?.nextPageToken);
    } else {
      setNextPageToken("");
    }
    return data;
  };

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["nextPageToken"],
    queryFn: ({ pageParam = "" }) => getVideoData(pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.nextPageToken ?? undefined;
    },
  });

  // console.log(data?.pages);

  const getPopularVideo = async () => {};
  getPopularVideo();
  useEffect(() => {
    fetchNextPage();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (isPageBottom() && !isLoading && nextPageToken) {
        fetchNextPage();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, fetchNextPage, nextPageToken]);
  return data?.pages || [];
};

export default useFetchPopularVideos;
