import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  name: string;
  email: string;
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  name: "",
  email: "",
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (
      state,
      action: PayloadAction<{ name: string; email: string }>
    ) => {
      state.loading = false;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } =
  userSlice.actions;
export default userSlice.reducer;
