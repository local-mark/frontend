import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
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
    Line2,
    ReviewButton,
    NothingOrder,
    DeleteButton,
} from './Mypage.style';

export default function Mypage() {
    const [orders, setOrders] = useState([]);
    const [modal, setModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null); // To store the selected order for review
    const nickname = localStorage.getItem('nickname');

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('recentOrders')) || [];
        setOrders(storedOrders);
    }, []);

    // 주문 내역 삭제 함수
    const handleDeleteOrder = (index) => {
        const updatedOrders = orders.filter((_, i) => i !== index); // 선택한 주문을 제외한 나머지 목록으로 업데이트
        setOrders(updatedOrders); // 상태 업데이트
        localStorage.setItem('recentOrders', JSON.stringify(updatedOrders)); // localStorage 업데이트
    };

    const openReviewModal = (order) => {
        setSelectedOrder(order);
        setModal(true);
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
                                            <button onClick={() => handleDeleteOrder(i)}>삭제</button>{' '}
                                        </DeleteButton>{' '}
                                        {/* 삭제 버튼 추가 */}
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
                                                        <Option>{order.option.split('-').join(' | ')}</Option>
                                                        <div style={{ marginTop: '3px' }}>수량 {order.quantity}개</div>
                                                        <Price>{order.price}</Price>
                                                    </DetailFrame3>
                                                </DetailFrame2>
                                            </DetailFrame>
                                        </ProductFrame>
                                        <ReviewButton onClick={() => openReviewModal(order)}>리뷰 작성</ReviewButton>
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
            {modal && <Modal setModal={setModal} orderDetails={selectedOrder} />}
        </div>
    );
}
