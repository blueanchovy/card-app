import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [
      {
        cardName: "Project 01",
        projectBudget: "5000",
        projectEndDate: "03/07/2022, 2:39 pm",
      },
    ],
    project: {
      cardName: "",
      projectBudget: "",
      projectEndDate: "",
    },
  },
  reducers: {
    getProject: (state, action) => {
      state.project = state.projects.find((el) => el.id == action.payload);
    },
    clearProject: (state) => {
      state.project = {
        cardName: "",
        projectBudget: "",
        projectEndDate: "",
      };
    },
    addProject: (state, action) => {
      state.projects = [action.payload, ...state.projects];
    },
    updateProject: (state, action) => {
      state.projects = state.projects.map((el) =>
        el.id == action.payload.id ? action.payload : el
      );
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter((el) => el.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getProject,
  clearProject,
  addProject,
  updateProject,
  deleteProject,
} = projectSlice.actions;

export default projectSlice.reducer;
