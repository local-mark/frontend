import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';

const SortBar = ({ sort, setSort }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSortChange = (newSort) => {
        setSort(newSort);
        setIsOpen(false);
    };

    return (
        <SortContainer>
            <SortButton onClick={() => setIsOpen(!isOpen)}>
                {sort === 'viewCount' && '조회순'}
                {sort === 'highPrice' && '높은가격순'}
                {sort === 'lowPrice' && '낮은가격순'}
                {sort === 'popularity' && '인기순'}
                <FaCaretDown style={{ marginLeft: '5px' }} />
            </SortButton>
            {isOpen && (
                <SortDropdown>
                    <SortOption onClick={() => handleSortChange('viewCount')}>조회순</SortOption>
                    <SortOption onClick={() => handleSortChange('highPrice')}>높은가격순</SortOption>
                    <SortOption onClick={() => handleSortChange('lowPrice')}>낮은가격순</SortOption>
                    <SortOption onClick={() => handleSortChange('popularity')}>인기순</SortOption>
                </SortDropdown>
            )}
        </SortContainer>
    );
};

const SortContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin-right: 40px;
`;

const SortButton = styled.button`
    display: flex;
    align-items: center;
    color: var(--Color-Text-primary, #222);
    text-align: right;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 18.2px */
    letter-spacing: 0.26px;
    border: none;
    cursor: pointer;
`;

const SortDropdown = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    z-index: 1000;
`;

const SortOption = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;

export default SortBar;
