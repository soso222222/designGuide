import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedState: { title: "" },
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    onSetSeletedItem: (state, { payload }) => {
      state.selectedState = payload;
    },
  },
});

export const { 
  onSetSeletedItem,
} = menuSlice.actions;

export default menuSlice;
