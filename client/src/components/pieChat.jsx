
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export function PieChart() {

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

 const data = {
  labels: ["React", 'Angular', 'Vie', 'Node', 'Vite', 'Java'],
  datasets: [
    {
      label: 'Famous',
      data: [60, 40, 30, 55, 12, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
  return <div style={{width:"600px", height:"600px", marginTop:"50px", display:"flex", margin:"auto"}}>
   <Pie options={options} data={data} />
   </div>
}

