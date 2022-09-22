import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  status: "idle",
  error: null,
};

const uerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push({...action.payload});
      console.log( state.user);
    },
  },
  extraReducers: {},
});


export const { addUser } = uerSlice.actions;
export default uerSlice.reducer;
