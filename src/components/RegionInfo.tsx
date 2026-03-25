import React from 'react';

interface RegionInfoProps {
    region: string;
    area: number;
    population: number;
    climate: string;
    agriculture: string;
}

const RegionInfo: React.FC<RegionInfoProps> = ({ region, area, population, climate, agriculture }) => {
    return (
        <div>
            <h2>Region Information: {region}</h2>
            <p><strong>Area:</strong> {area} sq km</p>
            <p><strong>Population:</strong> {population}</p>
            <p><strong>Climate:</strong> {climate}</p>
            <p><strong>Agriculture:</strong> {agriculture}</p>
        </div>
    );
};

export default RegionInfo;