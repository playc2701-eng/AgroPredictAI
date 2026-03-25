import React from 'react';

const CropDatabase = ({ region }) => {
    const crops = {
        'Region1': ['Crop A', 'Crop B', 'Crop C'],
        'Region2': ['Crop D', 'Crop E'],
        'Region3': ['Crop F', 'Crop G'],
    };

    return (
        <div>
            <h1>Crops Suitable for {region}</h1>
            <ul>
                {crops[region]?.map((crop, index) => (
                    <li key={index}>{crop}</li>
                )) || <li>No crops found for this region.</li>}
            </ul>
        </div>
    );
};

export default CropDatabase;