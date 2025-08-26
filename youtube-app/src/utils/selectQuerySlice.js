import { createSlice } from "@reduxjs/toolkit";

const selectQuerySlice = createSlice({
  name: "selectQuery",
  initialState: {
    selectedQuery: "null",
  },
  reducers: {
    selectedQueryClicked: (state, action) => {
      state.selectedVideosQuery = action.payload;
    },
  },
});
export const { selectedQueryClicked } = selectQuerySlice.actions;
export default selectQuerySlice.reducer;
