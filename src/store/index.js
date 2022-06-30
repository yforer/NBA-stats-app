import { configureStore } from "@reduxjs/toolkit";
import seasonReducer from "./season";
import statsReducer from "./stats";

const store = configureStore({
  reducer: {
    season: seasonReducer,
    stats: statsReducer,
  },
});

export default store;
