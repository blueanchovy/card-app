import { configureStore } from "@reduxjs/toolkit";
import ProjectReducer from "../features/projectSlice";
export const store = configureStore({
  reducer: {
    project: ProjectReducer,
  },
});
