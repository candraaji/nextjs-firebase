import { createAction } from "@reduxjs/toolkit";
import { UserState } from "./reducers";

// Define action types
export const setUser = createAction<UserState>("user/setUser");
export const clearUser = createAction("user/clearUser");
