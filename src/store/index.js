import { combineReducers, configureStore } from "@reduxjs/toolkit";
import seasonReducer from "./season";
import statsReducer from "./stats";
import playerReducer from "./player";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  season: seasonReducer,
  stats: statsReducer,
  player: playerReducer,
});

const rootPersistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
