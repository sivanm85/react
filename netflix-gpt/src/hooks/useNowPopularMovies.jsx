import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPopularMovies } from "../Utils/MoviesSlices";
import { API_OPTIONS } from "../Utils/Constant";

const useNowPopularMovies = () => {
  const dispatch = useDispatch();
  const nowPopularMovies = useSelector(
    (state) => state.movies.nowPopularMovies
  );
  const getNowPopularMovies = async () => {
    // Function to fetch now popular movies
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    console.log("Popular ---->>>", data.results);
    dispatch(addNowPopularMovies(data.results));
  };
  useEffect(() => {
    // *** memoization *** means caching the result of a function call so that if it’s called again with the same inputs, it can return the cached result instead of recomputing it.
    if (!nowPopularMovies) getNowPopularMovies();
  }, []);
};
export default useNowPopularMovies;
