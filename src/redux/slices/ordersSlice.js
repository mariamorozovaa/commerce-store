import { createSlice } from "@reduxjs/toolkit";

const loadOrdersFromStorage = () => {
  const saved = localStorage.getItem("orders");
  return saved ? JSON.parse(saved) : [];
};

const initialState = {
  orders: loadOrdersFromStorage(),
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export default ordersSlice.reducer;
export const { addOrder } = ordersSlice.actions;
