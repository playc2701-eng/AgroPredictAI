import React, { useState } from 'react';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [regionInfo, setRegionInfo] = useState('');

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    fetchRegionInfo(region);
  };

  const fetchRegionInfo = (region) => {
    // Simulate fetching information based on region selection
    const info = `Information about ${region}`;
    setRegionInfo(info);
  };

  return (
    <div>
      <h1>Region Selection</h1>
      <select value={selectedRegion} onChange={handleRegionChange}>
        <option value="">Select a region</option>
        <option value="Region1">Region 1</option>
        <option value="Region2">Region 2</option>
        <option value="Region3">Region 3</option>
      </select>
      {regionInfo && <div><h2>Region Information</h2><p>{regionInfo}</p></div>}
    </div>
  );
};

export default App;