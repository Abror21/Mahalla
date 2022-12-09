import React from 'react'

const Search = () => {
  return (
    <div className="relative">
        <input
            type="search"
            className="border transition-all border-[#3C3971] text-[#A2A0B3] p-3 bg-[#24224E] outline-none max-w-[500px] w-full pl-14 focus:pl-3 peer"
            placeholder='Qidirish'
        />
        <img src="assets/images/search-icon.svg" alt="" className="absolute top-1/2 -translate-y-1/2 left-3 transition-all peer-focus:opacity-0"/>
    </div>
  )
}

export default Search