import { useEffect, useState } from "react";
import { CHANNEL_API } from "./constants";

const useFetchChannelInfo = (videoDetails) => {
  const [channelInfo, setChannelInfo] = useState([]);
  useEffect(() => {
    const getChannelLogo = async () => {
      const data = await fetch(CHANNEL_API + "&id=" + videoDetails?.channelId);
      const response = await data.json();
      setChannelInfo(response?.items[0]);
    };
    if (videoDetails?.channelId) {
      getChannelLogo();
    }
  }, [videoDetails]);
  return channelInfo;
};
export default useFetchChannelInfo;
