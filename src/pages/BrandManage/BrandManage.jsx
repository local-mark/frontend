import { useState } from 'react';
import {
    BrandManageSection,
    BottomFrame,
    BrandManageFrame,
    ContentFrame,
    TitleFrame,
    TopFrame,
    Sort,
    SubContentFrame,
    SubTitleFrame,
    Content,
    TextFrame,
    ButtonFrame,
    Button,
    DesignedIcons,
    SortList,
    SortElement,
    SubtitleFrame,
    Subtitle,
    DesignedIcons2,
    NotFrame,
    NotButton,
    NotButtonLayer,
} from './BrandManage.style';
import NewModal from './NewModal';
import { useNavigate } from 'react-router-dom';

export default function BrandManage() {
    const [order, setOrder] = useState([0, 1, 2, 3, 4, 5]);
    const [newModal, setNewModal] = useState(false);
    const nickname = localStorage.getItem('nickname');
    const is_brand_registered = localStorage.getItem('is_brand_registered');
    console.log(is_brand_registered);
    const navigate = useNavigate();
    return (
        <div>
            <BrandManageSection>
                <BrandManageFrame style={{ gap: is_brand_registered == 1 ? '20px' : '140px' }}>
                    <TopFrame>
                        <TitleFrame>
                            <div>{nickname}님</div>
                            <DesignedIcons2
                                onClick={() => {
                                    navigate('/mypage/userid');
                                }}
                            ></DesignedIcons2>
                        </TitleFrame>
                        {is_brand_registered == 1 ? (
                            <SubtitleFrame>
                                <Subtitle>주문 수집 내역</Subtitle>
                                <hr className="hr"></hr>
                            </SubtitleFrame>
                        ) : (
                            ''
                        )}
                    </TopFrame>
                    {is_brand_registered == 1 ? (
                        <BottomFrame>
                            <ContentFrame>
                                <Sort>
                                    <div>주문일순</div>
                                    <DesignedIcons></DesignedIcons>
                                </Sort>
                                <table>
                                    <tr>
                                        <th>주문일</th>
                                        <th>주문번호</th>
                                        <th>제품명</th>
                                        <th>옵션명</th>
                                        <th>주문수량</th>
                                        <th>총 주문금액</th>
                                        <th>수취인</th>
                                        <th>수취인 연락처</th>
                                        <th>우편번호</th>
                                        <th>주소</th>
                                        <th>상세주소</th>
                                    </tr>
                                    {order.map((a, i) => {
                                        return (
                                            <tr>
                                                <td>2024-05-17</td>
                                                <td>1295939105</td>
                                                <td>제품명</td>
                                                <td>옵션명</td>
                                                <td>1개</td>
                                                <td>1,142,000원</td>
                                                <td>윤시우</td>
                                                <td>010-1234-5678</td>
                                                <td>12345</td>
                                                <td>경기도 평택시 서정로 67</td>
                                                <td>1111동 222호</td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </ContentFrame>
                            <TextFrame>
                                <h1>상품 등록 및 수정</h1>
                                <h2>
                                    이미지 수정, 상품명 수정, 상품 리뉴얼 정보 변경 등이 필요한 경우 가이드 확인 후
                                    요청해 주세요.
                                </h2>
                            </TextFrame>
                            <ButtonFrame>
                                <Button>상품 수정 요청</Button>
                                <Button onClick={() => setNewModal(true)} style={{ backgroundColor: '#65BD83' }}>
                                    상품 신규 등록
                                </Button>
                            </ButtonFrame>
                        </BottomFrame>
                    ) : (
                        ''
                    )}
                    {is_brand_registered == 1 ? (
                        ''
                    ) : (
                        <NotFrame>
                            <div>
                                아직 브랜드를 등록하지 않았어요!<p></p>브랜드 등록 후 이용할 수 있어요.
                            </div>
                            <NotButton>
                                <NotButtonLayer onClick={() => navigate('/brand')}>내 브랜드 등록하기</NotButtonLayer>
                            </NotButton>
                        </NotFrame>
                    )}
                </BrandManageFrame>
            </BrandManageSection>
            {newModal ? <NewModal setNewModal={setNewModal}></NewModal> : null}
        </div>
    );
}
