import React from 'react'
import { Pie } from 'react-chartjs-2';


const PieChart = ({ title, data }) => {
    const service = data.service;
    
  return (
    <div className="pb-5">
        <h5 className="text-white font-semibold text-base font-['Roboto'] mb-10">{title}</h5>
        <div className="px-[22px] mb-8">
            <Pie data={data.data} style={{width: '100%', height: 'auto'}} />
        </div>
        <div className="flex gap-[8px] justify-center">
            {
                service.map(el => {
                const dotStyle = {backgroundColor: el.color}
                return  <p key={el.color} className="flex items-center gap-1 text-[#A2A0B3] font-['Inter'] text-[15px]">
                            <span style={dotStyle} className="h-2 w-2 rounded"/> {el.name}
                        </p>
                })
            }
        </div>
    </div>
  )
}

export default PieChart