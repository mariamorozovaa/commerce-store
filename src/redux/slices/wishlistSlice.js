import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const itemId = action.payload;
      state.items.push(itemId);
    },
    removeFromWishlist: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((id) => id !== itemId);
    },
    toggleWishlist: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item === itemId);
      if (existingItem) state.items = state.items.filter((item) => item !== itemId);
      else state.items.push(itemId);
    },
  },
});

export default wishlistSlice.reducer;
export const { addToWishlist, removeFromWishlist, toggleWishlist } = wishlistSlice.actions;
