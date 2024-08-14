import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/Gallery/Sidebar';
import RegionFilter from '../../components/Gallery/RegionFilter';
import SearchBar from '../../components/Gallery/SearchBar';
import ProductGallery from '../../components/Gallery/ProductGallery';
import { fetchData } from '../../services/api';

const Gallery = () => {
    const [category, setCategory] = useState(null);
    const [region, setRegion] = useState(null);
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('popularity');
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const loadGallery = async () => {
            try {
                const params = {
                    page: currentPage,
                    region,
                    category,
                    sort: getSortValue(sort),
                    keyword: query,
                };
                const data = await fetchData('/gallery', params);
                setProducts(data.result);
                setTotalPages(data.totalPages); // API에서 총 페이지 수를 반환하는 경우
            } catch (error) {
                console.error('갤러리 데이터를 불러오는 중 오류가 발생했습니다:', error);
            }
        };

        loadGallery();
    }, [category, region, query, sort, currentPage]);

    const getSortValue = (sort) => {
        switch (sort) {
            case 'lowPrice':
                return 1;
            case 'highPrice':
                return 2;
            case 'popularity':
                return 3;
            default:
                return null; // 조회순 또는 기본값
        }
    };

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
                    products={products} // API로 받은 상품 목록을 전달
                    currentPage={currentPage}
                    totalPages={totalPages}
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
