/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const VideoCard = ({ item }) => {
  console.log(item);
  const {
    // eslint-disable-next-line react/prop-types
    snippet: {
      thumbnails: {
        medium: { url },
      },
      localized: { title },
      channelTitle,
    },
    statistics: { viewCount },
  } = item;
  return (
    <>
      <section className="w-80 ">
        <article>
          <img
            className="mb-2 rounded-2xl w-full h-48 hover:scale-90 hover:brightness-50"
            src={url}
            alt="Video"
          />
        </article>
        <article className="flex flex-col gap-2 p-3 bg-purple-50 h-32 rounded-2xl hover:scale-110">
          <article className="flex justify-between">
            <p className=" text-sm font-semibold">{channelTitle}</p>
            <p className="text-sm font-semibold">
              {(viewCount / 1000).toFixed(0)}k+ views
            </p>
          </article>
          <p className="text-lg italic ">{title}</p>
        </article>
      </section>
    </>
  );
};
export default VideoCard;
