import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./PortfolioAnalyticsTable.styles.css";

import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import { useMemo, useState } from "react";
import {
  ColDef,
  SizeColumnsToContentStrategy,
  SizeColumnsToFitGridStrategy,
  SizeColumnsToFitProvidedWidthStrategy,
} from "ag-grid-community";

import ArrowUpIcon from "../Icons/ArrowUp.icon";
import ArrowDownIcon from "../Icons/ArrowDown.icon";

import DoubleArrowUpIcon from "../Icons/DoubleArrowUp.icon";
import DoubleArrowDownIcon from "../Icons/DoubleArrowDown.icon";
import CaretDownIcon from "../Icons/CaretDown.icon";
import CaretUpIcon from "../Icons/CaretUp.icon";

export default function AGGrid() {
  const defaultColDef = useMemo(() => {
    return { resizable: true };
  }, []);

  const autoSizeStrategy = useMemo<
    | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy
  >(() => {
    return {
      type: "fitCellContents",
    };
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
          <ArrowUpIcon />
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
          <ArrowDownIcon />
          <div style={{ fontSize: "12px" }}>{props.value}%</div>
        </div>
      </div>
    );
  };

  const RatingFormatter = (props: CustomCellRendererProps) => {
    if (props.value === "large_buy") {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "cenrter",
            justifyContent: "start",
          }}
        >
          <div className="rating_buyTrend">
            <DoubleArrowUpIcon />
            <div>Large buy</div>
          </div>
        </div>
      );
    } else if (props.value === "buy") {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "cenrter",
            justifyContent: "start",
          }}
        >
          <div className="rating_buyTrend">
            <CaretUpIcon />
            <div>Buy</div>
          </div>
        </div>
      );
    } else if (props.value === "large_sell") {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "cenrter",
            justifyContent: "start",
          }}
        >
          <div className="rating_sellTrend">
            <DoubleArrowDownIcon />
            <div>Large sell</div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "cenrter",
            justifyContent: "start",
          }}
        >
          <div className="rating_sellTrend">
            <CaretDownIcon />
            <div>Sell</div>
          </div>
        </div>
      );
    }
  };

  const [rowData] = useState([
    {
      company: "MSFT",
      posEntry: "09/23/24",
      rating: "large_buy",
      exposure: 100.33,
      ytdPnl: 40.05,
      qtdPnl: 4.05,
      mtdPnl: 4.37,
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
      rating: "large_sell",
      exposure: 100.33,
      ytdPnl: 73.05,
      qtdPnl: 9.05,
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
      rating: "sell",
      exposure: 100.33,
      ytdPnl: 40.05,
      qtdPnl: 4.05,
      mtdPnl: 5.55,
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
      rating: "buy",
      exposure: 100.33,
      ytdPnl: 40.05,
      qtdPnl: 4.05,
      mtdPnl: 5.55,
      mav: 10,
      investedCost: 55,
      roic: 12,
      sector: "Information Technology",
      marcetCap: 560,
      analyst: "Mike Tyson",
    },
  ]);

  const [colDefs] = useState<ColDef[]>([
    { field: "company", headerName: "COMPANY" },
    { field: "posEntry", headerName: "POSITION ENTRY" },
    {
      field: "rating",
      headerName: "RATING",
      cellRenderer: RatingFormatter,
    },
    {
      field: "exposure",
      headerName: "EXPOSURE",
      valueFormatter: (p: { value: string }) => p.value + "%",
    },
    {
      field: "ytdPnl",
      headerName: "YTD PnL",
      cellRenderer: UpTrendPnLFormatter,
      cellStyle: { display: "flex", alignItems: "center" },
    },
    {
      field: "qtdPnl",
      headerName: "QTD PnL",
      cellRenderer: DownTrendPnLFormatter,
      cellStyle: { display: "flex", alignItems: "center" },
    },
    {
      field: "mtdPnl",
      headerName: "MTD PnL",
      cellRenderer: UpTrendPnLFormatter,
      cellStyle: { display: "flex", alignItems: "center" },
    },
    {
      field: "mav",
      headerName: "MAV",
      valueFormatter: (p: { value: string }) => p.value + "%",
    },
    {
      field: "investedCost",
      headerName: "INVESTED COST",
      valueFormatter: (p: { value: string }) => p.value + "%",
    },
    {
      field: "roic",
      headerName: "ROIC",
      // width: 200,
      valueFormatter: (p: { value: string }) => p.value + "%",
    },
    { field: "sector", headerName: "SECTOR" },
    {
      field: "marcetCap",
      headerName: "MARCET CAP",
      valueFormatter: (p: { value: string }) => "$" + p.value + "B",
    },
    { field: "analyst", headerName: "ANALYST" },
  ]);

  return (
    <>
      <div
        className="ag-theme-custom ag-theme-quartz-dark"
        style={{
          height: "97%",
          maxWidth: "1904px",
          // borderRadius: "16px",
          // border: "solid 1px #262626",
        }}
      >
        <AgGridReact
          rowData={rowData}
          autoSizeStrategy={autoSizeStrategy}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          // rowSelection={"multiple"}
          // masterDetail={true}
          // pagination={true}
          // paginationPageSize={10}
          // paginationPageSizeSelector={[10, 15]}
        />
      </div>
    </>
  );
}
