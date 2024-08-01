import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompList {
  id: string;
  comps: string[];
}

export interface ListState {
  midAreaLists: CompList[];
}

const initialState: ListState = {
  midAreaLists: [
    {
      id: "midAreaList-0",
      comps: ["MOVE"],
    },
  ],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    updateList: (state, action) => {
      state.midAreaLists = action.payload;
    },
    addList: (state) => {
      let old_list = state.midAreaLists;
      let new_list_add = {
        id: `midAreaList-${state.midAreaLists.length}`,
        comps: ["MOVE"],
      };
      old_list.push(new_list_add);
      state.midAreaLists = old_list;
    },
  },
});

export const { updateList, addList } = listSlice.actions;

export default listSlice.reducer;
