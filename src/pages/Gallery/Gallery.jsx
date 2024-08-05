import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/Gallery/Sidebar';
import RegionFilter from '../../components/Gallery/RegionFilter';
import SearchBar from '../../components/Gallery/SearchBar';
import ProductGallery from '../../components/Gallery/ProductGallery';

const Gallery = () => {
    const [category, setCategory] = useState(null);
    const [region, setRegion] = useState(null);
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('popularity');
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <GalleryContainer>
            <Sidebar onCategorySelect={setCategory} />
            <Content>
                <RegionFilter onRegionSelect={setRegion} />
                <SearchBar onSearch={setQuery} />
                <ProductGallery
                    category={category}
                    region={region}
                    query={query}
                    sort={sort}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </Content>
        </GalleryContainer>
    );
};

const GalleryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
`;

const Content = styled.div`
    flex: 1;
    padding: 20px;
    max-width: 1600px;
    min-width: 1400px;
    width: 100%;
    box-sizing: border-box;
`;

export default Gallery;
