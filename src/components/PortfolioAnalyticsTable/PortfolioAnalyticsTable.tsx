import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./PortfolioAnalyticsTable.styles.css";

import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import { useMemo, useState } from "react";
import { ColDef } from "ag-grid-community";

import ArrowUp from "../Icons/ArrowUp";
import ArrowDown from "../Icons/ArrowDown";

export default function AGGrid() {
  const defaultColDef = useMemo(() => {
    return { resizable: false };
  }, []);

  const UpTrendPnLFormatter = (props: CustomCellRendererProps) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="upTrend">
          <ArrowUp />
          <div style={{ fontSize: "12px" }}>{props.value}%</div>
        </div>
      </div>
    );
  };

  const DownTrendPnLFormatter = (props: CustomCellRendererProps) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="downTrend">
          <ArrowDown />
          <div style={{ fontSize: "12px" }}>{props.value}%</div>
        </div>
      </div>
    );
  };

  const [rowData, setRowData] = useState([
    {
      company: "MSFT",
      posEntry: "09/23/24",
      rating: 64950,
      exposure: 100.33,
      ytdPnl: 40.05,
      qtdPnl: 4.05,
      mtdPnl: 4.05,
      mav: 10,
      investedCost: 55,
      roic: 12,
      sector: "Information Technology",
      marcetCap: 560,
      analyst: "Mike Tyson",
    },
    {
      company: "MSFT",
      posEntry: "09/23/24",
      rating: 64950,
      exposure: 100.33,
      ytdPnl: 40.05,
      qtdPnl: 4.05,
      mtdPnl: 4.05,
      mav: 10,
      investedCost: 55,
      roic: 12,
      sector: "Information Technology",
      marcetCap: 560,
      analyst: "Mike Tyson",
    },
    {
      company: "MSFT",
      posEntry: "09/23/24",
      rating: 64950,
      exposure: 100.33,
      ytdPnl: 40.05,
      qtdPnl: 4.05,
      mtdPnl: 4.05,
      mav: 10,
      investedCost: 55,
      roic: 12,
      sector: "Information Technology",
      marcetCap: 560,
      analyst: "Mike Tyson",
    },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: "company", headerName: "COMPANY", width: 275 },
    { field: "posEntry", headerName: "POSITION ENTRY", width: 120 },
    { field: "rating", headerName: "RATING", width: 120 },
    {
      field: "exposure",
      headerName: "EXPOSURE",
      width: 100,
      valueFormatter: (p: { value: string }) => p.value + "%",
    },
    {
      field: "ytdPnl",
      headerName: "YTD PnL",
      cellRenderer: UpTrendPnLFormatter,
      cellStyle: { display: "flex", alignItems: "center" },
      width: 100,
    },
    {
      field: "qtdPnl",
      headerName: "QTD PnL",
      cellRenderer: DownTrendPnLFormatter,
      cellStyle: { display: "flex", alignItems: "center" },
      width: 100,
    },
    {
      field: "mtdPnl",
      headerName: "MTD PnL",
      cellRenderer: UpTrendPnLFormatter,
      cellStyle: { display: "flex", alignItems: "center" },
      width: 100,
    },
    {
      field: "mav",
      headerName: "MAV",
      width: 100,
      valueFormatter: (p: { value: string }) => p.value + "%",
    },
    {
      field: "investedCost",
      headerName: "INVESTED COST",
      width: 120,
      valueFormatter: (p: { value: string }) => p.value + "%",
    },
    {
      field: "roic",
      headerName: "ROIC",
      width: 100,
      valueFormatter: (p: { value: string }) => p.value + "%",
    },
    { field: "sector", headerName: "SECTOR", width: 250 },
    {
      field: "marcetCap",
      headerName: "MARCET CAP",
      width: 100,
      valueFormatter: (p: { value: string }) => "$" + p.value + "B",
    },
    { field: "analyst", headerName: "ANALYST", width: 180 },
  ]);

  return (
    <>
      <div className="ag-grid-custom">
        <div
          className="ag-theme-custom ag-theme-quartz-dark"
          style={{
            height: "532px",
            maxWidth: "1904px",
            // borderRadius: "16px",
            // border: "solid 1px #262626",
          }}
        >
          <AgGridReact
            rowData={rowData}
            // columnDefs={colDefs}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            // rowSelection={"multiple"}
            // masterDetail={true}
            // pagination={true}
            // paginationPageSize={10}
            // paginationPageSizeSelector={[10, 15]}
          />
        </div>
      </div>
    </>
  );
}
