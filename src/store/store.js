import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import toastReducer from "./slices/toastSlice";

const store = configureStore({
  reducer: { auth: authReducer, product: productReducer, toast: toastReducer },
});

export default store;
