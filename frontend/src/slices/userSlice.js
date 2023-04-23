import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuth: false,
};

const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = action.payload.isOk;
      state.user = action.payload.user;
      if (action.payload.isOk && action.payload.token) {
        localStorage.setItem("jwt", action.payload.token);
      }
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
