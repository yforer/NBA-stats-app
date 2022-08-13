import { createSlice } from "@reduxjs/toolkit";

const initialStatsState = {
  statsIsShowen: false,
  gameInfo: {
    gameId: "",
    homeTeam: "",
    homeTeamId: "",
    visitorTeam: "",
    visitorTeamId: "",
    date: "",
  },
  teamGameStatsChosen: false,
  playersGameStatsChosen: false,
  playerAveragesStatsChosen: false,
  singlePlayerGameStatsChosen: false,
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
        homeTeamId: action.payload.homeTeamId,
        visitorTeam: action.payload.visitorTeam,
        visitorTeamId: action.payload.visitorTeamId,
        date: action.payload.date,
      };
    },
    teamGameStatsChosenHandler(state) {
      state.teamGameStatsChosen = true;
    },
    playersGameStatsChosenHandler(state) {
      state.playersGameStatsChosen = true;
    },
    playerAveragesStatsChosenHandler(state) {
      state.playerAveragesStatsChosen = true;
    },
    singlePlayerGameStatsChosenHandler(state) {
      state.singlePlayerGameStatsChosen = true;
    },
    initiateStatsChosen(state) {
      state.teamGameStatsChosen = false;
      state.playersGameStatsChosen = false;
      state.playerAveragesStatsChosen = false;
      state.singlePlayerGameStatsChosen = false;
      state.gameInfo = initialStatsState.gameInfo;
    },
  },
});

export const statsActions = statsSlice.actions;

export default statsSlice.reducer;
