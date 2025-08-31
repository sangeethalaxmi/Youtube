export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=25&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;

export const VIDEO_URL = "https://www.youtube.com/embed/";

export const SUGGESION_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const CHAT_LIMIT = 10;
export const SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&order=date&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&q=";
export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&maxResults=10&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&id=";
export const CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;

export const SCROLL_THRESHOLD = 10;

export const LANGUAGES = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "Hindi", value: "hi" },
  { label: "Portuguese (Brazil)", value: "pt-BR" },
  { label: "Arabic", value: "ar" },
  { label: "Indonesian", value: "id" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Turkish", value: "tr" },
  { label: "Tamil", value: "ta" },
  { label: "Telugu", value: "te" },
  { label: "Vietnamese", value: "vi" },
];

export const SIZE_CLASSES = {
  sm: "w-[200px] md:w-[300px]",
  md: "w-[400px] md:w-[500px]",
  lg: "w-[700px] md:w-[800px]",
};

export const DEFAULTLANG = { label: "English", value: "en" };

export const YOUTUBE_WATCH_URL = "https://www.youtube.com/watch?v=";
