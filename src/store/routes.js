import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";

export const rootReducer = combineReducers({
  user: userReducer,
});
