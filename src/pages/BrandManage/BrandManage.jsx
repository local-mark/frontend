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
} from './BrandManage.style';

export default function BrandManage() {
    const [order, setOrder] = useState([0, 1, 2, 3, 4, 5]);
    return (
        <div>
            <BrandManageSection>
                <BrandManageFrame>
                    <TopFrame>
                        <TitleFrame>
                            <div>주문수집</div>
                            <Sort>
                                <div>주문일순</div>
                                <DesignedIcons></DesignedIcons>
                            </Sort>
                        </TitleFrame>
                        <ContentFrame>
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
                    </TopFrame>
                    <BottomFrame>
                        <TextFrame>
                            <h1>상품 등록 및 수정</h1>
                            <h2>
                                이미지 수정, 상품명 수정, 상품 리뉴얼 정보 변경 등이 필요한 경우 가이드 확인 후 요청해
                                주세요.
                            </h2>
                        </TextFrame>
                        <ButtonFrame>
                            <Button>상품 수정 요청</Button>
                            <Button style={{ backgroundColor: '#65BD83' }}>상품 신규 등록</Button>
                        </ButtonFrame>
                    </BottomFrame>
                </BrandManageFrame>
            </BrandManageSection>
        </div>
    );
}
