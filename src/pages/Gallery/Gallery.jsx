import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/Gallery/Sidebar';
import RegionFilter from '../../components/Gallery/RegionFilter';
import SearchBar from '../../components/Gallery/SearchBar';
import ProductGallery from '../../components/Gallery/ProductGallery';
import SortBar from '../../components/Gallery/SortBar';
import { fetchData } from '../../services/api';
import { useSearchParams } from 'react-router-dom';

const Gallery = () => {
    const [searchParams] = useSearchParams();
    const [category, setCategory] = useState(searchParams.get('category') || null);
    const [region, setRegion] = useState(null);
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const loadGallery = async () => {
            try {
                const params = {
                    page: currentPage,
                    region: region || undefined,
                    category: category || undefined,
                    sort: sort || undefined,
                    keyword: query || undefined,
                };
                const data = await fetchData('/gallery', params);
                setProducts(data.result.products); // API로부터 받은 상품 목록
                setTotalPages(data.result.totalPage); // 총 페이지 수 설정
            } catch (error) {
                console.error('갤러리 데이터를 불러오는 중 오류가 발생했습니다:', error);
            }
        };

        loadGallery();
    }, [category, region, query, sort, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        setCategory(searchParams.get('category') || null);
    }, [searchParams]);

    return (
        <GalleryContainer>
            <Sidebar onCategorySelect={setCategory} />
            <Content>
                <RegionFilter onRegionSelect={setRegion} />
                <SearchBar onSearch={setQuery} />
                <SortBar sort={sort} setSort={setSort} />
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
    min-width: 1100px;
    width: 100%;
    box-sizing: border-box;
`;

export default Gallery;
