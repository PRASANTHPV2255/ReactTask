import React, { useEffect, useMemo, useState } from 'react'
import { Pie } from '@ant-design/plots';

function PieChart({foreCast}) {
  const [data, setData] = useState(null)
  useEffect(()=>{
    const formattedData = foreCast && foreCast?.map((item)=>{return{type: item?.dt, value: item?.wind?.speed }})
    setData(formattedData)
  },[foreCast])

  const config = data &&{
    data:data,
    angleField: 'type',
    colorField: 'value',
    paddingRight: 80,
    innerRadius: 0.6,
    label: {
      text:(data)=> data?.value, 
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
    annotations: [
      {
        type: 'text',
        style: {
          text: 'Wind Speed',
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 17,
          fontStyle: 'bold',
        },
      },
    ],
  };

  return (
    <div style={{height: '65%', width: '100%', alignContent: 'center'}}>
      {data&&
      <Pie {...config} />}
    </div>
  )
}

export default PieChart