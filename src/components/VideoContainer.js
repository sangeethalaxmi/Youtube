import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useFetchPopularVideos from "../hooks/useFetchPopularVideos";

const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);
  // const isLoading = useSelector((state) => state.app.isLoading);
  const videos = useFetchPopularVideos();
  console.log(videos);
  if (videos.length === 0) {
    return <Shimmer />;
  }
  const WithAddVideoCard = AddVideoCard(VideoCard);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden ">
      {videos?.map((video) =>
        video?.items?.map((data) => {
          return (
            <>
              <Link to={"/watch?v=" + data.id} key={data.id}>
                {/* <WithAddVideoCard info={video} /> */}
                <VideoCard info={data}></VideoCard>
              </Link>
            </>
          );
        })
      )}
    </div>
  );
};

export default VideoContainer;
