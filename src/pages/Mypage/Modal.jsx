import { useState } from 'react';
import {
    Button,
    ButtonLayer,
    Buttons,
    DesignedIcon,
    ImgFrame,
    ImgText,
    ImgWrapper,
    LetterNum,
    MainText,
    MainTextFrame,
    MaintextInput,
    ModalBackground,
    Rating,
    Review,
    ReviewButton,
    SatisfyFrame,
} from './Modal.style';

export default function Modal(props) {
    const [star, setStar] = useState([0, 1, 2, 3, 4]);

    return (
        <div>
            <ModalBackground>
                <Review>
                    <SatisfyFrame>
                        <div>상품은 만족하셨나요?</div>
                        <Rating>
                            {star.map((a, i) => {
                                return <DesignedIcon></DesignedIcon>;
                            })}
                        </Rating>
                    </SatisfyFrame>
                    <ImgFrame>
                        <ImgWrapper>
                            <ImgText>
                                <div className="h1">사진을 끌어다 놓으세요</div>
                                <div className="h2">2장까지 올릴 수 있어요.</div>
                            </ImgText>
                            <ReviewButton>PC에서 불러오기</ReviewButton>
                        </ImgWrapper>
                    </ImgFrame>
                    <MainTextFrame>
                        <MainText>
                            <MaintextInput placeholder="상품 리뷰를 작성해주세요."></MaintextInput>
                            <LetterNum>0 / 500</LetterNum>
                        </MainText>
                    </MainTextFrame>
                    <Buttons>
                        <Button onClick={() => props.setModal(false)}>
                            <ButtonLayer>취소</ButtonLayer>
                        </Button>
                        <Button style={{ backgroundColor: '#65bd83' }}>
                            <ButtonLayer style={{ color: '#FFFFFF' }}>등록</ButtonLayer>
                        </Button>
                    </Buttons>
                </Review>
            </ModalBackground>
        </div>
    );
}
