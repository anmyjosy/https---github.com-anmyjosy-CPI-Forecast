import React from 'react'
import './Explore.css'
import cpi from '../../assets/cpi.jpg'

const Explore = () => {
  return (
    <div className='explore'>
      <img src={cpi} alt="" />
      <div className='text'>
      <h1>What is CPI Forecasting?</h1>
      <p>
      CPI forecasting refers to the process of predicting future movements in the Consumer Price Index, which measures the average change over time in the prices paid by urban consumers for a market basket of consumer goods and services. This forecasting is crucial for economic planning and policy-making, as it helps anticipate inflation trends and guide decisions related to monetary policy, investment, and budgeting.
      </p>
      </div>
    </div>
  )
}

export default Explore
