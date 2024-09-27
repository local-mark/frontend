import React from 'react';
import styled from 'styled-components';

const PageBar = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
        <PageBarContainer>
            {pageNumbers.map((number) => (
                <PageNumber
                    key={number}
                    isActive={number === currentPage}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </PageNumber>
            ))}
        </PageBarContainer>
    );
};

export default PageBar;

const PageBarContainer = styled.div`
    bottom: 0; 
    width: 100%; 
    display: flex;
    justify-content: center;
    background-color: white; 
    padding: 10px 0; 
    z-index: 1000; 
`;

const PageNumber = styled.button`
    background-color: ${({ isActive }) => (isActive ? '#65BD83' : 'white')};
    color: ${({ isActive }) => (isActive ? 'white' : '#65BD83')};
    border: 1px solid #65BD83;
    border-radius: 3px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: ${({ isActive }) => (isActive ? '#4CAF50' : '#f1f1f1')};
    }
`;