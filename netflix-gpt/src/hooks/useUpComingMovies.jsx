import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../Utils/MoviesSlices";
import { API_OPTIONS } from "../Utils/Constant";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
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
    getUpComingMovies();
  }, []);
};
export default useUpComingMovies;
