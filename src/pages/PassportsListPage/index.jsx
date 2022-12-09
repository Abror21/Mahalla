import { useEffect, useState } from "react";
import Pagination2 from "components/Pagination";
import PassportTable from "components/PassportTable";
import Select from "components/Select";
import UniversalBtn from "components/UniversalBtn";
import axios from "axios";

const PassportsListPage = () => {
  const [regionId, setRegionId] = useState(0);
  const [regions, setRegions] = useState([]);
  const [districts, setDistricts] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/MIMAXUZ/uzbekistan-regions-data/master/JSON/regions.json")
      .then((data) => {
        setRegions(data.data);
      });
  }, []);
  useEffect(() => {
    if (regionId) {
      axios
        .get("https://raw.githubusercontent.com/MIMAXUZ/uzbekistan-regions-data/master/JSON/districts.json")
        .then((data) => {
          const districts = data.data.filter(district => district.region_id === regionId);
          setDistricts(districts);
        });
    }
  }, [regionId]);
  
  return (
    <div className="p-[30px]">
      <div className="flex gap-4 mb-6">
        <Select title="Viloyatni tanlang" list={regions} getPlaceId={({ id }) => setRegionId(id)} />
        <Select title="Tumanni tanlang" list={districts} />
        <UniversalBtn
          title="Mahalla passportini ko‘rish"
          color="#fff"
          back="#312E6B"
          link="/passport"
        />
      </div>
      <div className="mb-6">
        <PassportTable list={regions} />
      </div>
      <div className="text-right">
        <Pagination2 />
      </div>
    </div>
  );
};

export default PassportsListPage;
