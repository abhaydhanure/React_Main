import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import Box from "@mui/material/Box";
import { SimpleCard } from "app/components";
import "./Card2.css";

export default function InlineDemo() {
  const [date, setDate] = useState(new Date());

  const formatDayMonthDate = (date) => {
    const options = { weekday: "long", month: "short", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const formatMonthYear = (date) => {
    const options = { month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  const calendarStyle = {
    width: "100%", // Adjust width
    height: "250px" // Adjust height
  };
  return (
    <Box sx={{ mt: 6 }}>
      <SimpleCard title="Calendar">
        <div className="custom-calendar-header">
          <div className="header-row">{formatDayMonthDate(date)}</div>
          <div className="header-row">
            <button
              className="nav-button"
              onClick={() => setDate(new Date(date.setMonth(date.getMonth() - 1)))}
            >
              {"<<"}
            </button>
            {formatMonthYear(date)}
            <button
              className="nav-button"
              onClick={() => setDate(new Date(date.setMonth(date.getMonth() + 1)))}
            >
              {">>"}
            </button>
          </div>
        </div>
        <div className="card flex justify-content-center">
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value)}
            inline
            monthNavigator
            yearNavigator
            yearRange="2010:2030"
            dateFormat="MM/dd/yy"
            className="custom-calendar"
            style={calendarStyle}
          />
        </div>
      </SimpleCard>
    </Box>
  );
}
