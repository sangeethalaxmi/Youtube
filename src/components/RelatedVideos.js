import RelatedVideoCard from "./RelatedVideoCard";
import useFetchSearchResult from "../utils/hooks/useFetchSearchResult";
import Shimmer from "./Shimmer";

const RelatedVideos = ({ relatedTitle }) => {
  const videosList = useFetchSearchResult(relatedTitle) ?? [];
  if (videosList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className=" mt-4  w-full rounded-lg p-2  ">
      {videosList.map((video) => (
        <RelatedVideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default RelatedVideos;
