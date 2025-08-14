import { createSlice } from "@reduxjs/toolkit";
const ConfigSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = ConfigSlice.actions;

export default ConfigSlice.reducer;
