import React from 'react';
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
    return (
        <RegionFilterContainer>
            {regions.map((region) => (
                <RegionButton key={region} onClick={() => onRegionSelect(region)}>
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
`;

const RegionButton = styled.button`
    margin: 5px;
    padding: 10px 15px;
    cursor: pointer;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    &:hover {
        background-color: #eee;
    }
`;

export default RegionFilter;
