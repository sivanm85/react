import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../Utils/MoviesSlices";
import { API_OPTIONS } from "../Utils/Constant";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((state) => state.movies.upComingMovies);
  const getUpComingMovies = async () => {
    // Function to fetch now upcoming movies
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addUpComingMovies(data.results));
  };
  useEffect(() => {
    // *** memoization *** means caching the result of a function call so that if it’s called again with the same inputs, it can return the cached result instead of recomputing it.
    if (!upComingMovies) getUpComingMovies();
  }, []);
};
export default useUpComingMovies;
