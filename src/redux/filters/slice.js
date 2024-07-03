import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    phone: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      const { type, value } = action.payload;
      state[type] = value;
    },
  },
});
export const { changeFilter } = filtersSlice.actions;
export const filtersSliceReducer = filtersSlice.reducer;
