import {
    NewFrame,
    NewModalBackground,
    TopFrame,
    BottomFrame,
    Button,
    OneFrame,
    Frame,
    LawFrame,
    LawestFrame,
    ButtonLayer,
    Xbutton,
} from './NewModal.style';

export default function NewModal(props) {
    return (
        <div>
            <NewModalBackground>
                <NewFrame>
                    <Xbutton
                        onClick={() => {
                            props.setNewModal(false);
                        }}
                    >
                        X
                    </Xbutton>
                    <TopFrame>
                        <h1>상품 신규 등록</h1>
                        <h2>
                            아래 가이드에 맞추어 엑셀 파일을 제출하세요.<p></p>일일이 직접 등록할 필요 없어요!<p></p>
                            운영진이 확인 후 상품을 대신 등록해 드려요.
                        </h2>
                    </TopFrame>
                    <BottomFrame>
                        <OneFrame>
                            <div>
                                1. 상품들을 아래의 항목별로 정리한 엑셀 / 이미지 등의 첨부파일들을 .zip형식으로 압축하여
                                첨부해 주세요.
                            </div>
                            <Frame>
                                <LawFrame>
                                    <LawestFrame>상품명</LawestFrame>
                                    <div>
                                        영문/한글/특수기호 모두 사용 가능합니다. 검색 키워드에 노출되는 텍스트입니다.
                                    </div>
                                </LawFrame>
                                <LawFrame>
                                    <LawestFrame>상품 이미지</LawestFrame>
                                    <div>
                                        - 588px*588px 이내 사이즈로 최대 6장까지 첨부하여 보내주세요.<p></p>- 정방형이
                                        아닐 경우 파일이 잘릴 수 있어요! 정방형에 맞추어 보내주세요.<p></p>- 대표
                                        이미지는 파일 명에 (대표)라고 명시해주세요.
                                    </div>
                                </LawFrame>
                                <LawFrame>
                                    <LawestFrame>가격</LawestFrame>
                                    <div>옵션별로 가격이 달라질 경우, 본품 가격과 옵션 가격 모두 명시해주세요.</div>
                                </LawFrame>
                                <LawFrame>
                                    <LawestFrame>배송비</LawestFrame>
                                    <div>지역별로 배송비가 상이할 경우 이 부분도 명시해주세요.</div>
                                </LawFrame>
                                <LawFrame>
                                    <LawestFrame>옵션</LawestFrame>
                                    <div>
                                        옵션 카테고리명과 옵션 리스트명을 모두 정리해 보내주세요. <p></p>ex) 색상 :
                                        Black / Brown / Starlight ...
                                    </div>
                                </LawFrame>
                                <LawFrame>
                                    <LawestFrame>상품 설명</LawestFrame>
                                    <div>
                                        상품 설명은 텍스트/이미지를 배열해야 합니다.<p></p>정확한 의사소통을 위해 예시
                                        설명 문서를 pdf와 word (또는 hwp) 형식 모두 보내주세요.<p></p>크리에이터님이
                                        원하는 상품 설명 화면을 만들기 위함입니다.
                                    </div>
                                </LawFrame>
                            </Frame>
                        </OneFrame>
                        <div>
                            2. 보내주신 파일을 확인 후 LOCAL MARK 운영진 측에서 전화를 드립니다. <p></p>LOCAL MARK에
                            입고하실 재고 수 등을 함께 논의해 봐요!
                        </div>
                    </BottomFrame>
                    <Button>
                        <ButtonLayer>파일 첨부하기</ButtonLayer>
                    </Button>
                </NewFrame>
            </NewModalBackground>
        </div>
    );
}
