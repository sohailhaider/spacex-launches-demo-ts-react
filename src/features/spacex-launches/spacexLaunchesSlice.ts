import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import Launch from "../../types/Launch";
import { fetchLaunchesFromAPI } from "./spacexLaunchesAPI";

export interface LaunchDataState {
  data: Launch[];
}

const initialState: LaunchDataState = {
  data: [],
};

export const spacexLaunchesSlice = createSlice({
  name: "spacexLaunches",
  initialState,
  reducers: {
    setLaunchesData: (state, action: PayloadAction<Launch[]>) => {
      state.data = action.payload;
    },
  },
});

export const fetchLaunches = (): AppThunk => (dispatch) => {
  fetchLaunchesFromAPI().then((launches) =>
    dispatch(setLaunchesData(launches))
  );
};

export const { setLaunchesData } = spacexLaunchesSlice.actions;

export const selectLaunchesData = (state: RootState) =>
  state.spacexLaunches.data;

export default spacexLaunchesSlice.reducer;
