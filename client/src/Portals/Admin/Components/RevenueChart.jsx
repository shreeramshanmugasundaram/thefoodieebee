import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

import "./RevenueChart.css";

const LineChart = () => {
  const [chartData, setChartData] = useState();
  const [filter, setFilter] = useState("week");
  const [chartlabel, setchartlabel] = useState("Revenu - this week");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    if (e.target.value === "week") {
      setchartlabel("Revenu - this week");
    } else {
      setchartlabel("Revenu - this month");
    }
  };

  useEffect(() => {
    const weekData = {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Revenue- this week",
          data: [25, 20, 30, 35],
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "hsla(265, 87%, 57%, 1)",
          borderWidth: 2,
          cubicInterpolationMode: "monotone",
        },
      ],
    };

    const monthData = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Revenue- this month",
          data: [100, 120, 80, 90, 110, 130, 100, 120, 80, 90, 110, 130],
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "hsla(265, 87%, 57%, 1)",
          borderWidth: 2,
          cubicInterpolationMode: "monotone",
        },
      ],
    };

    setChartData(filter === "week" ? weekData : monthData);
  }, [filter]);

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1.5,
    legend: {
      display: false, // hide dataset labels
    },
    scales: {
      x: {
        type: "category",
        ticks: {
          autoSkip: false,
        },
        barPercentage: 1,
        categoryPercentage: 1,
      },
      y: {
        title: {
          display: true,
          text: "Revenue",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  return (
    <div className="RevenueChart" style={{ marginTop: "1rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <h3 style={{ margin: "16px 50px" }}>{chartlabel}</h3>
        </div>
        <select name="" id="" onChange={handleFilterChange}>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </div>
      <div style={{ width: "900px", height: "300px", padding: "1rem" }}>
        {chartData && <Line data={chartData} options={options} chart={Chart} />}
      </div>
    </div>
  );
};

export default LineChart;
