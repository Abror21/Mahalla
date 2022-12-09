import { useContext, useState } from "react";
import Info from "components/Info";
import Statistics from "components/Statistics";
import InfoTable from "components/InfoTable";
import SelectList from "components/SelectList";
import UniversalBtn from "components/UniversalBtn";
import { infoTableColumn, infoTableRow } from "Data/InfoTableData";
import { ContextData } from "Data/ContextData";


const DashboardPage = () => {
  const {districtCount, villageCount} = useContext(ContextData);
  return (
    <div className="p-[30px]">
      <div className="mb-4">
        <SelectList
          addition={<UniversalBtn title="Mahalla pasportini ko‘rish" link="/passport" back="#312E6B" color="#fff" />}
        />
      </div>
      <div className="flex gap-4 p-6 bg-[#24224E] mb-4">
        <Info
          count={districtCount}
          title="Tumanlar"
          increase="5%"
          subtitle="kiritilgan tumanlar"
          img={<img src="assets/images/info-tuman.png" alt="" />}
        />
        <Info
          title="Mahallalar"
          count={villageCount}
          decrease="8%"
          subtitle="kiritilgan mahallalar"
          img={<img src="assets/images/info-mahalla.png" alt="" />}
        />
        <Info
          title="Ijtimoiy soha ob'ektlar"
          count={27}
          increase={null}
          decrease={null}
          img={<img src="assets/images/info-obyekt.png" alt="" />}
        />
        <Info
          title="Internet o‘rtacha tezligi"
          count="40 mb/s"
          increase="1mb/s"
          decrease="8%"
          img={<img src="assets/images/info-internet.png" alt="" />}
        />
      </div>

      <div className="mb-4">
        <Statistics />
      </div>

      <div className="p-6 bg-[#24224E]">
        <InfoTable title="Mahalla idoralari ma’lumotlari" tableColumns={infoTableColumn} tableRows={infoTableRow} />
        <InfoTable title="Ichki ishlar ob’yetktlari ma’lumotlari" tableColumns={infoTableColumn} tableRows={infoTableRow} />
        <InfoTable title="Xalqa ta’limi ob’yektlari" tableColumns={infoTableColumn} tableRows={infoTableRow} />
        <InfoTable title="Xalqa ta’limi ob’yektlari" tableColumns={infoTableColumn} tableRows={infoTableRow} />
        <InfoTable title="Maktabgacha ta’limi ob’yektlari" tableColumns={infoTableColumn} tableRows={infoTableRow} />
        <InfoTable title="Sog‘liqni saqlash ob’yektlari" tableColumns={infoTableColumn} tableRows={infoTableRow} />
        <InfoTable title="Mahalladagi pochta aloqasi ob’yektlari" tableColumns={infoTableColumn} tableRows={infoTableRow} />
      </div>
    </div>
  );
};

export default DashboardPage;
