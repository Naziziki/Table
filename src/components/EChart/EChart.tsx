import * as echarts from "echarts";
import { useEffect } from "react";
import * as React from "react";

type EChartsOption = echarts.EChartsOption;

const EChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById("echart-container");
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option: EChartsOption = {
        series: [
          {
            type: "treemap",
            data: [
              {
                name: "nodeA", // First tree
                value: 94,
                children: [
                  {
                    name: "nodeAa", // First leaf of first tree
                    value: 30,
                    children: [
                      {
                        name: "30",
                        value: 30,
                      },
                    ],
                  },
                  {
                    name: "nodeAb", // Second leaf of first tree
                    value: 36,
                    children: [
                      {
                        name: "12",
                        value: 12,
                      },
                      {
                        name: "12",
                        value: 12,
                      },
                      {
                        name: "12",
                        value: 12,
                      },
                    ],
                  },
                  {
                    name: "nodeAb", // Second leaf of first tree
                    value: 28,
                    children: [
                      {
                        name: "7",
                        value: 7,
                      },
                      {
                        name: "7",
                        value: 7,
                      },
                      {
                        name: "7",
                        value: 7,
                      },
                      {
                        name: "7",
                        value: 7,
                      },
                    ],
                  },
                ],
              },
              {
                name: "nodeB", // Second tree
                value: 96,
                children: [
                  {
                    name: "30", // Son of first tree
                    value: 30,
                  },
                  {
                    name: "",
                    value: 32,
                    children: [
                      {
                        name: 12,
                        value: 12,
                      },
                      {
                        name: 12,
                        value: 12,
                      },
                      {
                        name: 12,
                        value: 12,
                      },
                    ],
                  },
                  {
                    name: "30", // Son of first tree
                    value: 30,
                  },
                ],
              },
            ],
            breadcrumb: {
              show: false,
            },
          },
        ],
      };

      myChart.setOption(option);
    }
  }, []);

  return (
    <div
      id="echart-container"
      style={{ width: "100%", height: "422px", padding: "0", margin: "0" }}
    />
  );
};

export default EChart;
