import { createSlice } from "@reduxjs/toolkit";

export interface CharacterState {
  characters: { id: string; angle: number }[];
  active: string;
}

const initialState: CharacterState = {
  characters: [{ id: "sprite0", angle: 0 }],
  active: "sprite0",
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacterAngle: (state, action) => {
      state.characters[0].angle = action.payload;
    },
    setActive: (state, action) => {
      let charactersArray = state.characters;
      charactersArray.push({
        id: `sprite${state.characters.length}`,
        angle: 0,
      });

      state.characters = charactersArray;
    },
  },
});

export const { setCharacterAngle, setActive } =
  characterSlice.actions;

export default characterSlice.reducer;
