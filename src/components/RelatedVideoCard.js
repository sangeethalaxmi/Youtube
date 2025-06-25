import React from "react";
import { formatUploadedDays, formatViewNumber } from "../utils/helper";
import Icons from "./Icons";

const RelatedVideoCard = ({ info }) => {
  const { statistics, snippet } = info;
  const { viewCount } = statistics;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;
  // const channelImg = useFetchChannelInfo(snippet);

  return (
    <div className="flex p-2 shadow-lg mb-2 flex-col mobile:flex-row mobile: gap-4 bg-primary">
      <img
        src={thumbnails?.default?.url}
        alt="thumbnails"
        className="rounded-lg"
      />
      <div className="flex-1 min-w-0 w-full whitespace-break-spaces">
        <h2 className="text-sm font-bold ">{title}</h2>
        <h3 className="text-sm text-textSecondary line-clamp-1">
          {channelTitle}
        </h3>
        <div className="flex items-center gap-1 text-textSecondary text-sm">
          <span className="text-xs text-textSecondary">
            {formatViewNumber(viewCount)} views
          </span>
          <span>
            <Icons
              name="circle"
              size={4}
              className="bg-textSecondary text-textSecondary"
              strokeWidth={2}
            />
          </span>
          <span className=""> {formatUploadedDays(publishedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default RelatedVideoCard;
