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
} from './Mypage.style';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Mypage() {
    const [item, setItem] = useState([0, 1, 2, 3]);

    return (
        <div>
            <MypageSection>
                <MypageFrame>
                    <TopFrame>
                        <NicknameContainer>
                            <div>닉네임님</div>
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
                        {item.map((a, i) => {
                            return (
                                <OrderContainer>
                                    <OrderFrame>
                                        <DesignedIcons3></DesignedIcons3>
                                        <div>2024. XX. XX.</div>
                                    </OrderFrame>
                                    <ProductInfo>
                                        <ProductFrame>
                                            <Img></Img>
                                            <DetailFrame>
                                                <div>브랜드명</div>
                                                <DetailFrame2>
                                                    <div>제품명</div>
                                                    <DetailFrame3>
                                                        <Option>
                                                            <div>옵션 1</div>
                                                            <Line2></Line2>
                                                            <div>옵션 2</div>
                                                        </Option>
                                                        <div>수량 1개</div>
                                                        <Price>10,000 원</Price>
                                                    </DetailFrame3>
                                                </DetailFrame2>
                                            </DetailFrame>
                                        </ProductFrame>
                                        <ReviewButton>리뷰 작성</ReviewButton>
                                    </ProductInfo>
                                </OrderContainer>
                            );
                        })}
                    </BottomFrame>
                </MypageFrame>
            </MypageSection>
        </div>
    );
}
