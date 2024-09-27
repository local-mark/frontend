import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import ReviewDetailModal from './ReviewDetailModal';
import {
    BottomFrame,
    DesignedIcons,
    DesignedIcons2,
    MoreButton,
    MypageFrame,
    MypageSection,
    NicknameContainer,
    RecentFrame,
    RecentorderContainer,
    TopFrame,
    Line,
    OrderContainer,
    OrderFrame,
    ProductInfo,
    DesignedIcons3,
    ProductFrame,
    Img,
    DetailFrame,
    DetailFrame2,
    DetailFrame3,
    Option,
    Price,
    ReviewButton,
    NothingOrder,
    DeleteButton,
} from './Mypage.style';

export default function Mypage() {
    const [orders, setOrders] = useState([]);
    const [modal, setModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [reviewData, setReviewData] = useState(null);
    const [reviewDetailModal, setReviewDetailModal] = useState(false);
    const nickname = localStorage.getItem('nickname');

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('recentOrders')) || [];
        setOrders(storedOrders);
    }, []);

    const handleDeleteOrder = (index) => {
        const updatedOrders = orders.filter((_, i) => i !== index);
        setOrders(updatedOrders);
        localStorage.setItem('recentOrders', JSON.stringify(updatedOrders));
    };

    const openReviewModal = (order) => {
        setSelectedOrder(order);
        setModal(true);
    };

    const handleReviewSubmit = (review) => {
        const updatedOrders = orders.map((order) =>
            order.productId === review.productId ? { ...order, reviewed: true, reviewData: review } : order
        );
        setOrders(updatedOrders);
        localStorage.setItem('recentOrders', JSON.stringify(updatedOrders));
        setReviewData(review);
        setModal(false);
    };

    const openReviewDetailModal = (order) => {
        setReviewData(order.reviewData);
        setReviewDetailModal(true);
    };

    const formatOptionText = (option) => {
        if (typeof option === 'string') {
            return option.split('-').join(' | ');
        } else if (Array.isArray(option)) {
            return option.join(' | ');
        } else if (typeof option === 'object' && option !== null) {
            return Object.entries(option)
                .map(([key, value]) => `${key}: ${value}`)
                .join(' | ');
        }
        return '';
    };

    return (
        <div>
            <MypageSection>
                <MypageFrame>
                    <TopFrame>
                        <NicknameContainer>
                            <div>{nickname}님</div>
                            <Link to="userid">
                                <DesignedIcons></DesignedIcons>
                            </Link>
                        </NicknameContainer>
                        <RecentorderContainer>
                            <RecentFrame>
                                <div>최근 주문 내역</div>
                                <MoreButton>
                                    <div>더보기</div>
                                    <DesignedIcons2></DesignedIcons2>
                                </MoreButton>
                            </RecentFrame>
                            <Line></Line>
                        </RecentorderContainer>
                    </TopFrame>
                    <BottomFrame>
                        {orders.length > 0 ? (
                            orders.map((order, i) => (
                                <OrderContainer key={i}>
                                    <OrderFrame>
                                        <DesignedIcons3></DesignedIcons3>
                                        <div>{order.date}</div>
                                        <DeleteButton>
                                            <button onClick={() => handleDeleteOrder(i)}>삭제</button>
                                        </DeleteButton>
                                    </OrderFrame>
                                    <ProductInfo>
                                        <ProductFrame>
                                            <Link to={`/gallery/product/${order.productId}`}>
                                                <Img style={{ backgroundImage: `url(${order.image})` }}></Img>
                                            </Link>
                                            <DetailFrame>
                                                <Link to={`/gallery/product/${order.productId}`}>
                                                    <div>{order.brand}</div>
                                                </Link>
                                                <DetailFrame2>
                                                    <Link to={`/gallery/product/${order.productId}`}>
                                                        <div>{order.product}</div>
                                                    </Link>
                                                    <DetailFrame3>
                                                        <Option>{formatOptionText(order.option)}</Option>
                                                        <div style={{ marginTop: '3px' }}>수량 {order.quantity}개</div>
                                                        <Price>{order.price}</Price>
                                                    </DetailFrame3>
                                                </DetailFrame2>
                                            </DetailFrame>
                                        </ProductFrame>
                                        {order.reviewed ? (
                                            <ReviewButton reviewed onClick={() => openReviewDetailModal(order)}>
                                                리뷰 확인
                                            </ReviewButton>
                                        ) : (
                                            <ReviewButton onClick={() => openReviewModal(order)}>
                                                리뷰 작성
                                            </ReviewButton>
                                        )}
                                    </ProductInfo>
                                </OrderContainer>
                            ))
                        ) : (
                            <NothingOrder>
                                <div>회원님의 주문 내역이 없습니다.</div>
                            </NothingOrder>
                        )}
                    </BottomFrame>
                </MypageFrame>
            </MypageSection>
            {modal && <Modal setModal={setModal} orderDetails={selectedOrder} onReviewSubmit={handleReviewSubmit} />}
            {reviewDetailModal && <ReviewDetailModal setModal={setReviewDetailModal} reviewData={reviewData} />}
        </div>
    );
}
