import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchLaunches, selectLaunchesData } from "../spacexLaunchesSlice";
import RocketDetails from "./RocketDetails";
// import moment from "moment";

const CellRenderer = (props: any) => <RocketDetails {...props.value}/>;

const LaunchesDataGrid = () => {
  const dispatch = useAppDispatch();
  const launchesData = useAppSelector(selectLaunchesData);

  React.useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact
        rowData={launchesData}
        defaultColDef={{
          flex: 1,
        }}
        frameworkComponents={{
          customPinnedRowRenderer: CellRenderer,
        }}
      >
        <AgGridColumn
          headerName="Mission Name"
          field="mission_name"
          sortable
          filter
        ></AgGridColumn>
        <AgGridColumn
          headerName="Date"
          field="launch_date_utc"
          sortable
        ></AgGridColumn>
        <AgGridColumn field="details"></AgGridColumn>
        <AgGridColumn
          field="rocket"
          cellRendererSelector={(params) => ({
            component: "customPinnedRowRenderer",
          })}
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default LaunchesDataGrid;
