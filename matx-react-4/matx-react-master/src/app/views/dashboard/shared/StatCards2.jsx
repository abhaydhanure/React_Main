// src/app/views/dashboard/MyComponent.jsx

import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import "./Card2.css";

// Resolves charts dependency
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Total Plantwise Status",
    showvalues: "0",
    showsum: "1",
    legendbgalpha: "0",
    width: "100%",
    plottooltext: "AGGREGATE: $label{br}<b>Color: $seriesName</b>{br}BOM: $dataValue</div>",
    theme: "candy",
    canvasBaseColor: "#1c2841",
    xAxisNameFontColor: "#f5f5f5",
    yAxisNameFontColor: "#f5f5f5",
    legendItemFontColor: " #3B3C36",
    legendItemFontSize: "10",
    bgImageDisplayMode: "fit",
    bgImageAlpha: "10",
    bgImageScale: "10",
    bgImageVAlign: "bottom",
    bgImageHAlign: "middle",
    showBorder: "0",
    showCanvasBorder: "0",
    showAlternateHGridColor: "0",
    divLineColor: "2B4162,12100E",
    baseFontColor: "#333333",
    canvasBgColor: "2B4162,12100E",
    valueFontColor: "#ffefd5",
    labelPadding: "16", // Adjust this value to increase/decrease the space
    labelOffset: "20" // Adjust this value to control the distance further
  },
  categories: [
    {
      category: [
        { label: "Pune" },
        { label: "Dharwad" },
        { label: "Jamshedpur" },
        { label: "Uttrakhand" },
        { label: "Lucknow" }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Rejected",
      data: [
        { value: "1.5", color: "#FF5733, #c0392b" },
        { value: "0", color: "#FF5733, #c0392b" },
        { value: "0", color: "#FF5733, #c0392b" },
        { value: "8", color: "#FF5733, #c0392b" },
        { value: "3.5", color: "#FF5733, #c0392b" }
      ]
    },

    {
      seriesname: "WIP",
      data: [
        { value: "0", color: "#f8da5b, #ffefd5" },
        { value: "5.8", color: "#f8da5b, #f39c12" },
        { value: "0", color: "#f8da5b, #f39c12" },
        { value: "0", color: "#f8da5b, #f39c12" },
        { value: "8", color: "#f8da5b, #f39c12" }
      ]
    },
    {
      seriesname: "Green",
      data: [
        { value: "6", color: "#42b883, #2ecc71" },
        { value: "3", color: "#42b883, #2ecc71" },
        { value: "2.5", color: "#42b883, #2ecc71" },
        { value: "0", color: "#42b883, #2ecc71" },
        { value: "4", color: "#42b883, #2ecc71" }
      ]
    }
  ]
};

class MyComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "3px solid lavender",
          backgroundColor: "#1c2841",
          // padding: "2px",
          // borderRadius: "1px",
          color: "#fff",

          borderRadius: "18px",
          boxShadow:
            "0px 3px 3px -2px rgb(0 0 0 / 6%), 0px 3px 4px 0px rgb(0 0 0 / 4%), 0px 1px 8px 0px rgb(0 0 0 / 4%) !important"
        }}
      >
        <ReactFusioncharts
          type="stackedcolumn3d"
          width="100%"
          height="500" // Adjust height as needed
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </div>
    );
  }
}

export default MyComponent;
