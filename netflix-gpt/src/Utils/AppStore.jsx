import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userReducer,
  },
});

export default store;
