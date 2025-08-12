import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //console.log("movieList  >>----> :", movies);
  return (
    <div className="px-6">
      <h2 className="text-3xl py-2 text-white">{title}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.length > 0 &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
