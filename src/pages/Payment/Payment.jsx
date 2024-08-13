import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../store/CartContext';
import DaumPost from '../../components/Payment/DaumPost'; // Import the DaumPost component

export default function Payment() {
    const { cartItems, calculateTotalOrderPrice } = useContext(CartContext);

    const [popup, setPopup] = useState(false);
    const [addressForm, setAddressForm] = useState({
        address: '',
        zonecode: '',
    });

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('카드'); // Default to '카드'

    const handleComplete = () => {
        setPopup(!popup);
    };

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    const totalProductPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString();
    // Calculate total delivery fee
    const calculateTotalDeliveryFee = () => {
        const brandShipping = new Set();
        return cartItems.reduce((sum, item) => {
            if (!brandShipping.has(item.brand_id)) {
                brandShipping.add(item.brand_id);
                return sum + (item.delivery_fee || 0);
            }
            return sum;
        }, 0);
    };

    const totalDeliveryFee = calculateTotalDeliveryFee().toLocaleString();

    // Calculate total order amount
    const totalAmount = calculateTotalOrderPrice().toLocaleString();

    return (
        <PaymentWrapper>
            <PaymentContainer>
                <ShippingInfo>
                    <SectionTitle>배송 정보</SectionTitle>
                    <InputField>
                        <Label>수령인</Label>
                        <Input type="text" placeholder="수령인 입력" />
                    </InputField>
                    <InputField>
                        <Label>배송지명</Label>
                        <Input type="text" placeholder="배송지명 입력" />
                    </InputField>
                    <InputField>
                        <Label>배송지</Label>
                        <InputGroup>
                            <Input value={addressForm.zonecode} type="text" placeholder="우편번호" readOnly />
                            <Button onClick={handleComplete}>우편번호 검색</Button>
                        </InputGroup>
                        <Input
                            value={addressForm.address}
                            type="text"
                            placeholder="기본주소"
                            readOnly
                            marginBottom={12}
                        />
                        <Input type="text" placeholder="상세주소 입력" />
                    </InputField>
                    <InputField>
                        <Label>배송 시 연락처</Label>
                        <PhoneInput>
                            <Input type="text" placeholder="" />
                            <Input type="text" placeholder="" />
                            <Input type="text" placeholder="" />
                        </PhoneInput>
                    </InputField>

                    {/* Payment Method Section */}
                    <SectionTitle>결제 정보</SectionTitle>
                    <PaymentMethodContainer>
                        <PaymentMethod
                            selected={selectedPaymentMethod === '카드'}
                            onClick={() => handlePaymentMethodChange('카드')}
                        >
                            카드
                        </PaymentMethod>
                        <PaymentMethod
                            selected={selectedPaymentMethod === '휴대폰 결제'}
                            onClick={() => handlePaymentMethodChange('휴대폰 결제')}
                        >
                            휴대폰 결제
                        </PaymentMethod>
                        <PaymentMethod
                            selected={selectedPaymentMethod === '가상계좌'}
                            onClick={() => handlePaymentMethodChange('가상계좌')}
                        >
                            가상계좌
                        </PaymentMethod>
                        <PaymentMethod
                            selected={selectedPaymentMethod === '무통장입금'}
                            onClick={() => handlePaymentMethodChange('무통장입금')}
                        >
                            무통장입금
                        </PaymentMethod>
                    </PaymentMethodContainer>
                </ShippingInfo>

                <OrderSummary>
                    {cartItems.map((item, index) => (
                        <ProductInfo key={index}>
                            <ProductImage src={item.image || 'default_image_path'} alt="상품 이미지" />
                            <ProductDetails>
                                <ProductName>{item.name || '상품명'}</ProductName>
                                <ProductOptions>
                                    {item.option.split('-').map((opt, idx) => (
                                        <Option key={idx}>{`옵션${idx + 1} - ${opt.trim()}`}</Option>
                                    ))}
                                    <Option>{`수량 - ${item.quantity}`}</Option>
                                </ProductOptions>
                            </ProductDetails>
                        </ProductInfo>
                    ))}
                    <OrderPrice>
                        <PriceDetail>
                            <Label>총 상품 금액</Label>
                            <Value>{totalProductPrice}원</Value>
                        </PriceDetail>
                        <PriceDetail>
                            <Label>배송비</Label>
                            <Value>{totalDeliveryFee}원</Value>
                        </PriceDetail>
                        <TotalPriceDetail>
                            <Label>결제 금액</Label>
                            <TotalValue>{totalAmount}원</TotalValue>
                        </TotalPriceDetail>
                    </OrderPrice>
                    <Agreement>
                        <AgreementItem>
                            <input type="checkbox" />
                            <span>주문 내역을 확인하였으며, 아래 내용에 모두 동의합니다.</span>
                        </AgreementItem>
                        <AgreementItem>
                            <input type="checkbox" />
                            <span>개인정보 수집/이용 (전문 보기)</span>
                        </AgreementItem>
                        <AgreementItem>
                            <input type="checkbox" />
                            <span>개인정보 제3자 제공 동의 (전문 보기)</span>
                        </AgreementItem>
                        <AgreementItem>
                            <input type="checkbox" />
                            <span>결제대행 서비스 이용약관 (전문 보기)</span>
                        </AgreementItem>
                    </Agreement>
                    <PayButton>결제하기</PayButton>
                </OrderSummary>
            </PaymentContainer>
            {popup && <DaumPost address={addressForm} setAddress={setAddressForm} handleComplete={handleComplete} />}
        </PaymentWrapper>
    );
}

const PaymentWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
    min-width: 1200px;
    background-color: #fff;
`;

const PaymentContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ShippingInfo = styled.div`
    width: 45%;
`;

const SectionTitle = styled.h2`
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: var(--Text-size-8, 24px);
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 33.6px */
    letter-spacing: -0.48px;
    margin-bottom: 20px;
`;

const InputField = styled.div`
    margin-bottom: 20px;
`;

const Label = styled.label`
    color: var(--Color-Text-primary, #222);

    /* B1_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-5, 18px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid var(--Color-Gray-gray-400, #bdbdbd);
    margin-bottom: 5px;
`;

const InputGroup = styled.div`
    display: flex;
    margin-bottom: 12px;
`;

const Button = styled.button`
    color: #fff;
    font-size: var(--Text-size-4, 12px);
    font-style: normal;
    width: 120px;
    margin-top: 5px;
    height: 30px;
    margin-left: 20px;
    font-weight: 500;
    display: flex;
    padding: var(--Spacing-3, 8px) 10px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: var(--Color-Main-primary, #65bd83);
`;

const PhoneInput = styled.div`
    display: flex;

    input {
        width: 30%;
        margin-right: 10px;
    }
`;

const PaymentMethodContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const PaymentMethod = styled.button`
    flex: 1;
    margin-right: 10px;
    padding: 10px;
    border-radius: 10px;
    width: 114px;
    border: 1px solid var(--Color-Gray-gray-400, #bdbdbd);
    background-color: ${(props) => (props.selected ? '#65bd83' : '#fff')};
    color: ${(props) => (props.selected ? '#fff' : '#222')};
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        background-color: #57a673;
        color: #fff;
    }
`;

const OrderSummary = styled.div`
    width: 45%;
    border: 1px solid #65bd83;
    padding: 20px;
    border-radius: 10px;
    background-color: #f9f9f9;
`;

const ProductInfo = styled.div`
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
`;

const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border: 1px solid #ddd;
`;

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductName = styled.div`
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: var(--Text-size-6, 18px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: -0.4px;
`;

const ProductOptions = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #616161;
`;

const Option = styled.div`
    margin-bottom: 5px;
`;

const OrderPrice = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const PriceDetail = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Value = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #222;
`;

const TotalPriceDetail = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #ddd;
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 33.6px */
    letter-spacing: -0.48px;
`;

const TotalValue = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #222;
`;

const Agreement = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const AgreementItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 10px;

    input {
        margin-right: 10px;
    }

    span {
        color: #616161;
    }
`;

const PayButton = styled.button`
    width: 100%;
    padding: 10px 0;
    background-color: #65bd83;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: 3px;

    &:hover {
        background-color: #57a673;
    }
`;
