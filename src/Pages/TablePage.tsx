import PortfolioAnalyticsTable from "../components/PortfolioAnalyticsTable/PortfolioAnalyticsTable";
import BasicMenu from "../components/Button/BasicMenu";
import IconButton from "@mui/material/IconButton";

import ExpandIcon from "../components/Icons/Expand.icon";

import "./TablePage.style.css";

export default function TablePage() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}
