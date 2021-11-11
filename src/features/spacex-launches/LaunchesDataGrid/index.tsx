import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const FullWidthCellRenderer = (props: any) => {
  console.log(props);
  return <>{props.node.data.make}</>;
};

const LaunchesDataGrid = () => {
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact
        rowData={rowData}
        // isFullWidthCell={(params) => true}
        defaultColDef={{
          flex: 1,
          // sortable: true,
          resizable: true,
        }}
        // frameworkComponents={{ fullWidthCellRenderer: FullWidthCellRenderer }}
        // fullWidthCellRenderer={"fullWidthCellRenderer"}
      >
        <AgGridColumn field="make" sortable></AgGridColumn>
        <AgGridColumn field="model"></AgGridColumn>
        <AgGridColumn field="price"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default LaunchesDataGrid;
