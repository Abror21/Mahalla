import React from 'react'
import { Link } from 'react-router-dom'


const AddButton = () => {
  return (
    <Link to='' className="font-['Inter'] font-medium text-white bg-[#312E6B] flex justify-center items-center px-16 gap-4">
        <span>+</span> Qo‘shish
    </Link>
  )
}

export default AddButton