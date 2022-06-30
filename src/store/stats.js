import { createSlice } from "@reduxjs/toolkit";

const initialStatsState = {
  statsIsShowen: false,
};

const statsSlice = createSlice({
  name: "stats",
  initialState: initialStatsState,
  reducers: {
    showStatsHandler(state) {
      state.statsIsShowen = true;
    },
    hideStatsHandler(state) {
      state.statsIsShowen = false;
    },
  },
});

export const statsActions = statsSlice.actions;

export default statsSlice.reducer;
