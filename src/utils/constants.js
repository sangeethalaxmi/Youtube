export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=25&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;

export const VIDEO_URL = "https://www.youtube.com/embed/";

export const SUGGESION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const CHAT_LIMIT = 10;
export const SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&q=#####&type=video&maxResults=10&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;
export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&i&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&id=";
