import { useContext } from "react";
import AddButton from "components/AddButton";
import SelectList from "components/SelectList";
import Info from "components/Info";
import InfoTable from "components/InfoTable";
import UniversalBtn from "components/UniversalBtn";
import { infoTableColumn, infoTableRow } from "Data/InfoTableData";
import { ContextData } from "Data/ContextData";

const AddUserPage = () => {
  const { districtCount, villageCount } = useContext(ContextData);
  
  return (
    <div className="p-[30px]">
      <div className="flex mb-4">
        <div className="flex-1">
          <SelectList addition={<UniversalBtn title="Mahalla pasportini ko‘rish" link="/passport" back="#312E6B" color="#fff" />}/>
        </div>
        <AddButton />
      </div>

      <div className="flex p-6 bg-[#24224E] gap-4 mb-4">
        <Info
          count={districtCount}
          title="Tumanlar"
          increase="5%"
          subtitle="oxirgi 1 oy ichida"
          img={<img src="assets/images/info-tuman.png" alt="" />}
        />
        <Info
          title="Mahallalar"
          count={villageCount}
          decrease="8%"
          subtitle="oxirgi 1 oy ichida"
          img={<img src="assets/images/info-mahalla.png" alt="" />}
        />
        <Info
          title="Ijtimoiy soha ob'ektlar"
          count={27}
          increase={null}
          decrease={null}
          subtitle="oxirgi 1 oy ichida"
          img={<img src="assets/images/info-obyekt.png" alt="" />}
        />
        <Info
          title="Internet o‘rtacha tezligi"
          count="40 mb/s"
          increase="1mb/s"
          decrease="8%"
          subtitle="oxirgi 1 oy ichida"
          img={<img src="assets/images/info-internet.png" alt="" />}
        />
        <Info
          title="Telefon aloqa xizmati"
          count="99%"
          decrease="5%"
          subtitle="oxirgi 1 oy ichida"
          img={<img src="assets/images/info-phone.png" alt="" />}
        />
      </div>

      <div className="p-6 bg-[#24224E]">
        <InfoTable title="Mahalla idoralari" tableColumns={infoTableColumn} tableRows={infoTableRow}/>
        <InfoTable title="Ichki ishlar ob’yektlari" tableColumns={infoTableColumn} tableRows={infoTableRow}/>
        <InfoTable title="Xalqa ta’limi ob’yektlari" tableColumns={infoTableColumn} tableRows={infoTableRow}/>
        <InfoTable title="Maktabgacha ta’limi ob’yektlari" tableColumns={infoTableColumn} tableRows={infoTableRow}/>
        <InfoTable title="Sog‘liqni saqlash ob’yektlari" tableColumns={infoTableColumn} tableRows={infoTableRow}/>
        <InfoTable title="Mahalladagi pochta aloqasi ob’yektlari" tableColumns={infoTableColumn} tableRows={infoTableRow}/>
      </div>
    </div>
  );
};

export default AddUserPage;
