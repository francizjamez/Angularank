import { configureStore } from "@reduxjs/toolkit";
import contributorsReducer from "./contributorsSlice";

export const store = configureStore({
  reducer: {
    contributors: contributorsReducer,
  },
});
