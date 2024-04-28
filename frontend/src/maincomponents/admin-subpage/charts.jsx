import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import dataChart from '../../assets/chartdata.json';
import { Chart as ChartJS, defaults, LineElement, TimeScale, LinearScale, PointElement, Tooltip, Legend, Scale } from "chart.js/auto";
import 'chartjs-adapter-date-fns';
import { Line } from "react-chartjs-2";
import { format } from 'date-fns'; // Import for date formatting

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

// Function to separate date (assuming 'date' property in dataChart objects)
function separateDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth(); // Months are zero-indexed (January is 0)
  const year = date.getFullYear();
  const weekday = format(date, 'EEEE'); // Get weekday name using date-fns
  const monthName = format(date, 'MMMM'); // Get month name using date-fns

  return { day, month, year, weekday, monthName };
}

function separateDataByGender(dataChart) {
  const separatedData = {
    malesDay: [],
    femalesDay: [],
    malesMonth: [],
    femalesMonth: [],
    malesYear: [],
    femalesYear: [],
  };

  dataChart.forEach((data) => {
    const { day, month, year } = separateDate(data.date); // Separate the date

    if (data.gender === "Male") {
      separatedData.malesDay.push({day}); // Add data for males
      separatedData.malesMonth.push({month}); // Add data for males
      separatedData.malesYear.push({year }); // Add data for males
    } else if (data.gender === "Female") {
      separatedData.femalesDay.push({day}); // Add data for males
      separatedData.femalesMonth.push({month}); // Add data for males
      separatedData.femalesYear.push({year }); // Add data for males
    }
  });

  return separatedData;
}

const options={
  elements: {
    line: {
      tension: 0.5
    }
  }
};
const filterGender = separateDataByGender(dataChart);
console.log(filterGender.malesDay); // Array of objects for males with day, month, year
console.log(filterGender.femalesMonth);

function createChartData(chartType) {
  switch (chartType) {
    case "day":
      return {
        labels: dataChart.map((data) => {
          const {weekday } = separateDate(data.date);
          return `${weekday}` // Format labels with separated date components
        }),
        datasets: [
          {
            fill: true,
            label: "Males",
            data: filterGender.males,
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 200);
              gradient.addColorStop(0, "rgba(255, 165, 0, 1)"); // Orange
              gradient.addColorStop(1, "rgba(255, 255, 224, 0.1)"); // Light yellow
              return gradient;
            },
            borderColor: "orange"
          },
          {
            fill: true,
            label: "Female",
            data: filterGender.females,
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 200);
              gradient.addColorStop(0, "rgba(255, 165, 0, 1)"); // Orange
              gradient.addColorStop(1, "rgba(255, 255, 224, 0.1)"); // Light yellow
              return gradient;
            },
            borderColor: "orange"
          }
        ]
      };
      case "month":
        return {
          labels: dataChart.map((data) => {
            const {monthName } = separateDate(data.date);
            return `${monthName}` // Format labels with separated date components
          }),
          datasets: [
            {
              fill: true,
              label: "Males",
              data: dataChart.map((data) => data.gender === "Male"),
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "rgba(255, 165, 0, 1)"); // Orange
                gradient.addColorStop(1, "rgba(255, 255, 224, 0.1)"); // Light yellow
                return gradient;
              },
              borderColor: "orange"
            },
            {
              fill: true,
              label: "Female",
              data: dataChart.map((data) => data.gender === "Female"),
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "rgba(255, 165, 0, 1)"); // Orange
                gradient.addColorStop(1, "rgba(255, 255, 224, 0.1)"); // Light yellow
                return gradient;
              },
              borderColor: "orange"
            }
          ]
        };
        case "year":
        return {
          labels: dataChart.map((data) => {
            const {year } = separateDate(data.date);
            return `${year}` // Format labels with separated date components
          }),
          datasets: [
            {
              fill: true,
              label: "Males",
              data: dataChart.map((data) => data.gender === "Male"),
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "rgba(255, 165, 0, 1)"); // Orange
                gradient.addColorStop(1, "rgba(255, 255, 224, 0.1)"); // Light yellow
                return gradient;
              },
              borderColor: "orange"
            },
            {
              fill: true,
              label: "Female",
              data: dataChart.map((data) => data.gender === "Female"),
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "rgba(255, 165, 0, 1)"); // Orange
                gradient.addColorStop(1, "rgba(255, 255, 224, 0.1)"); // Light yellow
                return gradient;
              },
              borderColor: "orange"
            }
          ]
        };
    default:
      // Default data (assuming you want a fallback)
      return {
        labels: dataChart.map((data) => {
          const {weekday } = separateDate(data.date);
          return `${weekday}` // Format labels with separated date components
        }),
        datasets: [
          {
            fill: true,
            label: "Males",
            data: dataChart.map((data) => data.gender === "Male"),
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 200);
              gradient.addColorStop(0, "rgba(255, 165, 0, 1)"); // Orange
              gradient.addColorStop(1, "rgba(255, 255, 224, 0.1)"); // Light yellow
              return gradient;
            },
            borderColor: "orange"
          },
          {
            fill: true,
            label: "Female",
            data: dataChart.map((data) => data.gender === "Female"),
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 200);
              gradient.addColorStop(0, "rgba(255, 165, 0, 1)"); // Orange
              gradient.addColorStop(1, "rgba(255, 255, 224, 0.1)"); // Light yellow
              return gradient;
            },
            borderColor: "orange"
          }
        ]
      };
  }
}

const Chart = () => { // Pass chartType as a prop
  const [chartType, setChartType] = useState("day");

  const handleChartTypeChange = (e) => {
    setChartType(e);
  };

  const chartData = createChartData(chartType); // Update data based on chartType

  // ... rest of the component code

  return (
    <Container style={{ height: '300px' }}>
      <h3>Line chart</h3>
      <button onClick={() => handleChartTypeChange("day")}>Day Chart</button>
      <button onClick={() => handleChartTypeChange("month")}>Month Chart</button>
      <button onClick={() => handleChartTypeChange("year")}>Year Chart</button>
      <Line options={options} data={chartData} />
    </Container>
  );
};

export default Chart;