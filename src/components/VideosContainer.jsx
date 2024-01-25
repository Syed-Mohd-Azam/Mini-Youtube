import { useEffect, useState } from "react";
import { API } from "../utils/constants";
import Shimmer from "./Shimmer";
import VideosList from "./VideosList";
const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const videosData = await fetch(API);
    const jsonData = await videosData.json();
    // console.log(jsonData);
    setVideos(jsonData);
  };
  return videos.length === 0 ? <Shimmer /> : <VideosList videos={videos} />;
};
export default VideosContainer;
