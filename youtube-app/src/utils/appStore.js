import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import selectQuerySlice from "./selectQuerySlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    selectQuery: selectQuerySlice,
    chat: chatSlice,
  },
});

export default store;
