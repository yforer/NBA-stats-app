import { createSlice } from "@reduxjs/toolkit";

const initialPlayerState = {
  playerAverages: [],
  playerGamesStats: [],
  playerData: { playerName: "", team: "" },
  gameData: { gameId: "", date: "", homeTeam: "", visitorTeam: "" },
};

const playerSlice = createSlice({
  name: "player",
  initialState: initialPlayerState,
  reducers: {
    savePlayerAverages(state, action) {
      state.playerAverages = action.payload;
    },
    savePlayerGamesStats(state, action) {
      state.playerGamesStats = action.payload;
    },
    savePlayerData(state, action) {
      state.playerData.playerName = action.payload.name;
      state.playerData.team = action.payload.team;
    },
    saveChosenGameData(state, action) {
      state.gameData.gameId = action.payload.id;
      state.gameData.date = action.payload.date;
      state.gameData.homeTeam = action.payload.homeTeam;
      state.gameData.visitorTeam = action.payload.visitorTeam;
    },
    initPlayerData(state) {
      state.playerAverages = initialPlayerState.playerAverages;
      state.playerGamesStats = initialPlayerState.playerGamesStats;
      state.playerData = initialPlayerState.playerData;
      state.gameChosenId = initialPlayerState.gameChosenId;
    },
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice.reducer;
