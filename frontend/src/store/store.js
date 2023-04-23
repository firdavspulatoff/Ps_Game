import { configureS, configureStore } from "@reduxjs/toolkit";
import searchSlice from "../slices/search";
import searchSlice3 from "../slices/search3";
import searchSlice2 from "../slices/search2";
import cartSlice from "../slices/cartSlice";
import userSlice from "../slices/userSlice";

export default configureStore({
  reducer: {
    search: searchSlice,
    search2: searchSlice2,
    search3: searchSlice3,
    cartSlice,
    user: userSlice,
  },
});
