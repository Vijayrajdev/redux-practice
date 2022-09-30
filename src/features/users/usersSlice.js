import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Vijay" },
  { id: "1", name: "Karthi" },
  { id: "3", name: "kumaran" },
  { id: "4", name: "Abi" },
];

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
