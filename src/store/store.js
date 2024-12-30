import { configureStore } from "@reduxjs/toolkit";
import typingReducer from "../slices/typingSlice";

const store = configureStore({
  reducer: {
    typing: typingReducer,
  },
});

export default store;
