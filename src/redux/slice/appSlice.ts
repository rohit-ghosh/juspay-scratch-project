import { createSlice } from "@reduxjs/toolkit";
import { random } from "lodash";

export interface AppState {
  appInitiated: boolean;
  firstLoadCompleted: boolean;
  appId: number;
}

const initialState: AppState = {
  appInitiated: false,
  firstLoadCompleted: false,
  appId: random(100, 100000000),
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    appInitiated: (state) => {
      state.appInitiated = true;
    },
    firstLoadCompleted: (state) => {
      state.firstLoadCompleted = true;
    },
  },
});

export const { appInitiated, firstLoadCompleted } = appSlice.actions;

export default appSlice.reducer;
