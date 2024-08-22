import React from 'react';
import {
    ModalBackground,
    Review,
    SatisfyFrame,
    ImgFrame,
    UploadedImage,
    Rating,
    DesignedIcon,
    MainTextFrame,
    MainText,
    Buttons,
    Button,
    ButtonLayer,
} from './Modal.style';

export default function ReviewDetailModal({ setModal, reviewData }) {
    return (
        <div>
            <ModalBackground>
                <Review>
                    <SatisfyFrame>
                        <div>리뷰 상세</div>
                        <Rating>
                            {[...Array(5)].map((_, i) => (
                                <DesignedIcon key={i} filled={i < reviewData.rating} />
                            ))}
                        </Rating>
                    </SatisfyFrame>
                    <ImgFrame>
                        {reviewData.images && reviewData.images.length > 0 ? (
                            reviewData.images.map((src, index) => (
                                <UploadedImage key={index}>
                                    <img src={src} alt={`Uploaded ${index + 1}`} />
                                </UploadedImage>
                            ))
                        ) : (
                            <h1>등록된 이미지가 없습니다.</h1>
                        )}
                    </ImgFrame>
                    <MainTextFrame>
                        <MainText>
                            <p>{reviewData.content}</p>
                        </MainText>
                    </MainTextFrame>
                    <Buttons>
                        <Button onClick={() => setModal(false)}>
                            <ButtonLayer style={{ color: '#65bd83', backgroundColor: '#FFF' }}>닫기</ButtonLayer>
                        </Button>
                    </Buttons>
                </Review>
            </ModalBackground>
        </div>
    );
}
