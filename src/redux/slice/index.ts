import appSlice from "./appSlice";
import characterSlice from "./characterSlice";
import eventSlice from "./eventSlice";
import listSlice from "./listSlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = {
  app: appSlice,
  character: characterSlice,
  events: eventSlice,
  list: listSlice
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
