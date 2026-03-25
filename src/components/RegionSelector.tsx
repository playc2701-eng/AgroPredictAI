import React from 'react';

const regions = [
    { id: 1, name: 'Bishkek' },
    { id: 2, name: 'Osh' },
    { id: 3, name: 'Jalal-Abad' },
    { id: 4, name: 'Chuy' },
    { id: 5, name: 'Batken' },
    { id: 6, name: 'Naryn' },
    { id: 7, name: 'Issyk-Kul' },
    { id: 8, name: 'Talas' }
];

const RegionSelector = ({ selectedRegion, onSelectRegion }) => {
    return (
        <select value={selectedRegion} onChange={(e) => onSelectRegion(e.target.value)}>
            <option value=''>Select a region</option>
            {regions.map(region => (
                <option key={region.id} value={region.name}>{region.name}</option>
            ))}
        </select>
    );
};

export default RegionSelector;