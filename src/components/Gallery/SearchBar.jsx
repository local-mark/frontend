import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { fetchData } from '../../services/api';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
        setSuggestions([]); // 검색 후 제안 목록을 비웁니다.
    };

    const handleInputChange = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value) {
            try {
                // API 요청을 통해 검색어에 대한 제안을 가져옵니다.
                const params = { page: 1, keyword: value }; // 검색어를 포함하여 API 요청
                const data = await fetchData('/gallery', params); // 전체 상품 데이터를 가져옵니다.
                setSuggestions(data.result.products); // API에서 제안 목록을 받아와서 상태로 저장
            } catch (error) {
                console.error('검색 제안을 불러오는 중 오류가 발생했습니다:', error);
            }
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.product_name); // 선택된 제안을 검색어로 설정
        onSearch(suggestion.product_name); // 선택된 제안으로 검색을 실행
        setSuggestions([]); // 제안 목록을 비웁니다.
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
                            <SuggestionImage src={suggestion.thumbnail_url} alt={suggestion.product_name} />
                            {suggestion.product_name}
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
