import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft, FaStar, FaTimes } from 'react-icons/fa';
import BrandContainer from '../../components/Gallery/BrandContainer';
import ProductContent from '../../components/Gallery/ProductContent';

import mockup1 from '../../assets/image/Gallery/mockup_1.svg';
import mockup2 from '../../assets/image/Gallery/mockup_2.svg';
import mockup3 from '../../assets/image/Gallery/mockup_3.svg';
import mockup4 from '../../assets/image/Gallery/mockup_4.svg';

const mockProducts = [
    {
        product_id: 1,
        brand_id: 1,
        product_name: 'Palace Tee-Light Pink',
        brand_name: '푸른',
        region: '서울',
        price: 50000,
        discount_rate: 30,
        delivery_fee: 3000,
        description: '따스한 ~~ ',
        images: [mockup1, mockup2, mockup3, mockup4],
        description_images: [mockup2, mockup3],
        colors: ['핑크', '레드'],
        sizes: ['s', 'm', 'l'],
        star_avg: 4.5,
        review_cnt: 108,
        shipping_info: '3',
    },
    {
        product_id: 2,
        brand_id: 2,
        product_name: 'Palace Tee-Light Pink',
        brand_name: '하얀',
        region: '부산',
        price: 10000,
        discount_rate: 20,
        delivery_fee: 2000,
        description: '부드러운 ~~ ',
        images: [mockup2, mockup3, mockup4],
        description_images: [mockup1, mockup4],
        colors: ['블루', '그린'],
        sizes: ['s', 'm'],
        star_avg: 4.2,
        review_cnt: 56,
        shipping_info: '3',
    },
    {
        product_id: 1,
        brand_id: 1,
        product_name: 'Palace Tee-Light Pink',
        brand_name: '푸른',
        region: '서울',
        price: 50000,
        discount_rate: 30,
        delivery_fee: 3000,
        description: '따스한 ~~ ',
        images: [mockup1, mockup2, mockup3, mockup4],
        description_images: [mockup2, mockup3],
        colors: ['핑크', '레드'],
        sizes: ['s', 'm', 'l'],
        star_avg: 4.5,
        review_cnt: 108,
        shipping_info: '3',
    },
    {
        product_id: 2,
        brand_id: 2,
        product_name: 'Palace Tee-Light Pink',
        brand_name: '하얀',
        region: '부산',
        price: 10000,
        discount_rate: 20,
        delivery_fee: 2000,
        description: '부드러운 ~~ ',
        images: [mockup2, mockup3, mockup4],
        description_images: [mockup1, mockup4],
        colors: ['블루', '그린'],
        sizes: ['s', 'm'],
        star_avg: 4.2,
        review_cnt: 56,
        shipping_info: '3',
    },
    {
        product_id: 3,
        brand_id: 3,
        product_name: 'Palace Tee-Light Pink',
        brand_name: '푸른',
        region: '서울',
        price: 50000,
        discount_rate: 30,
        delivery_fee: 3000,
        description: '따스한 ~~ ',
        images: [mockup1, mockup2, mockup3, mockup4],
        description_images: [mockup2, mockup3],
        colors: ['핑크', '레드'],
        sizes: ['s', 'm', 'l'],
        star_avg: 4.5,
        review_cnt: 108,
        shipping_info: '3',
    },
    {
        product_id: 4,
        brand_id: 4,
        product_name: 'Palace Tee-Light Pink',
        brand_name: '하얀',
        region: '부산',
        price: 10000,
        discount_rate: 20,
        delivery_fee: 2000,
        description: '부드러운 ~~ ',
        images: [mockup2, mockup3, mockup4],
        description_images: [mockup1, mockup4],
        colors: ['블루', '그린'],
        sizes: ['s', 'm'],
        star_avg: 4.2,
        review_cnt: 56,
        shipping_info: '3',
    },
];

