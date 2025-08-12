import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/MoviesSlices"; // Assuming you have an action to add movie videos

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVidoes = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await response.json();
    console.log("Video data: ", data);
    const filterdVideos = data.results.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    const trailer = filterdVideos.length ? filterdVideos[0] : data.results[0];
    console.log("Trailer: ", trailer);
    dispatch(addTrailerVideo(trailer)); // Dispatch the action to add the video to the store
    // Handle video data as needed
  };
  useEffect(() => {
    getMovieVidoes();
  }, []);
};

export default useMovieTrailer;
