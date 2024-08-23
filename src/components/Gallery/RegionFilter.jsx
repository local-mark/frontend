import { useState } from 'react';
import styled from 'styled-components';

const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '부산' },
    { id: 3, name: '인천' },
    { id: 4, name: '대구' },
    { id: 5, name: '대전' },
    { id: 6, name: '광주' },
    { id: 7, name: '울산' },
    { id: 8, name: '세종' },
    { id: 9, name: '경기' },
    { id: 10, name: '충북' },
    { id: 11, name: '충남' },
    { id: 12, name: '전북' },
    { id: 13, name: '전남' },
    { id: 14, name: '경북' },
    { id: 15, name: '경남' },
    { id: 16, name: '강원' },
    { id: 17, name: '제주' },
];

const RegionFilter = ({ onRegionSelect }) => {
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleRegionClick = (region) => {
        const newRegion = selectedRegion === region.id ? '' : region.id;
        setSelectedRegion(newRegion);
        onRegionSelect(newRegion);
    };

    return (
        <RegionFilterContainer>
            {regions.map((region) => (
                <RegionButton
                    key={region.id}
                    onClick={() => handleRegionClick(region)}
                    selected={selectedRegion === region.id}
                >
                    {region.name}
                </RegionButton>
            ))}
        </RegionFilterContainer>
    );
};

const RegionFilterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    margin-top: 40px;
    max-width: 1200px;
`;

const RegionButton = styled.button`
    margin: 5px;
    display: flex;
    padding: var(--Spacing-3, 8px) var(--Spacing-5, 24px);
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid var(--Color-Gray-gray-500, #9e9e9e);
    background: ${(props) =>
        props.selected ? 'var(--Color-Main-primary, #65bd83)' : 'var(--Color-Background-white, #fff)'};
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
    color: ${(props) =>
        props.selected ? 'var(--Color-Background-white, #fff)' : 'var(--Color-Gray-gray-700, #616161);'};
    font-size: var(--Text-size-3, 14px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
`;

export default RegionFilter;
