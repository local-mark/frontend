import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft, FaStar, FaTimes } from 'react-icons/fa';
import BrandContainer from '../../components/Gallery/BrandContainer';
import ProductContent from '../../components/Gallery/ProductContent';
import { CartContext } from '../../store/CartContext';

import mockup1 from '../../assets/image/Gallery/mockup_1.svg';
import mockup2 from '../../assets/image/Gallery/mockup_2.svg';
import mockup3 from '../../assets/image/Gallery/mockup_3.svg';
import mockup4 from '../../assets/image/Gallery/mockup_4.svg';

const mockProducts = [
    {
        isSuccess: true,
        code: 2000,
        message: 'SUCCESS!',
        result: {
            product: {
                product_id: 1,
                brand_id: 1,
                product_name: '상의1',
                brand_name: '푸른',
                price: 12000,
                discount_rate: 30,
                delivery_fee: 3000,
                description: '따스한 ~~ ',
                star_avg: 3.5,
                review_cnt: 2,
            },
            options: [
                {
                    opt_comb_id: 1,
                    option_type: {
                        색상: '초록',
                        사이즈: 'S',
                    },
                    stock: 10,
                },
                {
                    opt_comb_id: 2,
                    option_type: {
                        색상: '초록',
                        사이즈: 'M',
                    },
                    stock: 5,
                },
                {
                    opt_comb_id: 3,
                    option_type: {
                        색상: '노랑',
                        사이즈: 'S',
                    },
                    stock: 3,
                },
                {
                    opt_comb_id: 4,
                    option_type: {
                        색상: '노랑',
                        사이즈: 'M',
                    },
                    stock: 15,
                },
            ],
            images: [mockup1, mockup2, mockup3],
        },
    },
    {
        isSuccess: true,
        code: 2000,
        message: 'SUCCESS!',
        result: {
            product: {
                product_id: 2,
                brand_id: 2,
                product_name: '상의2',
                brand_name: '하얀',
                price: 8000,
                discount_rate: 20,
                delivery_fee: 2500,
                description: '편안한 ~~ ',
                star_avg: 4.0,
                review_cnt: 15,
            },
            options: [
                {
                    opt_comb_id: 5,
                    option_type: {
                        색상: '파랑',
                        사이즈: 'S',
                    },
                    stock: 20,
                },
                {
                    opt_comb_id: 6,
                    option_type: {
                        색상: '파랑',
                        사이즈: 'M',
                    },
                    stock: 10,
                },
                {
                    opt_comb_id: 7,
                    option_type: {
                        색상: '빨강',
                        사이즈: 'S',
                    },
                    stock: 8,
                },
                {
                    opt_comb_id: 8,
                    option_type: {
                        색상: '빨강',
                        사이즈: 'M',
                    },
                    stock: 12,
                },
            ],
            images: [mockup2, mockup3, mockup4],
        },
    },
    {
        isSuccess: true,
        code: 2000,
        message: 'SUCCESS!',
        result: {
            product: {
                product_id: 3,
                brand_id: 1,
                product_name: '상의3',
                brand_name: '푸른',
                price: 15000,
                discount_rate: 25,
                delivery_fee: 3000,
                description: '포근한 ~~ ',
                star_avg: 4.3,
                review_cnt: 5,
            },
            options: [
                {
                    opt_comb_id: 9,
                    option_type: {
                        색상: '초록',
                        사이즈: 'L',
                    },
                    stock: 7,
                },
                {
                    opt_comb_id: 10,
                    option_type: {
                        색상: '파랑',
                        사이즈: 'L',
                    },
                    stock: 5,
                },
            ],
            images: [mockup1, mockup4, mockup2],
        },
    },
    {
        isSuccess: true,
        code: 2000,
        message: 'SUCCESS!',
        result: {
            product: {
                product_id: 4,
                brand_id: 3,
                product_name: '상의4',
                brand_name: '편안',
                price: 60000,
                discount_rate: 10,
                delivery_fee: 5000,
                description: '폭신한 ~~ ',
                star_avg: 4.7,
                review_cnt: 25,
            },
            options: [
                {
                    opt_comb_id: 11,
                    option_type: {
                        색상: '회색',
                        사이즈: 'Queen',
                    },
                    stock: 3,
                },
                {
                    opt_comb_id: 12,
                    option_type: {
                        색상: '회색',
                        사이즈: 'King',
                    },
                    stock: 2,
                },
            ],
            images: [mockup3, mockup1, mockup4],
        },
    },
    {
        isSuccess: true,
        code: 2000,
        message: 'SUCCESS!',
        result: {
            product: {
                product_id: 5,
                brand_id: 2,
                product_name: '상의5',
                brand_name: '하얀',
                price: 25000,
                discount_rate: 15,
                delivery_fee: 3500,
                description: '아늑한 ~~ ',
                star_avg: 3.9,
                review_cnt: 30,
            },
            options: [
                {
                    opt_comb_id: 13,
                    option_type: {
                        색상: '베이지',
                        사이즈: 'S',
                    },
                    stock: 25,
                },
                {
                    opt_comb_id: 14,
                    option_type: {
                        색상: '베이지',
                        사이즈: 'L',
                    },
                    stock: 15,
                },
            ],
            images: [mockup4, mockup2, mockup1],
        },
    },
    {
        isSuccess: true,
        code: 2000,
        message: 'SUCCESS!',
        result: {
            product: {
                product_id: 6,
                brand_id: 3,
                product_name: '상의6',
                brand_name: '편안',
                price: 40000,
                discount_rate: 20,
                delivery_fee: 4000,
                description: '따뜻한 ~~ ',
                star_avg: 4.6,
                review_cnt: 10,
            },
            options: [
                {
                    opt_comb_id: 15,
                    option_type: {
                        색상: '회색',
                        사이즈: 'Medium',
                    },
                    stock: 6,
                },
                {
                    opt_comb_id: 16,
                    option_type: {
                        색상: '회색',
                        사이즈: 'Large',
                    },
                    stock: 4,
                },
            ],
            images: [mockup3, mockup4, mockup2],
        },
    },
    {
        isSuccess: true,
        code: 2000,
        message: 'SUCCESS!',
        result: {
            product: {
                product_id: 7,
                brand_id: 1,
                product_name: '상의7',
                brand_name: '푸른',
                price: 100000,
                discount_rate: 5,
                delivery_fee: 7000,
                description: '편안한 ~~ ',
                star_avg: 4.8,
                review_cnt: 50,
            },
            options: [
                {
                    opt_comb_id: 17,
                    option_type: {
                        색상: '화이트',
                        사이즈: 'Single',
                    },
                    stock: 4,
                },
                {
                    opt_comb_id: 18,
                    option_type: {
                        색상: '화이트',
                        사이즈: 'Double',
                    },
                    stock: 6,
                },
            ],
            images: [mockup2, mockup1, mockup4],
        },
    },
    {
        isSuccess: true,
        code: 2000,
        message: 'SUCCESS!',
        result: {
            product: {
                product_id: 8,
                brand_id: 2,
                product_name: '상의8',
                brand_name: '하얀',
                price: 50000,
                discount_rate: 25,
                delivery_fee: 5000,
                description: '실용적인 ~~ ',
                star_avg: 4.2,
                review_cnt: 18,
            },
            options: [
                {
                    opt_comb_id: 19,
                    option_type: {
                        색상: '갈색',
                        사이즈: '120cm',
                    },
                    stock: 10,
                },
                {
                    opt_comb_id: 20,
                    option_type: {
                        색상: '갈색',
                        사이즈: '150cm',
                    },
                    stock: 5,
                },
            ],
            images: [mockup1, mockup3, mockup2],
        },
    },
];

