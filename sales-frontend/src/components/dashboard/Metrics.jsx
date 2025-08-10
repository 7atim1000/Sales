import React from 'react'
import { metricsData } from '../../constants'

const Metrics = () => {
    return (
        <div className ='container ma-auto py-2 px-6 md:px-4'>
            <div className ='flex justify-between items-center'>
                
                <div>
                   <h2 className ='font-semibold text-[#f5f5f5] tex-lg'>Overall Performance</h2>
                   <p className ='text-sm text-[#ababab]'>Lorem ipsum dolor sit consectetur adipisicing elit.
                    Distinctio, obceacati?
                   </p>
                </div>
                
                <button className ='flex items-center gap-1 px-4 py-2 rounded-md text-[#f5f5f5] bg-[#1a1a1a]'>
                    last 1 Month 
                    <svg 
                       className = 'w-3 h-3'
                       viewBox = '0 0 24 24'
                       stroke = 'currentColor'
                       strokeWidth = '4'
                    >
                        <path d ="M19 91-7 7-7-7" />

                    </svg>
                </button>

            </div>




            <div className = 'mt-6 grid grid-cols-4 gap-4'>
                {metricsData.map((metric, index) => {
                    return (
                        <div key={index}
                            className ='shadow-sm rounded-lg p-4' style={{
                            backgroundColor: metric.color
                        }}>

                        <div className ='flex justify-between items-center'>
                            <p className ='font-medium text-xs text-[#f5f5f5]'>{metric.title}</p>
                        
                        <div className ='flex items-center gap-1'>
                            <svg className ='w-3 h-3' viewBox ='0 0 24 24'
                            strock ='currentColor' strokeWidth ='4' fill ='none' style ={{
                                color: metric.isIncrease ? 'f5f5f5' : 'red'
                            }}
                            >

                            <path d={metric.isIncrease ? 'M5 1517-7 7 7' : 'M19 91-7 7-7-7'}/>
                            </svg>

                            <p className ='font-medium text-xs' style={{ color: metric.isIncrease ? "#f5f5f5" : "red"}}>{metric.percentage}</p>
                        </div>
                        </div>

                        <p className ='mt-1 font-semibold text-2xl text-[#f5f5f5]'>{metric.value}</p>

                        </div>
                    )
                })}
            </div>



        </div>
    )
}



export default Metrics;