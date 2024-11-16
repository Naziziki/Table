import PortfolioAnalyticsTable from "../components/PortfolioAnalyticsTable/PortfolioAnalyticsTable";
import LightweightChart from "../components/LightweightChart/LightweightChart";
import EChart from "../components/EChart/EChart";

import BasicMenu from "../components/Button/BasicMenu";
import IconButton from "@mui/material/IconButton";

import ExpandIcon from "../components/Icons/Expand.icon";

import "./TablePage.style.css";

export default function TablePage() {
  return (
    <>
      <div>
        {/* Portfolio Analytics Table */}
        <div className="portfolioAnalyticsTable__container">
          <div className="portfolioAnalyticsTable__header">
            <BasicMenu textButton="Portfolio Summary" variant="text" />
            <div style={{ display: "flex", gap: "8px" }}>
              <BasicMenu textButton="Company" variant="Button_outlined" />
              <IconButton className="Button_outlined">
                <ExpandIcon />
              </IconButton>
            </div>
          </div>
          <PortfolioAnalyticsTable />
        </div>

        <div className="charts__container_flex">
          {/* Lightweight Chart  */}
          <div className="lightweightChart__container">
            <div className="lightweightChart__header">
              <div className="lightweightChart__header_title">
                Performance Overview
              </div>
              <BasicMenu textButton="PnL" variant="Button_outlined" />
            </div>
            <div style={{ position: "relative" }}>
              <div className="colorLine__list">
                <div className="colorLine__list_item">
                  <div
                    className="colorLine__itemColor"
                    style={{ backgroundColor: "#e65a1e" }}
                  ></div>
                  <div>Desk</div>
                </div>
                <div className="colorLine__list_item">
                  <div
                    className="colorLine__itemColor"
                    style={{ backgroundColor: "#27B9D5" }}
                  ></div>
                  <div>Asset fund</div>
                </div>
                <div className="colorLine__list_item">
                  <div
                    className="colorLine__itemColor"
                    style={{ backgroundColor: "#CD42E6" }}
                  ></div>
                  <div>Analyst</div>
                </div>
              </div>
              <LightweightChart />
            </div>
          </div>

          {/* EChart  */}

          <div className="eChart_container">
            <div className="eChart__Container_header">
              <BasicMenu textButton="Performance Distribution" variant="Text" />
              <BasicMenu textButton="Realized PnL" variant="Button_outlined" />
            </div>
            <div className="eChart__list">
              <div className="eChart__list_component">
                <div className="eChart__header">Sector title</div>
                <div className="eChart__body">
                  <EChart />
                </div>
              </div>

              <div className="eChart__list_component">
                <div className="eChart__header">Sector title</div>
                <div className="eChart__body">
                  <EChart />
                </div>
              </div>

              <div className="eChart__list_component">
                <div className="eChart__header">Sector title</div>
                <div className="eChart__body">
                  <EChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
