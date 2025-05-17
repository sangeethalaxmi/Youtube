import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    //we use object instead of array since to find a element we need to loop which cause O(n) -n- number ofelements .. using map in object gives better performance
  },
  reducers: {
    cacheSuggestions: (state, action) => {
      //   return { ...action.payload, ...state };
      state = Object.assign(state, action.payload);
      //   console.log(state);
    },
  },
});

export const { cacheSuggestions } = searchSlice.actions;

export default searchSlice.reducer;
