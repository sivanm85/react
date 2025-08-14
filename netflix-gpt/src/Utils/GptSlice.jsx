import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult: (state, action) => {
      const { moviesName, movieResults } = action.payload;
      state.movieNames = moviesName;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMoviesResult } = GptSlice.actions;

export default GptSlice.reducer;
