import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import mockup1 from '../../assets/image/Gallery/mockup_1.svg';
import mockup2 from '../../assets/image/Gallery/mockup_2.svg';
import mockup3 from '../../assets/image/Gallery/mockup_3.svg';
import mockup4 from '../../assets/image/Gallery/mockup_4.svg';

const mockSuggestions = [
    { text: '상의1', image: mockup1 },
    { text: '상의2', image: mockup2 },
    { text: '하의1', image: mockup3 },
    { text: '하의2', image: mockup4 },
];

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        const filteredSuggestions = mockSuggestions.filter((item) => item.text.includes(value));
        setSuggestions(value ? filteredSuggestions : []);
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.text);
        setSuggestions([]);
        onSearch(suggestion.text);
    };

    return (
        <SearchContainer>
            <SearchForm onSubmit={handleSearch}>
                <FaSearch style={{ marginRight: '3px', color: '#BDBDBD' }} />
                <SearchInput type="text" placeholder="제품 검색 ..." value={query} onChange={handleInputChange} />
            </SearchForm>
            {suggestions.length > 0 && (
                <SuggestionsList>
                    {suggestions.map((suggestion, index) => (
                        <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                            <SuggestionImage src={suggestion.image} alt={suggestion.text} />
                            {suggestion.text}
                        </SuggestionItem>
                    ))}
                </SuggestionsList>
            )}
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
    position: relative;
    width: 282px;
    margin-left: 25px;
`;

const SearchForm = styled.form`
    display: flex;
    width: 282px;
    height: 48px;
    padding: 14px 16px;
    align-items: center;
    gap: 16px;
    border-radius: 10px;
    border: 0.5px solid var(--Color-Gray-gray-400, #bdbdbd);
    background: #fff;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.07);
`;

const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
`;

const SuggestionsList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 150px;
    overflow-y: auto;
    background: #fff;
    border-radius: 10px;
    background: var(--Color-Background-white, #fff);
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.08);
    border: 0.5px solid var(--Color-Gray-gray-500, #9e9e9e);
    z-index: 1000;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const SuggestionItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    border-bottom: 0.5px solid var(--Color-Gray-gray-500, #9e9e9e);

    &:hover {
        background-color: #f0f0f0;
    }
`;

const SuggestionImage = styled.img`
    width: 26px;
    height: 26px;
    margin-right: 10px;
`;

export default SearchBar;