const ProductDetail = () => {
    const { productId } = useParams();
    const product = mockProducts.find((p) => p.product_id === Number(productId));

    const [currentImage, setCurrentImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev + 1) % product.images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    useEffect(() => {
        if (selectedColor && selectedSize) {
            const option = `${selectedColor} - ${selectedSize}`;
            if (!selectedOptions.some((opt) => opt.option === option)) {
                setSelectedOptions([...selectedOptions, { option, quantity, price: product.price }]);
                setSelectedColor('');
                setSelectedSize('');
            }
        }
    }, [selectedColor, selectedSize]);

    const handleRemoveOption = (option) => {
        setSelectedOptions(selectedOptions.filter((opt) => opt.option !== option));
    };

    const handleQuantityChange = (index, delta) => {
        const newOptions = [...selectedOptions];
        newOptions[index].quantity = Math.max(1, newOptions[index].quantity + delta);
        setSelectedOptions(newOptions);
    };

    const totalOrderPrice = selectedOptions.reduce((sum, opt) => sum + opt.price * opt.quantity, 0);

    return (
        <>
            <Wrapper>
                <Container>
                    <ImageSection>
                        <ArrowButtonLeft onClick={handlePreviousImage}>
                            <FaChevronLeft />
                        </ArrowButtonLeft>
                        <ProductImage src={product.images[currentImage]} alt="제품 이미지" />
                        <ArrowButtonRight onClick={handleNextImage}>
                            <FaChevronRight />
                        </ArrowButtonRight>
                        <Pagination>
                            {product.images.map((_, index) => (
                                <PageDot
                                    key={index}
                                    active={index === currentImage}
                                    onClick={() => setCurrentImage(index)}
                                />
                            ))}
                        </Pagination>
                    </ImageSection>
                    <InfoSection>
                        <ProductName>{product.product_name}</ProductName>
                        <Rating>
                            {Array.from({ length: 5 }, (_, index) => (
                                <FaStar key={index} color={index < product.star_avg ? '#65BD83' : '#ddd'} />
                            ))}
                            <RatingValue>{product.star_avg.toFixed(1)}</RatingValue>
                            <ReviewLink href="#reviews">{product.review_cnt}개 리뷰 보기</ReviewLink>
                        </Rating>
                        <PriceContainer>
                            <Discount>{product.discount_rate}%</Discount>
                            <Price>{product.price.toLocaleString()}원</Price>
                        </PriceContainer>
                        <Divider />
                        <ShippingInfo>
                            배송 정보 <a>{product.shipping_info}일 이내 출고</a>
                        </ShippingInfo>
                        <ShippingFee>
                            배송비 <a>{product.delivery_fee.toLocaleString()}원</a>
                        </ShippingFee>
                        <Divider />
                        <OptionSelectContainer>
                            <OptionSelect value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                                <option>색상 선택</option>
                                {product.colors.map((color, index) => (
                                    <OptionItemStyled key={index} value={color}>
                                        {color}
                                    </OptionItemStyled>
                                ))}
                            </OptionSelect>
                        </OptionSelectContainer>
                        <OptionSelectContainer>
                            <OptionSelect value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                                <option>사이즈 선택</option>
                                {product.sizes.map((size, index) => (
                                    <OptionItemStyled key={index} value={size}>
                                        {size}
                                    </OptionItemStyled>
                                ))}
                            </OptionSelect>
                        </OptionSelectContainer>
                        {selectedOptions.length > 0 && (
                            <SelectedOptionsContainer>
                                {selectedOptions.map((opt, index) => (
                                    <OptionItem key={opt.option}>
                                        <OptionRow>
                                            <OptionText>{opt.option}</OptionText>
                                            <RemoveButton onClick={() => handleRemoveOption(opt.option)}>
                                                <FaTimes />
                                            </RemoveButton>
                                        </OptionRow>
                                        <OptionRow>
                                            <QuantityControl>
                                                <QuantityButton onClick={() => handleQuantityChange(index, -1)}>
                                                    -
                                                </QuantityButton>
                                                <QuantityValue>{opt.quantity}</QuantityValue>
                                                <QuantityButton onClick={() => handleQuantityChange(index, 1)}>
                                                    +
                                                </QuantityButton>
                                            </QuantityControl>
                                            <OptionPrice>{(opt.price * opt.quantity).toLocaleString()}원</OptionPrice>
                                        </OptionRow>
                                    </OptionItem>
                                ))}
                            </SelectedOptionsContainer>
                        )}
                        {selectedOptions.length > 0 && (
                            <>
                                <PriceDivider></PriceDivider>
                                <TotalPrice>
                                    주문 금액 <a>{totalOrderPrice.toLocaleString()}원</a>
                                </TotalPrice>
                            </>
                        )}
                        <ButtonContainer>
                            <Button>장바구니 담기</Button>
                            <Button primary>바로 구매하기</Button>
                        </ButtonContainer>
                    </InfoSection>
                </Container>
            </Wrapper>
            <BrandWrapper>
                <BrandContainer />
            </BrandWrapper>
            <ProductContent images={product.description_images} /> {/* 상품 설명 이미지 컴포넌트 추가 */}
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    margin-bottom: 30px;
    flex-direction: row;
    justify-content: center;
`;

const BrandWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--Color-Background-light-gray, #fafafa);
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 100px 20px 150px;
    min-width: 1500px;
    max-width: 1600px;
    margin-bottom: 30px;
`;

const ImageSection = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
`;

const ArrowButtonLeft = styled.button`
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: #fff;
`;

const ArrowButtonRight = styled.button`
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    background: transparent;
    cursor: pointer;
    font-size: 24px;
    color: #fff;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
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
    width: 700px;
    padding-left: 30px;
`;

const ProductName = styled.h1`
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: var(--Text-size-10, 32px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
    letter-spacing: -0.64px;
`;

const Rating = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const RatingValue = styled.span`
    margin-left: 5px;
    font-size: 16px;
    color: #65bd83;
`;

const ReviewLink = styled.a`
    margin-left: 5px;
    font-size: 16px;
    color: var(--Color-Text-secondary, #616161);
    text-decoration: underline;
    cursor: pointer;
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const Discount = styled.div`
    color: var(--Color-Main-secondary, #ff8162);
    font-family: Montserrat;
    font-size: var(--Text-size-10, 32px);
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 44.8px */
    letter-spacing: -0.64px;
    margin-right: 10px;
`;

const Price = styled.div`
    color: var(--Color-Text-cto, #000);
    font-family: Montserrat;
    font-size: var(--Text-size-10, 32px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 44.8px */
    letter-spacing: -0.64px;
`;

const Divider = styled.hr`
    width: 588px;
    height: 1px;
    border: none;
    background: var(--Color-Gray-gray-300, #e0e0e0);
    margin: 40px 0;
`;

const ShippingInfo = styled.div`
    color: var(--Color-Text-secondary, #616161);
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
    a {
        margin-left: 23px;
        color: var(--Color-Semantic-informative, #3d96ff);
        font-family: Pretendard;
        font-size: var(--Text-size-5, 18px);
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 25.2px */
        letter-spacing: -0.36px;
    }
`;

const ShippingFee = styled.div`
    color: var(--Color-Text-secondary, #616161);
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
    a {
        margin-left: 40px;
        color: var(--Color-Semantic-informative, #3d96ff);
        font-family: Pretendard;
        font-size: var(--Text-size-5, 18px);
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 25.2px */
        letter-spacing: -0.36px;
    }
`;

const OptionSelectContainer = styled.div`
    margin-top: 15px;
`;

const OptionSelect = styled.select`
    border-radius: 3px;
    border: 1px solid var(--Color-Gray-gray-400, #bdbdbd);
    background: #fff;
    display: flex;
    width: 588px;
    padding: 12px var(--Spacing-4, 16px);
    justify-content: space-between;
    align-items: flex-start;

    & option:hover {
        background-color: #65bd83;
    }
`;

const OptionItemStyled = styled.option`
    border-radius: 3px;
    border: 1px solid var(--Color-Gray-gray-400, #bdbdbd);
    background: #fff;
    padding: 12px var(--Spacing-4, 16px);
    justify-content: space-between;
    align-items: flex-start;
    &:hover {
        background-color: #65bd83;
    }
`;

const SelectedOptionsContainer = styled.div`
    width: 588px;
    margin-top: 20px;

    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    color: var(--Color-Text-secondary, #616161);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
    gap: 10px;
`;

const OptionItem = styled.div`
    display: flex;
    background: #f9f9f9;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    gap: 10px;

    border-radius: 5px;
    width: 100%;
`;

const OptionRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const OptionText = styled.div`
    color: var(--Color-Text-secondary, #616161);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
`;

const QuantityControl = styled.div`
    display: flex;
    padding: 6px;
    align-items: center;
    gap: var(--Spacing-4, 16px);
    border-radius: 5px;
    border: 1px solid var(--Color-Gray-gray-400, #bdbdbd);
    background: #fff;
`;

const QuantityButton = styled.button`
    width: 25px;
    height: 25px;
    background: #fff;
    cursor: pointer;
    &:hover {
        background: #ddd;
    }
`;

const QuantityValue = styled.div`
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
`;

const OptionPrice = styled.div`
    font-size: 16px;
    font-weight: bold;
    align-self: flex-start;
    margin-left: auto;
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: var(--Text-size-7, 22px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 30.8px */
    letter-spacing: -0.44px;
`;

const RemoveButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #9e9e9e;
`;

const TotalPrice = styled.div`
    color: #000;
    display: flex;
    width: 588px;
    margin-top: 10px;
    justify-content: space-between;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 39.2px */
    letter-spacing: -0.56px;
    a {
    }
`;

const PriceDivider = styled.div`
    width: 588px;
    height: 3px;
    background: var(--Color-Main-primary, #65bd83);
    margin-top: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
`;

const Button = styled.button`
    width: 288px;
    padding: 15px;
    background: ${(props) => (props.primary ? '#65bd83' : '#fff')};
    color: ${(props) => (props.primary ? '#fff' : '#65bd83')};
    border: 1px solid #65bd83;
    cursor: pointer;
    font-family: Pretendard;
    font-size: var(--Text-size-5, 18px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
`;

export default ProductDetail;
