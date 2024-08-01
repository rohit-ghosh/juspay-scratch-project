import { createSlice } from "@reduxjs/toolkit";

export interface EventState {
  repeat: any;
  wait: any;
}

const initialState: EventState = {
  repeat: {},
  wait: {},
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setRepeat: (state, action) => {
      state.repeat = action.payload.value;
    },
    setWait: (state, action) => {
      state.wait = action.payload.value;
    },
  },
});

export const { setRepeat, setWait } = eventSlice.actions;

export default eventSlice.reducer;
