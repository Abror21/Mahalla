import React, { createContext, useState } from "react";

export const ContextData = createContext();

const AppProvider = ({ children }) => {
    
    const [regions, setRegions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [villages, setVillages] = useState([]);
    
    const [regionTitle, setRegionTitle] = useState("Viloyatni tanlang");
    const [districtTitle, setDistrictTitle] = useState("Tumanni tanlang");
    const [villageTitle, setVillageTitle] = useState("Mahallani tanlang");
    
    const [regionId, setRegionId] = useState(null);
    const [districtId, setDistrictId] = useState(null);
    
    const [districtCount, setDistrictCount] = useState(0);
    const [villageCount, setVillageCount] = useState(0);
    
    const statisticsData = {
        regions, setRegions,
        districts, setDistricts,
        villages, setVillages,
        regionTitle, setRegionTitle,
        districtTitle, setDistrictTitle,
        villageTitle, setVillageTitle,
        regionId, setRegionId,
        districtId, setDistrictId,
        districtCount, setDistrictCount,
        villageCount, setVillageCount,
    }
    
    return(
        <ContextData.Provider value={statisticsData}>
            {children}
        </ContextData.Provider>
    )
}

export default AppProvider;

