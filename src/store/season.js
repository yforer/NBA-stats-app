import { createSlice } from "@reduxjs/toolkit";

const initialSeasonState = {
  season: "",
  isSeasonChosen: false,
};

const seasonSlice = createSlice({
  name: "season",
  initialState: initialSeasonState,
  reducers: {
    seasonYear(state, action) {
      state.season = action.payload;
    },
    seasonChosen(state, action) {
      if (action.payload >= 1999 && action.payload <= 2021) {
        state.isSeasonChosen = true;
      }
    },
    init(state) {
      state.isSeasonChosen = false;
    },
  },
});

export const seasonActions = seasonSlice.actions;

export default seasonSlice.reducer;
