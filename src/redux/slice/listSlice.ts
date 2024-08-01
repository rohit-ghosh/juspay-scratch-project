import { createSlice } from "@reduxjs/toolkit";

export interface ListState {
  midAreaLists: {
    id: string;
    comps: string[];
  }[];
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
    setList: (state, action) => {
      let index = state.midAreaLists.findIndex(
        (x) => x.id === action.payload.id
      );
      let all_lists = state.midAreaLists;
      let [item] = all_lists.splice(index, 1);
      item.comps = action.payload.list;
      all_lists.splice(index, 0, item);

      return {
        midAreaLists: all_lists,
      };
    },
    addList: (state) => {
      let old_list = state.midAreaLists;
      let new_list_add = {
        id: `midAreaList-${state.midAreaLists.length}`,
        comps: ["MOVE"],
      };
      old_list.push(new_list_add);
      return {
        midAreaLists: old_list,
      };
    },
  },
});

export const { setList, addList } = listSlice.actions;

export default listSlice.reducer;
