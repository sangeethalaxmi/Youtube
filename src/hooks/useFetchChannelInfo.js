import { useEffect, useState } from "react";
import { CHANNEL_API } from "../utils/constants";
import { api } from "../utils/api";

const useFetchChannelInfo = (channelId) => {
  const [channelInfo, setChannelInfo] = useState([]);
  useEffect(() => {
    if (channelId) {
      const getChannelLogo = async () => {
        api
          .get(CHANNEL_API + "&id=" + channelId)
          .then((res) => {
            let data = res.data;
            setChannelInfo(data?.items[0]);
          })
          .catch((e) => {});
      };
      if (channelId) {
        getChannelLogo();
      }
    }
  }, [channelId]);
  return channelInfo;
};
export default useFetchChannelInfo;
