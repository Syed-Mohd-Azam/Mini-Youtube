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
    },
  } = item;
  return <>VIDE0CARD </>;
};
export default VideoCard;
