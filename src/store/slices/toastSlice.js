import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  title: "",
  message: "",
  status: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast(state, action) {
      return {
        show: true,
        title: action.payload.title,
        message: action.payload.message,
        status: action.payload.status,
      };
    },

    close(state) {
      return {
        state: initialState
      };
    },
  },
});

export const toastActions = toastSlice.actions;
export default toastSlice.reducer;
