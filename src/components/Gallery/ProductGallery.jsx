import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import mockup1 from '../../assets/image/Gallery/mockup_1.svg';
import mockup2 from '../../assets/image/Gallery/mockup_2.svg';
import mockup3 from '../../assets/image/Gallery/mockup_3.svg';
import mockup4 from '../../assets/image/Gallery/mockup_4.svg';

const mockProducts = [
    {
        id: 1,
        image: mockup1,
        product_name: '제품명',
        brand_name: '브랜드명',
        region: '성수',
        discount_rate: 30,
        price: 50000,
    },
    {
        id: 2,
        image: mockup2,
        product_name: '제품명',
        brand_name: '브랜드명',
        region: '제주',
        discount_rate: 20,
        price: 10000,
    },
    {
        id: 3,
        image: mockup3,
        product_name: '제품명',
        brand_name: '브랜드명',
        region: '성수',
        discount_rate: 30,
        price: 50000,
    },
    {
        id: 4,
        image: mockup4,
        product_name: '제품명',
        brand_name: '브랜드명',
        region: '종로',
        discount_rate: 20,
        price: 10000,
    },
    {
        id: 5,
        image: mockup1,
        product_name: '제품명',
        brand_name: '브랜드명',
        region: '성수',
        discount_rate: 30,
        price: 50000,
    },
    {
        id: 6,
        image: mockup2,
        product_name: '제품명',
        brand_name: '브랜드명',
        region: '제주',
        discount_rate: 20,
        price: 10000,
    },
    {
        id: 7,
        image: mockup3,
        product_name: '제품명',
        brand_name: '브랜드명',
        region: '제주',
        discount_rate: 30,
        price: 50000,
    },
    {
        id: 8,
        image: mockup4,
        product_name: '제품명',
        brand_name: '브랜드명',
        region: '성수',
        discount_rate: 20,
        price: 10000,
    },
    {
        id: 9,
        image: mockup1,
        product_name: '제품명',
        brand_name: '브랜드명',
        region: '제주',
        discount_rate: 30,
        price: 50000,
    },
    {
        id: 10,
        image: mockup2,
        product_name: '제품명',
        brand_name: '브랜드명',
        region: '성수',
        discount_rate: 20,
        price: 10000,
    },
    {
        id: 11,
        image: mockup3,
        product_name: '제품명',
        brand_name: '브랜드명',
        region: '제주',
        discount_rate: 30,
        price: 50000,
    },
    {
        id: 12,
        image: mockup4,
        product_name: '제품명',
        brand_name: '브랜드명',
        region: '제주',
        discount_rate: 20,
        price: 10000,
    },
];

const ProductGallery = ({ category, region, query, sort, currentPage, onPageChange }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(mockProducts);
    }, [category, region, query, sort, currentPage]);

    return (
        <>
            <GalleryContainer>
                {products.map((product) => (
                    <ProductItem key={product.id}>
                        <ProductImage src={product.image} alt={product.product_name} />
                        <ProductDetails>
                            <ProductHeader>
                                <ProductRegion>{product.region}</ProductRegion>
                                <ProductBrand>{product.brand_name}</ProductBrand>
                            </ProductHeader>
                            <ProductName>{product.product_name}</ProductName>
                            <ProductPrice>
                                {product.discount_rate ? (
                                    <>
                                        <ProductDiscount>{product.discount_rate}%</ProductDiscount>{' '}
                                        {product.price.toLocaleString()}원
                                    </>
                                ) : (
                                    <>{product.price.toLocaleString()}원</>
                                )}
                            </ProductPrice>
                        </ProductDetails>
                    </ProductItem>
                ))}
            </GalleryContainer>
            <Pagination currentPage={currentPage} totalPages={5} onPageChange={onPageChange} />
        </>
    );
};

const GalleryContainer = styled.div`
    grid-template-columns: repeat(3, 1fr); /* 한 열에 3개의 제품 */
    display: grid;
    width: 1400px;
    padding-top: 52px;
    gap: 50px;
    margin-left: 250px;
`;

const ProductItem = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
`;

const ProductImage = styled.img`
    width: 400px; /* 이미지 너비 */
    height: 400px; /* 이미지 높이 */
    object-fit: cover; /* 이미지를 컨테이너에 맞춤 */
`;

const ProductDetails = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ProductHeader = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
`;

const ProductRegion = styled.div`
    padding: var(--Spacing-1, 4px) 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 3px;
    background: var(--Color-Main-primary, #65bd83);
    color: var(--Color-Background-white, #fff);

    font-family: Pretendard;
    font-size: var(--Text-size-2, 12px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 16.8px */
    letter-spacing: -0.24px;
`;

const ProductBrand = styled.div`
    color: var(--Color-Text-primary, #222);

    /* B3_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
`;

const ProductName = styled.div`
    color: var(--Color-Text-primary, #222);
    margin-top: 6px;

    /* B2_R */
    font-family: Pretendard;
    font-size: var(--Text-size-5, 18px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
`;

const ProductPrice = styled.div`
    color: var(--Color-Text-cto, #000);
    display: flex;

    align-items: baseline;
    gap: 10px;
    font-family: Montserrat;
    font-size: var(--Text-size-7, 22px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 30.8px */
    letter-spacing: -0.44px;
`;

const ProductDiscount = styled.div`
    color: var(--Color-Main-secondary, #ff8162);

    /* Num/L_B */
    font-family: Montserrat;
    font-size: var(--Text-size-7, 22px);
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 30.8px */
    letter-spacing: -0.44px;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <PaginationContainer>
            {pages.map((page) => (
                <PageButton key={page} onClick={() => onPageChange(page)} disabled={page === currentPage}>
                    {page}
                </PageButton>
            ))}
        </PaginationContainer>
    );
};

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`;

const PageButton = styled.button`
    margin: 0 5px;
    padding: 10px 15px;
    cursor: pointer;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    &:disabled {
        background-color: #eee;
        cursor: not-allowed;
    }
`;

export default ProductGallery;
