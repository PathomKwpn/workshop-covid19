import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./datasSlice";
import tableReducer from "./tableSlice";
export const store = configureStore({
  reducer: { data: useReducer, tableName: tableReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
