import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import { productsApi } from "./api/productsApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});