const ProductDetail = () => {
    const { productId } = useParams();
    const productData = mockProducts.find((p) => p.result.product.product_id === Number(productId));

    if (!productData) {
        return <div>Product not found</div>;
    }

    const product = productData.result.product;
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [currentImage, setCurrentImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev + 1) % productData.result.images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImage((prev) => (prev - 1 + productData.result.images.length) % productData.result.images.length);
    };

    useEffect(() => {
        if (selectedColor && selectedSize) {
            const option = `${selectedColor} - ${selectedSize}`;
            if (!selectedOptions.some((opt) => opt.option === option)) {
                setSelectedOptions([
                    ...selectedOptions,
                    { option, quantity, price: product.price, delivery_fee: product.delivery_fee },
                ]);
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

    const handleAddToCart = () => {
        if (selectedOptions.length === 0) {
            alert('선택한 상품이 없습니다.');
            return;
        }

        selectedOptions.forEach((opt) => {
            const selectedItem = {
                id: product.product_id,
                brand_id: product.brand_id,
                name: product.product_name,
                image: productData.result.images[0],
                price: opt.price,
                option: opt.option,
                quantity: opt.quantity,
                delivery_fee: opt.delivery_fee,
                brand_name: product.brand_name,
            };
            addToCart(selectedItem);
        });

        alert('장바구니에 추가되었습니다.');
    };

    const handleBuyNow = () => {
        if (selectedOptions.length === 0) {
            alert('선택한 상품이 없습니다.');
            return;
        }

        selectedOptions.forEach((opt) => {
            const selectedItem = {
                id: product.product_id,
                name: product.product_name,
                brand_id: product.brand_id,
                image: productData.result.images[0],
                price: opt.price,
                option: opt.option,
                quantity: opt.quantity,
                delivery_fee: opt.delivery_fee,
                brand_name: product.brand_name,
            };
            addToCart(selectedItem);
        });

        navigate('/cart');
    };

    return (
        <>
            <Wrapper>
                <Container>
                    <ImageSection>
                        <ArrowButtonLeft onClick={handlePreviousImage}>
                            <FaChevronLeft />
                        </ArrowButtonLeft>
                        <ProductImage src={productData.result.images[currentImage]} alt="제품 이미지" />
                        <ArrowButtonRight onClick={handleNextImage}>
                            <FaChevronRight />
                        </ArrowButtonRight>
                        <Pagination>
                            {productData.result.images.map((_, index) => (
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
                            배송 정보 <a>{product.shipping_info || '3'}일 이내 출고</a>
                        </ShippingInfo>
                        <ShippingFee>
                            배송비 <a>{product.delivery_fee.toLocaleString()}원</a>
                        </ShippingFee>
                        <Divider />
                        <OptionSelectContainer>
                            <OptionSelect value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                                <option>색상 선택</option>
                                {[...new Set(productData.result.options.map((opt) => opt.option_type.색상))].map(
                                    (color, index) => (
                                        <OptionItemStyled key={index} value={color}>
                                            {color}
                                        </OptionItemStyled>
                                    )
                                )}
                            </OptionSelect>
                        </OptionSelectContainer>
                        <OptionSelectContainer>
                            <OptionSelect value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                                <option>사이즈 선택</option>
                                {[...new Set(productData.result.options.map((opt) => opt.option_type.사이즈))].map(
                                    (size, index) => (
                                        <OptionItemStyled key={index} value={size}>
                                            {size}
                                        </OptionItemStyled>
                                    )
                                )}
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
                            <Button onClick={handleAddToCart}>장바구니 담기</Button>
                            <Button primary onClick={handleBuyNow}>
                                바로 구매하기
                            </Button>
                        </ButtonContainer>
                    </InfoSection>
                </Container>
            </Wrapper>
            <BrandWrapper>
                <BrandContainer />
            </BrandWrapper>
            <ProductContent images={productData.result.images} />
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
