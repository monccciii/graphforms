import React from 'react';
import { Bar } from 'react-chartjs-2';

//@ts-ignore
const BarChart = ({ data }) => {
    const options: any = {
      scales: {
        x: {
          type: 'category', // 'linear' if you're using Chart.js 3.0.0 and onwards
        },
        y: {
          type: 'linear',
          beginAtZero: true,
        },
      },
    };
  
    return (
      <div>
        <Bar data={data} options={options} />
      </div>
    );
  };
  
  export default BarChart;
