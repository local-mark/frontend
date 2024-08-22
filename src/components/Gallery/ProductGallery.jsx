import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const ProductGallery = ({ products, currentPage, totalPages, onPageChange }) => {
    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        navigate(`/gallery/product/${productId}`);
    };

    return (
        <GalleryWrapper>
            <GalleryContainer>
                {products.map((product) => (
                    <ProductItem key={product.product_id} onClick={() => handleProductClick(product.product_id)}>
                        <ProductImage src={product.thumbnail_url} alt={product.product_name} />
                        <ProductDetails>
                            <ProductHeader>
                                <ProductRegion>{product.subregion_name}</ProductRegion>
                                <ProductBrand>{product.brand_name}</ProductBrand>
                            </ProductHeader>
                            <ProductName>{product.product_name}</ProductName>
                            <ProductPrice>
                                {product.discount_rate ? (
                                    <>
                                        <ProductDiscount>{product.discount_rate}%</ProductDiscount>
                                        {(product.price * (1 - product.discount_rate / 100)).toLocaleString()}원
                                    </>
                                ) : (
                                    <>{product.price.toLocaleString()}원</>
                                )}
                            </ProductPrice>
                        </ProductDetails>
                    </ProductItem>
                ))}
            </GalleryContainer>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </GalleryWrapper>
    );
};

const GalleryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    min-width: 1100px;
    width: 100%;
`;

const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 20px;
`;

const ProductItem = styled.div`
    padding: 16px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    cursor: pointer;
`;

const ProductImage = styled.img`
    width: auto;
    height: 300px;
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
    margin-left: 440px;
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

export default ProductGallery;
