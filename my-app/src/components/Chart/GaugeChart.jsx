import React from 'react'
import { Gauge } from '@ant-design/plots';

function GaugeChart({singleData}) {
  // console.log('singledaaataaa  ', typeof singleData?.main?.humidity)
  const config = {
    width: 300,
    height: 300,
    autoFit: true,
    data: {
      target: singleData?.main?.humidity  ?? 0,
      total: 100,
      name: 'score',
    },
    legend: false,
  };
  return (
    <div  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      {singleData?.main?.humidity && 
      <Gauge {...config} />}
      <h4>Humidity</h4>
    </div>
  )
}

export default GaugeChart