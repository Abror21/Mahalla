import { useEffect, useContext } from 'react';
import axios from 'axios';
import Select from "components/Select/select";
import { ContextData } from 'Data/ContextData';

const SelectList = ({ addition, back }) => {
  const { regions, setRegions, districts, setDistricts, villages, setVillages,
          regionTitle, setRegionTitle, districtTitle, setDistrictTitle, villageTitle, setVillageTitle,
          regionId, setRegionId, districtId, setDistrictId, setDistrictCount, setVillageCount } = useContext(ContextData);
  
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
          setDistrictCount(districts.length)
          setVillageCount(0)
          setVillages([])
        });
    }
  }, [regionId]);
  
  useEffect(() => {
    if (districtId) {
      axios
        .get("https://raw.githubusercontent.com/MIMAXUZ/uzbekistan-regions-data/master/JSON/villages.json")
        .then((data) => {
          const villages = data.data.filter(village => village.district_id === districtId);
          setVillages(villages);
          setVillageCount(villages.length)
        });
    }
  }, [districtId]);
  
  const clearTwoTitles = () => {
    setDistrictTitle('Tumanni tanlang')
    setVillageTitle('Mahallani tanlang')
  }
  const clearTitle = () => {
    setVillageTitle('Mahallani tanlang')
  }
  return (
    <div className="flex gap-4 items-start">
      <Select
        title={regionTitle}
        setTitle={setRegionTitle}
        list={regions}
        back={back}
        setId={setRegionId}
        clearTitle={clearTwoTitles}
      />
      <Select
        title={districtTitle}
        setTitle={setDistrictTitle}
        list={districts}
        back={back}
        setId={setDistrictId}
        clearTitle={clearTitle}
      />
      <Select title={villageTitle} setTitle={setVillageTitle} list={villages} back={back} />
      {addition}
    </div>
  );
};

export default SelectList;
