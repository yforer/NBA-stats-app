import { createSlice } from "@reduxjs/toolkit";

const initialStatsState = {
  statsIsShowen: false,
  gameInfo: {
    gameId: "",
    homeTeam: "",
    visitorTeam: "",
    date: "",
  },
  teamGameStatsChosen: false,
  playersGameStatsChosen: false,
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
    gameChosenHandler(state, action) {
      state.gameInfo = {
        gameId: action.payload.gameId,
        homeTeam: action.payload.homeTeam,
        visitorTeam: action.payload.visitorTeam,
        date: action.payload.date,
      };
    },
    teamGameStatsChosenHandler(state) {
      state.teamGameStatsChosen = true;
    },
    playersGameStatsChosenHandler(state) {
      state.playersGameStatsChosen = true;
    },
    initiateStatsChosen(state) {
      state.teamGameStatsChosen = false;
      state.playersGameStatsChosen = false;
      state.gameInfo = initialStatsState.gameInfo;
    },
  },
});

export const statsActions = statsSlice.actions;

export default statsSlice.reducer;
