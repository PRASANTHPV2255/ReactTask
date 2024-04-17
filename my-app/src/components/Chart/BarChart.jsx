import React from 'react'
import { DualAxes } from '@ant-design/plots';

function BarChart({ foreCast, dataUpdate }) {
  const config = {
    data: foreCast,
    xField: 'dt_txt',
    // legend: true
    yAxis: {
      title: {
        text: 'Temperature (°C)' // Set the desired name for the y-axis here
      }
    },

    children: [
      {
        type: 'interval',
        yField: (data) => {
          // console.log(data);
          return data?.main.temp - 273.15
        },
        style: { maxWidth: 80 },
      },
      {
        type: 'line',
        yField: '',
        style: { lineWidth: 0, display: 'none' },
        // axis: { y: { position: 'right' } },
      },
    ],
  };
  return (
    <div>
      <DualAxes {...config}  />;
    </div>
  )
};


export default BarChart