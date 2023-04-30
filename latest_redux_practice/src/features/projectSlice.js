import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  emailAddress: "",
  password: "",
  title: "",
  description: "",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
      console.log(state[field]);
    },
  },
});

export const { updateField } = projectSlice.actions;

export const selectField = (field) => (state) => state.project[field];

export default projectSlice.reducer;
