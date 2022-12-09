import React from 'react'
import { Link } from 'react-router-dom'

const UniversalBtn = ({ title, link, back, color }) => {
    const btnStyle = back ? back : "#24224E";
    const btnColor = color ? color : "#A2A0B3";
  return (
    <Link style={{backgroundColor: btnStyle, color: btnColor}}
        to={link}
        className={`py-3 px-9 text-center inline-block font-medium font-['Inter'] border border-[#3C3971]`}
    >{title}</Link>
  )
}

export default UniversalBtn