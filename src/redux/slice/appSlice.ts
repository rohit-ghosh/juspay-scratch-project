import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  appInitiated: boolean;
  firstLoadCompleted: boolean;
}

const initialState: AppState = {
  appInitiated: false,
  firstLoadCompleted: false,
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
