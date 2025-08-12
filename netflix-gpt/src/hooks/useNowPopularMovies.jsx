import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPopularMovies } from "../Utils/MoviesSlices";
import { API_OPTIONS } from "../Utils/Constant";

const useNowPopularMovies = () => {
  const dispatch = useDispatch();
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
    getNowPopularMovies();
  }, []);
};
export default useNowPopularMovies;
