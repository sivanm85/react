import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/MoviesSlices";
import { API_OPTIONS } from "../Utils/Constant";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
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
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
