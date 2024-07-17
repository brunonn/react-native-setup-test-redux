import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { userAPI } from "./user.api";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await userAPI.fetchUser();
  return response;
});

interface UserState {
  name: string;
  status: "idle" | "loading" | "complete";
}

const initialState: UserState = {
  name: "No user",
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "complete";
      state.name = action.payload.name;
    });
  },
});

export const selectUserName = (state: RootState) => state.user.name;
export const selectUserFetchStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;
