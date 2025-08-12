import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    nowPopularMovies: null, // Added for popular movies
    topRatedMovies: null, // Added for top rated movies
    upComingMovies: null, // Added for upcoming movies
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addNowPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload; // Assuming you want to replace nowPlayingMovies with popular movies
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload; // Assuming you want to replace nowPlayingMovies with topRated movies
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload; // Assuming you want to replace nowPlayingMovies with upComing movies
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addNowPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
