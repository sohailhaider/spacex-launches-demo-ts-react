import spacexLaunchesReducer, {
  LaunchDataState,
  setLaunchesData,
  // fetchLaunches, //can do it with mock server but it would take more time.
} from "./spacexLaunchesSlice";

//Test Data
const initialState: LaunchDataState = {
  data: [
    {
      mission_name: "mission 3",
      details: "some details",
      launch_date_utc: "some utc Date",
      rocket: {
        rocket_id: 1,
        rocket_name: "some rocket",
        rocket_type: "a1",
      },
    },
  ],
};
describe("Launches Reducer test", () => {
  it("should handle initial state", () => {
    expect(spacexLaunchesReducer(undefined, { type: "unknown" })).toEqual({
      data: [],
    });
  });

  it("should handle setData", () => {
    const actual = spacexLaunchesReducer(
      undefined,
      setLaunchesData(initialState.data)
    );
    expect(actual.data).toEqual(initialState.data);
  });
});
