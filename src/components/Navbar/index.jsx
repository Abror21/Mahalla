import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex bg-[#24224E] fixed top-0 left-0 w-full z-10">
      <div className="flex items-center pr-4 pl-2 py-5">
        <img className="mr-3" src="assets/images/logo.svg" alt="Logo" />
        <img className="w-5 cursor-pointer" src="assets/images/bars.svg" alt=""
          onClick={toggleSidebar}/>
      </div>
      <div className="flex justify-between items-center pl-7 pr-8 border-l border-b border-[#3C3971] flex-1">
        <h3 className="text-white font-medium text-[18px]">Admin</h3>
        <div className="flex items-center">
          <img className="mr-2" src="assets/images/user-logo.svg" alt="" />
          <div className="font-medium relative text-lg text-[#A2A0B3] group">
            <div className="flex items-center justify-between gap-1 w-44">
              {"Anvar"}
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.57844 0.325468L0.398437 1.51214L6.99844 8.10547L13.5984 1.50547L12.4184 0.325467L6.99844 5.74547L1.57844 0.325468V0.325468Z"
                  fill="#A2A0B3"
                />
              </svg>
            </div>
            <div className="absolute bg-[#24224E] w-full rounded text-md transition-all hidden group-hover:block">
              <div className="flex flex-col p-3 border rounded border-[#3c3971]">
                <Link to="/about">About</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/info">Info</Link>
                <Link to="/">Chiqish</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
