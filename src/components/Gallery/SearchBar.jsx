import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <SearchForm onSubmit={handleSearch}>
            <SearchInput
                type="text"
                placeholder="제품 및 세부지역 검색 ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton type="submit">검색</SearchButton>
        </SearchForm>
    );
};

const SearchForm = styled.form`
    display: flex;
    margin: 20px;
`;

const SearchInput = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
`;

const SearchButton = styled.button`
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    &:hover {
        background-color: #eee;
    }
`;

export default SearchBar;
