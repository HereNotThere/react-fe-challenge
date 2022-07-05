import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import calenderReducer from "../reducers/calendarSlice";

export const store = configureStore({
  reducer: {
    calender: calenderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
