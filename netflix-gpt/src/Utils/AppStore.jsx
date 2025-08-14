import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./MoviesSlices";
import gptReducer from "./GptSlice";
import configReducer from "./ConfigSlice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userReducer,
    movies: moviesReducer, // Assuming you have a moviesReducer
    gpt: gptReducer, // Assuming you have a gptReducer
    config: configReducer, // Assuming you have a configReducer
  },
});

export default store;
