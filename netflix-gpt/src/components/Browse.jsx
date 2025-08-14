import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useNowPopularMovies from "../hooks/useNowPopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import GptSearch from "./GptSearch";
import React from "react";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  useNowPopularMovies();
  useTopRatedMovies(); // Assuming you have a hook for top-rated movies
  useUpComingMovies(); // Assuming you have a hook for upcoming movies

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <React.Fragment>
          <MainContainer />
          <SecondaryContainer />
        </React.Fragment>
      )}
      {/* Conditionally render GptSearch based on showGptSearch state */}
    </div>
  );
};
export default Browse;
