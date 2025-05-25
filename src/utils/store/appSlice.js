import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isLoading: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const { toggleMenu, closeMenu, setLoading } = appSlice.actions;

export default appSlice.reducer;
