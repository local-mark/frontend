// ProductBrand.jsx
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SortBar from '../Gallery/SortBar';
import mockup1 from '../../assets/image/Gallery/mockup_1.svg';
import mockup2 from '../../assets/image/Gallery/mockup_2.svg';
import mockup3 from '../../assets/image/Gallery/mockup_3.svg';
import mockup4 from '../../assets/image/Gallery/mockup_4.svg';

const productsPerPage = 12;

const mockData = {
    isSuccess: true,
    code: 2000,
    message: 'SUCCESS!',
    result: {
        products: [
            {
                product_id: 1,
                subregion_name: '성수',
                brand_name: '브랜드명',
                product_name: '상품명',
                discount_rate: 10,
                price: 20000,
                thumbnail_url: mockup1,
            },
            {
                product_id: 2,
                subregion_name: '성수',
                brand_name: '브랜드명',
                product_name: '상품명',
                discount_rate: 5,
                price: 25000,
                thumbnail_url: mockup2,
            },
            {
                product_id: 3,
                subregion_name: '성수',
                brand_name: '브랜드명',
                product_name: '상품명',
                discount_rate: 5,
                price: 15000,
                thumbnail_url: mockup3,
            },
            {
                product_id: 4,
                subregion_name: '성수',
                brand_name: '브랜드명',
                product_name: '상품명',
                discount_rate: 10,
                price: 30000,
                thumbnail_url: mockup4,
            },
            {
                product_id: 5,
                subregion_name: '성수',
                brand_name: '브랜드명',
                product_name: '상품명',
                discount_rate: 30,
                price: 50000,
                thumbnail_url: mockup1,
            },
            {
                product_id: 6,
                subregion_name: '성수',
                brand_name: '브랜드명',
                product_name: '상품명',
                discount_rate: 40,
                price: 35000,
                thumbnail_url: mockup2,
            },
        ],
        currentPage: 1,
        totalPage: 3,
    },
};

const ProductBrand = () => {
    const [currentPage, setCurrentPage] = useState(mockData.result.currentPage);
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState('viewCount');
    const navigate = useNavigate();

    useEffect(() => {
        let sortedProducts = [...mockData.result.products];
        switch (sort) {
            case 'highPrice':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'lowPrice':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'popularity':
                sortedProducts.sort((a, b) => b.popularity - a.popularity);
                break;
            default:
                sortedProducts.sort((a, b) => b.viewCount - a.viewCount);
        }
        const pageProducts = sortedProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
        setProducts(pageProducts);
    }, [sort, currentPage]);

    const totalPages = mockData.result.totalPage;

    const handleProductClick = (productId) => {
        navigate(`/gallery/product/${productId}`);
    };

    return (
        <GalleryWrapper>
            <SortBarContainer>
                <SortBar sort={sort} setSort={setSort} />
            </SortBarContainer>
            <GalleryContainer>
                {products.map((product) => (
                    <ProductItem key={product.product_id} onClick={() => handleProductClick(product.product_id)}>
                        <ProductImage src={product.thumbnail_url} alt={product.product_name} />
                        <ProductDetails>
                            <ProductHeader>
                                <ProductRegion>{product.subregion_name}</ProductRegion>
                                <ProductBrandName>{product.brand_name}</ProductBrandName>
                            </ProductHeader>
                            <ProductName>{product.product_name}</ProductName>
                            <ProductPrice>
                                {product.discount_rate ? (
                                    <>
                                        <ProductDiscount>{product.discount_rate}%</ProductDiscount>
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
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </GalleryWrapper>
    );
};

const GalleryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
`;
const SortBarContainer = styled.div`
    display: flex;
    min-width: 1400px;
    flex-direction: column;
    padding-top: 10px;
    align-self: flex-end;
`;
const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 20px;
`;

const ProductItem = styled.div`
    padding: 16px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    cursor: pointer;
    background: #fff;
    border-radius: 10px;
`;

const ProductImage = styled.img`
    width: 100%;
    object-fit: cover;
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
    padding: 2px 10px;
    border-radius: 3px;
    background: #65bd83;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 16.8px */
    width: 50px;
`;

const ProductBrandName = styled.div`
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.4px;
`;

const ProductName = styled.div`
    color: var(--Color-Text-primary, #222);
    margin-top: 5px;
    /* B2_R */
    font-family: Pretendard;
    font-size: var(--Text-size-5, 18px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
`;

const ProductPrice = styled.div`
    color: #000;
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 600;
`;

const ProductDiscount = styled.div`
    color: #ff8162;
    font-size: 22px;
    font-weight: 700;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <PaginationContainer>
            <PageButton onClick={handlePreviousPage} disabled={currentPage === 1}>
                <FaChevronLeft />
            </PageButton>
            {[...Array(totalPages)].map((_, index) => (
                <PageButton key={index + 1} onClick={() => onPageChange(index + 1)} active={index + 1 === currentPage}>
                    {index + 1}
                </PageButton>
            ))}
            <PageButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                <FaChevronRight />
            </PageButton>
        </PaginationContainer>
    );
};

const PaginationContainer = styled.div`
    display: flex;
    margin-top: 16px;
    justify-content: center;
`;

const PageButton = styled.button`
    margin: 0 5px;
    padding: 10px 15px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${(props) => (props.active ? '#FF8162' : '#000')};
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
    &:disabled {
        opacity: 0.5;
    }
`;

export default ProductBrand;
