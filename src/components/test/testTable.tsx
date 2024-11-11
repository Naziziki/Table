import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useCallback, useState } from "react";

import { getData } from "./GetData";
import { ColDef } from "ag-grid-community";

export default function TestGrid() {
  const employmentType = ["Permanent", "Contract"];

  const [rowData] = useState(getData());

  const [colDefs] = useState<ColDef[]>([
    {
      field: "contact",
      headerName: "Employee",
      width: 120,
    },
    {
      field: "employmentType",
      headerName: "Employment Type",
      editable: true,
      width: 180,
      minWidth: 180,
      flex: 1,
      cellEditorParams: {
        values: employmentType,
      },
    },
    {
      field: "jobTitle",
      headerName: "Job Title",
      width: 120,
    },
  ]);

  //   const getDataPath = useCallback<GetDataPath>((data) => data.orgHierarchy, []);

  return (
    <>
      <div
        className="ag-theme-quartz"
        style={{
          height: "532px",
          borderRadius: "16px",
          border: "solid 1px #262626",
          overflow: "hidden",
        }}
      >
        <AgGridReact
          //   ref={gridRef}
          columnDefs={colDefs}
          rowData={rowData}
          groupDefaultExpanded={1} //раскрывает все пункты
          //   getDataPath={getDataPath}
          //   treeData
        />
      </div>
    </>
  );
}
