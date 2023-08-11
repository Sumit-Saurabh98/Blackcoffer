import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Girls Strength',
      data: [20, 49, 37, 23, 57, 36, 36, 79, 24, 12],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Boys Strength',
      data: [14, 24, 46, 13, 68, 35, 69, 23, 58, 58],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Animal Strength',
      data: [76, 80, 80, 16, 79, 32, 57, 24, 68, 25],
      borderColor: 'rgb(23, 182, 205)',
      backgroundColor: 'rgba(65, 192, 135, 0.5)',
    }
  ],
};

export function LineChart() {
  return <div style={{width:"600px", height:"600px",  marginTop:"50px", display:"flex", margin:"auto"}}>
    <Line options={options} data={data} />
  </div>
}
