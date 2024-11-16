import { useEffect, useRef } from "react";
import { createChart, LineData, LineType, Time } from "lightweight-charts";

import "./LightweightChart.style.css";

export default function LightweightChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Create chart instance
    const chartOptions = {
      layout: {
        textColor: "white",
        background: { color: "#0A0A0A" },
      },
      grid: {
        vertLines: { color: "#0A0A0A" },
        horzLines: { color: "#0A0A0A" },
      },
    };
    chartRef.current = createChart(chartContainerRef.current, chartOptions);

    // Sample data
    const data: LineData[] = [
      { value: 0, time: 1642425322 as Time },
      { value: 8, time: 1642511722 as Time },
      { value: 10, time: 1642598122 as Time },
      { value: 20, time: 1642684522 as Time },
      { value: 3, time: 1642770922 as Time },
      { value: 43, time: 1642857322 as Time },
      { value: 41, time: 1642943722 as Time },
      { value: 43, time: 1643030122 as Time },
      { value: 56, time: 1643116522 as Time },
      { value: 46, time: 1643202922 as Time },
    ];

    const data1: LineData[] = [
      { value: 2, time: 1642425322 as Time },
      { value: 14, time: 1642511722 as Time },
      { value: 16, time: 1642598122 as Time },
      { value: 9, time: 1642684522 as Time },
      { value: 10, time: 1642770922 as Time },
      { value: 34, time: 1642857322 as Time },
      { value: 50, time: 1642943722 as Time },
      { value: 56, time: 1643030122 as Time },
      { value: 65, time: 1643116522 as Time },
      { value: 62, time: 1643202922 as Time },
    ];
    const data2: LineData[] = [
      { value: 5, time: 1642425322 as Time },
      { value: 30, time: 1642511722 as Time },
      { value: 10, time: 1642598122 as Time },
      { value: 13, time: 1642684522 as Time },
      { value: 40, time: 1642770922 as Time },
      { value: 50, time: 1642857322 as Time },
      { value: 63, time: 1642943722 as Time },
      { value: 80, time: 1643030122 as Time },
      { value: 74, time: 1643116522 as Time },
      { value: 65, time: 1643202922 as Time },
    ];

    const lineSeries = chartRef.current.addLineSeries({
      color: "#27B9D5",
      lineType: LineType.Curved,
    });
    const lineSeries2 = chartRef.current.addLineSeries({
      color: "#E65A1E",
      lineType: LineType.Curved,
    });
    const lineSeries3 = chartRef.current.addLineSeries({
      color: "#CD42E6",
      lineType: LineType.Curved,
    });
    lineSeries.setData(data);
    lineSeries2.setData(data1);
    lineSeries3.setData(data2);

    chartRef.current.timeScale().fitContent();

    // Resize chart on window resize
    const handleResize = () => {
      if (chartRef.current && chartContainerRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartRef.current?.remove();
    };
  }, []);

  return (
    <div
      ref={chartContainerRef}
      style={{ position: "relative", width: "100%", height: "468px" }}
    />
  );
}
