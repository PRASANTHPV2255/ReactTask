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
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <DualAxes {...config}  />;
      <h3 style={{fontSize:'50px'}}>ForeCast</h3>
    </div>
  )
};


export default BarChart