import { useTheme } from "@mui/material/styles";
import ReactEcharts from "echarts-for-react";

export default function DoughnutChart({ height }) {
  const theme = useTheme();

  // Define gradients for each segment
  const puneGradient = {
    type: "linear",
    x: 0,
    y: 1,
    x2: 1,
    y2: 0,
    colorStops: [
      { offset: 0, color: "#f2709c" }, // starting color
      { offset: 1, color: "#ff9472" } // ending color
    ]
  };

  const jamshedpurGradient = {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [
      { offset: 0, color: "#5efce8" }, // starting color
      { offset: 0.99, color: "#736efe" } // ending color
    ]
  };

  const dharwadGradient = {
    type: "radial",
    x: 0.1,
    y: 0.2,
    r: 1,
    colorStops: [
      { offset: 0, color: "rgb(15, 213, 172)" }, // starting color
      { offset: 1, color: "rgb(34, 182, 198)" } // ending color
    ]
  };

  const option = {
    legend: {
      show: true,
      itemGap: 20,
      icon: "circle",
      bottom: 0,
      textStyle: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: "roboto" }
    },
    tooltip: { show: false, trigger: "item", formatter: "{a} <br/>{b}: {c} ({d}%)" },
    xAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],
    yAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],

    series: [
      {
        name: "Traffic Rate",
        type: "pie",
        radius: ["45%", "72.55%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        hoverOffset: 5,
        stillShowZeroSum: false,
        label: {
          normal: {
            show: false,
            position: "center",
            textStyle: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: "roboto" },
            formatter: "{a}"
          },
          emphasis: {
            show: true,
            textStyle: { fontSize: "14", fontWeight: "normal" },
            formatter: "{b} \n{c} ({d}%)"
          }
        },
        labelLine: { normal: { show: false } },
        data: [
          { value: 40, name: "Pune", itemStyle: { color: puneGradient } },
          { value: 30, name: "Jamshedpur", itemStyle: { color: jamshedpurGradient } },
          { value: 30, name: "Dharwad", itemStyle: { color: dharwadGradient } }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  return <ReactEcharts style={{ height: height }} option={option} />;
}
