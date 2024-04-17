import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  userName: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuth = true;
      state.userName = action.payload;
    },

    logout(state) {
      state.isAuth = false;
      state.userName = "";
    },
  },
});


export const authActions = authSlice.actions;
export default authSlice.reducer;