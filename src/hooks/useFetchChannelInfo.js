import { useEffect, useState } from "react";
import { CHANNEL_API } from "../utils/constants";
import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const useFetchChannelInfo = (channelId) => {
  // const [channelInfo, setChannelInfo] = useState([]);
  // useEffect(() => {
  //   if (channelId) {

  //   }
  // }, [channelId]);
  const getChannelLogo = async (channelId) => {
    const data = await api.get(CHANNEL_API + "&id=" + channelId);
    return data.data?.items[0] ?? [];
  };
  const { data: channelInfo } = useQuery({
    queryKey: ["channelId", channelId],
    queryFn: () => getChannelLogo(channelId),
    enabled: !!channelId,
  });
  if (channelInfo) return channelInfo;
  return [];
};
export default useFetchChannelInfo;
