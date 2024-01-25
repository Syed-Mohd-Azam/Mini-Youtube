/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import VideoCard from "./VideoCard";
const VideosList = ({ videos }) => {
  //   console.log(videos);
  // eslint-disable-next-line react/prop-types
  const { items } = videos;
  return (
    <>
      <section className="flex flex-wrap gap-6 justify-center">
        {items?.map((item) => (
          <VideoCard key={item?.id} item={item} />
        ))}
      </section>
    </>
  );
};
export default VideosList;
