import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import dataChart from '../../assets/chartdata.json';
import { Chart as ChartJS, defaults, LineElement, TimeScale, LinearScale, PointElement, Tooltip, Legend, Scale } from "chart.js/auto";
import 'chartjs-adapter-date-fns';
import { Line } from "react-chartjs-2";
import { format } from 'date-fns'; // Import for date formatting

// Crazy stuff too much to explain, hahahahahaha

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
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        datasets: [
          {
            fill: true,
            label: "Males",
            data: [12,21,53,34,15,46,57,48,29,10,17,22,23,16,12,11,20,31,29,21,24,25,26,22,31,16,27,68,19,30],
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 300);
              gradient.addColorStop(0, "rgba(0, 0, 255, 1)"); // Orange
              gradient.addColorStop(1, "rgba(144, 198, 232, 0.1)"); // Light yellow
              return gradient;
            },
            borderColor: "blue"
          },
          {
            fill: true,
            label: "Female",
            data: [1,31,23,14,25,26,27,38,21,12,27,25,23,26,22,6,26,21,23,21,25,21,22,24,28,26,22,28,29,30],
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 300);
              gradient.addColorStop(0, "rgba(255, 0, 0, 1)"); // Orange
              gradient.addColorStop(1, "rgba(240, 128, 128, 0.1)"); // Light yellow
              return gradient;
            },
            borderColor: "red"
          }
        ]
      };
      case "month":
        return {
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [
            {
              fill: true,
              label: "Males",
              data: [50,102,303,250,111, 206, 177,288, 209, 110, 211, 412],
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                gradient.addColorStop(0, "rgba(0, 0, 255, 1)"); // Orange
                gradient.addColorStop(1, "rgba(144, 198, 232, 0.1)"); // Light yellow
                return gradient;
              },
              borderColor: "blue"
            },
            {
              fill: true,
              label: "Female",
              data: [150,122,203,150,211, 256, 277,108,119, 210, 111, 2],
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                gradient.addColorStop(0, "rgba(255, 0, 0, 1)"); // Orange
                gradient.addColorStop(1, "rgba(240, 128, 128, 0.1)"); // Light yellow
                return gradient;
              },
              borderColor: "red"
            }
          ]
        };
        case "year":
        return {
          labels: [2022, 2023],
          datasets: [
            {
              fill: true,
              label: "Males",
              data: [2035, 3011],
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                gradient.addColorStop(0, "rgba(0, 0, 255, 1)"); // Orange
                gradient.addColorStop(1, "rgba(144, 198, 232, 0.1)"); // Light yellow
                return gradient;
              },
              borderColor: "blue"
            },
            {
              fill: true,
              label: "Female",
              data: [1023, 2523],
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                gradient.addColorStop(0, "rgba(255, 0, 0, 1)"); // Orange
                gradient.addColorStop(1, "rgba(240, 128, 128, 0.1)"); // Light yellow
                return gradient;
              },
              borderColor: "red"
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
    <Container className='chart' style={{ height: '300px' }}>
      <h3>Line chart</h3>
      <button onClick={() => handleChartTypeChange("day")}>Day Chart</button>
      <button onClick={() => handleChartTypeChange("month")}>Month Chart</button>
      <button onClick={() => handleChartTypeChange("year")}>Year Chart</button>
      <Line options={options} data={chartData} />
    </Container>
  );
};

export default Chart;