/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
const VideosList = ({ videos }) => {
  //   console.log(videos);
  // eslint-disable-next-line react/prop-types
  const { items } = videos;
  return (
    <>
      <section className="flex flex-wrap gap-6 justify-center">
        {items?.map((item) => (
          <Link key={item?.id} to={"/watch?v=" + item?.id}>
            <VideoCard item={item} />
          </Link>
        ))}
      </section>
    </>
  );
};
export default VideosList;
