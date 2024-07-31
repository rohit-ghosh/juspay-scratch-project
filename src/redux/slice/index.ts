import appSlice from "./appSlice";
import { combineReducers } from "@reduxjs/toolkit";

// Non persisted reducers
const nonPersistedReducers = {
  app: appSlice,
};

const rootReducer = combineReducers({
  ...nonPersistedReducers,
});

export default rootReducer;
