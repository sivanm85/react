import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utils/MoviesSlices";
import { API_OPTIONS } from "../Utils/Constant";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    // Function to fetch now top Rated movies
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    // *** memoization *** means caching the result of a function call so that if it’s called again with the same inputs, it can return the cached result instead of recomputing it.
    if (!topRatedMovies) getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
