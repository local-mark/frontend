import React, { useState } from 'react';
import styled from 'styled-components';

const regions = [
    '서울',
    '부산',
    '인천',
    '대구',
    '대전',
    '광주',
    '울산',
    '세종',
    '경기',
    '충북',
    '충남',
    '전북',
    '전남',
    '경북',
    '경남',
    '강원',
    '제주',
];

const RegionFilter = ({ onRegionSelect }) => {
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleRegionClick = (region) => {
        const newRegion = selectedRegion === region ? '' : region;
        setSelectedRegion(newRegion);
        onRegionSelect(newRegion);
    };

    return (
        <RegionFilterContainer>
            {regions.map((region) => (
                <RegionButton
                    key={region}
                    onClick={() => handleRegionClick(region)}
                    selected={selectedRegion === region}
                >
                    {region}
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
