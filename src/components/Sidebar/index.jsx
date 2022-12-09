import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#24224E] fixed w-[293px] top-[90px] bottom-0 left-0 p-5 flex flex-col justify-between">
      <ul className="flex flex-col gap-8">
        <li className="flex items-center font-medium text-[#A2A0B3] gap-4">
          <img src="assets/images/sidebar-bosh-sahifa.svg" alt="" />
          <Link to="/dashboard">Bosh sahifa</Link>
        </li>
        <li className="flex items-center font-medium text-[#A2A0B3] gap-4">
          <img src="assets/images/sidebar-add-user.svg" alt="" />
          <Link to="/add-user">Foydalanuvchi qoshish</Link>
        </li>
        <li className="flex items-center font-medium text-[#A2A0B3] gap-4">
          <img src="assets/images/sidebar-classification.svg" alt="" />
          <Link to="/classification">Klasifikatorlar</Link>
        </li>
        <li className="flex items-center font-medium text-[#A2A0B3] gap-4">
          <img src="assets/images/sidebar-passport.svg" alt="" />
          <Link to="/passports-list">Mahalla pasportlari</Link>
        </li>
      </ul>
      
      <Link to='/' className="flex gap-[15px]">
        <img src="assets/images/out-icon.svg" alt="" />
        <span className="font-['Inter'] text-base font-medium text-[#A2A0B3]">Chiqish</span>
      </Link>
    </div>
  );
};

export default Sidebar;
