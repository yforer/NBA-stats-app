import { configureStore } from "@reduxjs/toolkit";
import seasonReducer from "./season";
import statsReducer from "./stats";
import playerReducer from "./player";

const store = configureStore({
  reducer: {
    season: seasonReducer,
    stats: statsReducer,
    player: playerReducer,
  },
});

export default store;
