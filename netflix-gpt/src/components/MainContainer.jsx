import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies) return null; // Handle loading state or no movies available
  const mainMovie = movies[0]; // Assuming you want to display the first movie's title and background
  console.log("mainMovie >>----> :", mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="main-container">
      <VideoTitle title={original_title} overview={overview} Id={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
