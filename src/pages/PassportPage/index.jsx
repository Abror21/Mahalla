import InfoTable from "components/InfoTable";
import Navbar from "components/Navbar";
import { passportTableColumn, passportTableRow } from "Data/InfoTableData";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PassportPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 pt-[90px]">
      <Navbar />
      <div className="mt-6 p-6 bg-[#24224E]">
        <div className="mb-7">
          <Link
            onClick={() => navigate(-1)}
            className="text-white font-['Inter'] text-sm font-semibold"
          >
            &#129120; Mahallalr ro‘yxati
          </Link>
        </div>
        <h3 className="font-['Inter'] text-2xl font-semibold text-white mb-4">
          Mahalla nomi
        </h3>
        <div className="flex">
          <div className="w-1/2 border-r border-[#A2A0B3] pr-6">
            <InfoTable
                title="Mahalla va ijtimoiy soha obektlarda telekomunikatsiya tarmoqlari va axborot tizimlari bo'yicha umumiy malumot"
                tableColumns={passportTableColumn}
                tableRows={passportTableRow}
            />
            <InfoTable
                title="Mahalla idorasi binosi holati"
                tableColumns={passportTableColumn}
                tableRows={passportTableRow}
            />
            <InfoTable
                title="Ichki ishlar ob’ektlari"
                tableColumns={passportTableColumn}
                tableRows={passportTableRow}
            />
            <InfoTable
                title="Ijtimoiy soha ob’ektlari infratuzilmasi holati"
                tableColumns={passportTableColumn}
                tableRows={passportTableRow}
            />
        </div>
          <div className="w-1/2 pl-6">
          <InfoTable
                title="Sog’liqni saqlash obektlari"
                tableColumns={passportTableColumn}
                tableRows={passportTableRow}
            />
            <InfoTable
                title="Ma’lumot"
                tableColumns={passportTableColumn}
                tableRows={passportTableRow}
            />
            <InfoTable
                title="Mahalla hududi infratuzilmani rivojlanganlik holati"
                tableColumns={passportTableColumn}
                tableRows={passportTableRow}
            />
            <InfoTable
                title="Mobil aloqa bilan taminlanganlik holati"
                tableColumns={passportTableColumn}
                tableRows={passportTableRow}
            />
            <InfoTable
                title="Televideniya va radioeshittirish xizmatlari bilan ta’minlanganlik holati"
                tableColumns={passportTableColumn}
                tableRows={passportTableRow}
            />
            <InfoTable
                title="Pochta aloqasi xizmatlari bilan ta’minlanganlik holati"
                tableColumns={passportTableColumn}
                tableRows={passportTableRow}
            />
        </div>
        </div>
      </div>
    </div>
  );
};

export default PassportPage;
