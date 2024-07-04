import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import  loginReducer  from "../features/auth/loginSlice";


export const store = configureStore({
  reducer:
  {
    todo: todoReducer,
    auth: loginReducer
  },

});