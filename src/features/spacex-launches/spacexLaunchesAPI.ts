import axios from "axios";
import Launch from "../../types/Launch";

export const fetchLaunchesFromAPI = async (limit: number = 50): Promise<Launch[]> => {
  const response = await axios.get("https://api.spacexdata.com/v3/launches", {
    params: {
      limit: limit,
    },
  });
  if (response.status !== 200) {
    return [];
  } else {
    return response.data.map(
      (d: any): Launch => ({
        mission_name: d.mission_name,
        launch_date_utc: d.launch_date_utc,
        details: d.details,
        rocket: d.rocket,
      })
    );
  }
};
