import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import spacexLaunchesReducer from "../features/spacex-launches/spacexLaunchesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    spacexLaunches: spacexLaunchesReducer
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
