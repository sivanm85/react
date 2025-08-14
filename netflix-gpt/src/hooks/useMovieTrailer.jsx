import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/MoviesSlices"; // Assuming you have an action to add movie videos

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideos = useSelector((state) => state.movies.trailerVideo);

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
    // *** memoization *** means caching the result of a function call so that if it’s called again with the same inputs, it can return the cached result instead of recomputing it.
    if (!trailerVideos) getMovieVidoes();
  }, []);
};

export default useMovieTrailer;
