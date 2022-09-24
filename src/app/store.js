import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlicer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
