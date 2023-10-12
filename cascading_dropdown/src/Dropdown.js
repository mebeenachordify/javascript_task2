import React, { useState, useEffect } from "react";
import './Dropdown.css';


function Dropdown() {
  const states = [
    { id: "1", name: "TamilNadu" },
    { id: "2", name: "Kerala" }
  ];

  const districts = [
    { id: "1", stateId: "1", name: "Kanniyakumari" },
    { id: "2", stateId: "1", name: "Selam" },
    { id: "3", stateId: "2", name: "Wayanad" },
    { id: "4", stateId: "2", name: "Kottayam" }
  ];

  const [selectedState, setSelectedState] = useState("0");
  const [districtsForSelectedState, setDistrictsForSelectedState] = useState([]);

  useEffect(() => {
        handleStateChange("0");
  }, []);

  const handleStateChange = (id) => {
    const filteredDistricts = districts.filter((d) => d.stateId === id);
    setDistrictsForSelectedState(filteredDistricts);
    setSelectedState(id);
  };

  return (
    
    <div className="drop">
        <h2>States And District</h2>
      <select
        id="ddstate"
        className="select-class"
        onChange={(e) => handleStateChange(e.target.value)}
        value={selectedState}
      >
        <option value="0">Select state</option>
        {states.map((sta) => (
          <option key={sta.id} value={sta.id}>
            {sta.name}
          </option>
        ))}
      </select>
      <br />
      <select id="dddist" className="select-class">
        <option value="0">Select District</option>
        {districtsForSelectedState.map((district) => (
          <option key={district.id} value={district.id}>
            {district.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
