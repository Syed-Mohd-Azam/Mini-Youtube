/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import VideoCard from "./VideoCard";
const VideosList = ({ videos }) => {
  //   console.log(videos);
  // eslint-disable-next-line react/prop-types
  const { items } = videos;
  return (
    <>
      {items?.map((item) => (
        <VideoCard key={item?.id} item={item} />
      ))}
    </>
  );
};
export default VideosList;
