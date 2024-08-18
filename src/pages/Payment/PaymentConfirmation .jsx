import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/icon/Home/localmark_logo.svg';
const PaymentConfirmation = () => {
    const navigate = useNavigate();

    const handleViewOrders = () => {
        navigate('/mypage');
    };

    return (
        <ConfirmationWrapper>
            <Logo>
                <img src={logo} alt="LocalMark Logo" />
            </Logo>

            <Message>주문이 완료되었습니다!</Message>
            <ViewOrdersButton onClick={handleViewOrders}>주문내역 확인하기</ViewOrdersButton>
        </ConfirmationWrapper>
    );
};

const ConfirmationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh; /* Adjust the height to center the content vertically */
    text-align: center;
`;
const Logo = styled.div`
    width: auto;
    height: 100px;
    margin-bottom: 30px;
    cursor: pointer;
`;

const Message = styled.h2`
    color: var(--Color-Text-primary, #222);
    text-align: center;
    font-family: Pretendard;
    font-size: var(--Text-size-8, 28px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 33.6px */
    letter-spacing: -0.48px;
    margin-bottom: 80px;
`;

const ViewOrdersButton = styled.button`
    padding: 10px 20px;
    width: 300px;
    font-size: 18px;
    background-color: #65bd83;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    color: #fff;
    font-family: Pretendard;
    font-size: var(--Text-size-5, 20px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
    &:hover {
        background-color: #57a673;
    }
`;

export default PaymentConfirmation;
