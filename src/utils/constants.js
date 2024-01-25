const YOUTUBE_API_KEY = "AIzaSyD5o_WlNFauPuRtVsZIKOm9LABtFJwDYtk";
const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=";
export const API = YOUTUBE_VIDEOS_API + YOUTUBE_API_KEY;
