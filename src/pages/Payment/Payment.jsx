import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../store/CartContext';
import DaumPost from '../../components/Payment/DaumPost';
import pinicon from '../../assets/icon/Payment/pin.svg';
export default function Payment() {
    const { cartItems, calculateTotalOrderPrice } = useContext(CartContext);

    const [popup, setPopup] = useState(false);
    const [addressForm, setAddressForm] = useState({
        address: '',
        zonecode: '',
    });

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('kakaopay');

    // IMP (아임포트) 결제 스크립트를 동적으로 로드
    useEffect(() => {
        const jquery = document.createElement('script');
        jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
        const iamport = document.createElement('script');
        iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);

        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        };
    }, []);

    const handleComplete = () => {
        setPopup(!popup);
    };

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

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

    const handlePayment = () => {
        if (window.IMP) {
            const { IMP } = window;
            IMP.init('imp48720306'); // 가맹점 식별코드

            const data = {
                pg: 'kakaopay', // PG사
                pay_method: selectedPaymentMethod, // 결제 수단
                merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
                name: '주문명: 결제테스트',
                amount: calculateTotalOrderPrice(), // 결제 금액
                buyer_email: 'buyer@example.com', // 구매자 이메일
                buyer_name: '구매자이름', // 구매자 이름
                buyer_tel: '010-1234-5678', // 구매자 전화번호
                buyer_addr: addressForm.address, // 구매자 주소
                buyer_postcode: addressForm.zonecode, // 구매자 우편번호
            };

            IMP.request_pay(data, (response) => {
                const { success, error_msg } = response;
                if (success) {
                    alert('결제가 성공적으로 완료되었습니다.');
                } else {
                    alert(`결제 실패: ${error_msg}`);
                }
            });
        } else {
            console.error('IMP 객체를 초기화할 수 없습니다.');
            alert('결제 모듈이 로드되지 않았습니다. 페이지를 새로고침 해주세요.');
        }
    };

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

                    <SectionTitle>결제 정보</SectionTitle>
                    <PaymentMethodContainer>
                        <PaymentMethod
                            selected={selectedPaymentMethod === 'kakaopay'}
                            onClick={() => handlePaymentMethodChange('kakaopay')}
                        >
                            카카오페이
                        </PaymentMethod>
                        <PaymentMethod
                            selected={selectedPaymentMethod === 'card'}
                            onClick={() => handlePaymentMethodChange('card')}
                        >
                            카드
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
                    <IconWrapper>
                        <Icon src={pinicon} alt="pin icon" />
                    </IconWrapper>
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
                            <Value>{calculateTotalOrderPrice().toLocaleString()}원</Value>
                        </PriceDetail>
                        <PriceDetail>
                            <Label>배송비</Label>
                            <Value>{calculateTotalDeliveryFee().toLocaleString()}원</Value>
                        </PriceDetail>
                        <TotalPriceDetail>
                            <Label>결제 금액</Label>
                            <TotalValue>{calculateTotalOrderPrice().toLocaleString()}원</TotalValue>
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
                    <PayButton onClick={handlePayment}>결제하기</PayButton>
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
    border-radius: 10px;
    border: 2px solid var(--Color-Main-primary, #65bd83);
    padding: 20px;
    border-radius: 10px;
    background-color: #f9f9f9;
    position: relative; /* Position relative to place the icon */
    margin-top: 20px;
`;

const IconWrapper = styled.div`
    position: absolute;
    top: -10px; /* Adjust this value to control the vertical position */
    left: 50%;
    transform: translateX(-50%);
    padding: 0 10px; /* Optional: Add padding if you want some space around the icon */
`;

const Icon = styled.img`
    height: 26px;
    width: 26px;
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
