export const GOOGLE_API_KEY = "AIzaSyCYOl6HhWF0oWm75RRzSb_ewgB9bZSx-AM";
export const YOUTUBE_API_KEY =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_RELATED_VIDEOS =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=VIDEO_ID&type=video&key=" +
  GOOGLE_API_KEY;
