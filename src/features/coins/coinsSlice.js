import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  status: "idle",
};

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setCoins: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCoins } = coinsSlice.actions;
export default coinsSlice.reducer;
