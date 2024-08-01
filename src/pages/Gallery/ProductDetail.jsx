import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import mockup1 from '../../assets/image/Gallery/mockup_1.svg';
import mockup2 from '../../assets/image/Gallery/mockup_2.svg';
import mockup3 from '../../assets/image/Gallery/mockup_3.svg';
import mockup4 from '../../assets/image/Gallery/mockup_4.svg';

const mockProducts = [
    {
        product_id: 1,
        brand_id: 1,
        product_name: '이불',
        brand_name: '푸른',
        region: '서울',
        price: 12000,
        discount_rate: 30,
        delivery_fee: 3000,
        description: '따스한 ~~ ',
        images: [mockup1, mockup2, mockup3, mockup4],
        colors: ['핑크', '레드'],
        sizes: ['s', 'm', 'l'],
    },
    {
        product_id: 2,
        brand_id: 2,
        product_name: '베개',
        brand_name: '하얀',
        region: '부산',
        price: 8000,
        discount_rate: 20,
        delivery_fee: 2000,
        description: '부드러운 ~~ ',
        images: [mockup2, mockup3, mockup4],
        colors: ['블루', '그린'],
        sizes: ['s', 'm'],
    },
    // 다른 제품들도 추가...
];

const ProductDetail = () => {
    const { productId } = useParams();
    const product = mockProducts.find((p) => p.product_id === Number(productId));

    const [currentImage, setCurrentImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev + 1) % product.images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <Container>
            <ImageSection>
                <ArrowButton onClick={handlePreviousImage}>
                    <FaChevronLeft />
                </ArrowButton>
                <ProductImage src={product.images[currentImage]} alt="제품 이미지" />
                <ArrowButton onClick={handleNextImage}>
                    <FaChevronRight />
                </ArrowButton>
                <Pagination>
                    {product.images.map((_, index) => (
                        <PageDot key={index} active={index === currentImage} onClick={() => setCurrentImage(index)} />
                    ))}
                </Pagination>
            </ImageSection>
            <InfoSection>
                <BrandName>{product.brand_name}</BrandName>
                <ProductName>{product.product_name}</ProductName>
                <Discount>{product.discount_rate}%</Discount>
                <Price>{product.price.toLocaleString()}원</Price>
                <ShippingInfo>{product.description}</ShippingInfo>
                <ShippingFee>배송비: {product.delivery_fee.toLocaleString()}원</ShippingFee>
                <OptionSelect onChange={(e) => setSelectedColor(e.target.value)}>
                    <option>색상 선택</option>
                    {product.colors.map((color, index) => (
                        <option key={index} value={color}>
                            {color}
                        </option>
                    ))}
                </OptionSelect>
                <OptionSelect onChange={(e) => setSelectedSize(e.target.value)}>
                    <option>사이즈 선택</option>
                    {product.sizes.map((size, index) => (
                        <option key={index} value={size}>
                            {size}
                        </option>
                    ))}
                </OptionSelect>
                <ButtonContainer>
                    <Button>장바구니 담기</Button>
                    <Button primary>바로 구매하기</Button>
                </ButtonContainer>
            </InfoSection>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    padding: 20px;
    min-width: 1400px;
    max-width: 1600px;
`;

const ImageSection = styled.div`
    position: relative;
    width: 50%;
`;

const ArrowButton = styled.button`
    position: absolute;
    top: 50%;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 24px;
`;

const ProductImage = styled.img`
    width: 588px;
    height: 588px;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const PageDot = styled.div`
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background: ${(props) => (props.active ? '#FF8162' : '#ddd')};
    border-radius: 50%;
    cursor: pointer;
`;

const InfoSection = styled.div`
    width: 50%;
    padding: 20px;
`;

const BrandName = styled.h2`
    cursor: pointer;
    color: #65bd83;
`;

const ProductName = styled.h1`
    font-size: 24px;
    font-weight: bold;
`;

const Discount = styled.div`
    color: #ff8162;
    font-size: 20px;
    font-weight: bold;
`;

const Price = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

const ShippingInfo = styled.div`
    margin-top: 10px;
`;

const ShippingFee = styled.div`
    margin-top: 10px;
`;

const OptionSelect = styled.select`
    width: 100%;
    margin: 10px 0;
    padding: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.button`
    flex: 1;
    padding: 15px;
    background: ${(props) => (props.primary ? '#65bd83' : '#fff')};
    color: ${(props) => (props.primary ? '#fff' : '#65bd83')};
    border: 1px solid #65bd83;
    cursor: pointer;
`;

export default ProductDetail;
