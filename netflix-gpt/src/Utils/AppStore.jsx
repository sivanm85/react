import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./MoviesSlices";

const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userReducer,
    movies: moviesReducer, // Assuming you have a moviesReducer
  },
});

export default store;
