import React from 'react'
import './HeroSection.css'
import { Link } from 'react-scroll'
const HeroSection = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
      <h1>CPI FORECASTING</h1>
      <button className='btn'><Link to='explore' smooth={true} offset={-145}>Intro</Link></button>
      <button className='btn'><Link to='programs' smooth={true} offset={-120}>Explore</Link></button>
      </div>
    </div>
  )
}

export default HeroSection
