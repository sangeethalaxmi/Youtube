import { Link, useSearchParams } from "react-router-dom";
import useFetchSearchResult from "../utils/useFetchSearchResult";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

const ResultContainer = () => {
  const [searchParam] = useSearchParams();
  const searchParameter = searchParam.get("search_query");
  const videosList = useFetchSearchResult(searchParameter) ?? [];
  if (videosList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="flex flex-wrap">
      {videosList.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          {/* <WithAddVideoCard info={video} /> */}
          <VideoCard info={video}></VideoCard>
        </Link>
      ))}
    </div>
  );
};

export default ResultContainer;
