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
      return {
        ...state,
        active: action.payload.id,
      };
    },
    setActive: (state) => {
      let charactersArray = state.characters;
      charactersArray.push({
        id: `sprite${state.characters.length}`,
        angle: 0,
      });

      return {
        ...state,
        characters: charactersArray,
      };
    },
    addCharacter: (state, action) => {
      let characters_Array = state.characters;
      let curr_character = characters_Array.find(
        (character) => character.id === state.active
      );
      const curr_character_index = characters_Array.findIndex(
        (character) => character.id === state.active
      );
      if (curr_character && curr_character_index > -1) {
        curr_character.angle = action.payload.angle;
        characters_Array[curr_character_index] = curr_character;
      }
      return {
        ...state,
        characters: characters_Array,
      };
    },
  },
});

export const { setCharacterAngle, setActive, addCharacter } =
  characterSlice.actions;

export default characterSlice.reducer;
