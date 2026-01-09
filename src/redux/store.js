import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import { productsApi } from "./api/productsApi";
import ordersReducer from "./slices/ordersSlice";

const cartOrderWishlistMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type.startsWith("cart/")) {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart.items));
  }
  if (action.type.startsWith("wishlist/")) {
    localStorage.setItem("wishlist", JSON.stringify(store.getState().wishlist.items));
  }
  if (action.type.startsWith("orders/")) {
    localStorage.setItem("orders", JSON.stringify(store.getState().orders.orders));
  }

  return result;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware, cartOrderWishlistMiddleware),
});
