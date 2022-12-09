import EditTable from "components/EditTable";
import Pagination from "components/Pagination";
import Search from "components/Search";
import SelectList from "components/SelectList";
import UniversalBtn from "components/UniversalBtn";
import React from "react";

const AddClassificationPage = () => {
  return (
    <div className="p-[30px]">
      <div className="mb-6">
        <Search />
      </div>
      <div>
        <UniversalBtn title="Mahalla" link="" back="#3C3976" color="#fff" />
        <UniversalBtn title="Maktabgacha ta’lim muassasasi" link="" />
        <UniversalBtn title="Umumta’lim maktab" link="" />
        <UniversalBtn title="Tibbiyot birlashma" link="" />
        <UniversalBtn title="Oilaviy poliklinika" link="" />
        <UniversalBtn title="Mobil aloqa operator" link="" />
        <UniversalBtn title="Internet provayder" link="" />
        <UniversalBtn title="Pochta aloqasi muassasasi" link="" />
      </div>
      <div className="p-4 bg-[#24224E]">
        <SelectList
          addition={<UniversalBtn title="Mahallani qo‘shish" back="#312E6B" color="#fff" />}
          back="#171142"
        />
      </div>
      <div>
        <hr className="bg-[#A2A0B3] h-[1px] border-none" />
        <EditTable list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      </div>
    </div>
  );
};

export default AddClassificationPage;
