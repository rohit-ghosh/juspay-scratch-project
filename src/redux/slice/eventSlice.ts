import { createSlice } from "@reduxjs/toolkit";

export interface EventState {
  repeat: object;
  wait: object;
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
      return {
        ...state,
        repeat: action.payload.value,
      };
    },
    setWait: (state, action) => {
      return {
        ...state,
        wait: action.payload.value,
      };
    },
  },
});

export const { setRepeat, setWait } = eventSlice.actions;

export default eventSlice.reducer;
