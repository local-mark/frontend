import React, { useState } from 'react';
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
    UploadedImage,
    DeleteButton,
} from './Modal.style';
import { postData } from '../../services/api';

export default function Modal({ setModal, orderDetails }) {
    const [starRating, setStarRating] = useState(0);
    const [images, setImages] = useState([]);
    const [reviewText, setReviewText] = useState('');

    const handleStarClick = (index) => {
        setStarRating(index + 1);
    };

    const handleImageUpload = (event) => {
        const files = event.target.files;
        if (files && images.length < 2) {
            const newImages = Array.from(files).slice(0, 2 - images.length);
            setImages((prevImages) => [...prevImages, ...newImages]);
        }
    };

    const handleSubmit = async () => {
        if (!orderDetails) {
            console.error('orderDetails가 없습니다.');
            return;
        }

        const reviewData = new FormData();
        reviewData.append('product_id', orderDetails.productId);
        reviewData.append('oi_id', parseInt(orderDetails.orderId, 10)); // oi_id를 정수로 변환
        reviewData.append('content', reviewText);
        reviewData.append('rating', starRating);

        images.forEach((image) => {
            reviewData.append('image', image);
        });

        try {
            const response = await postData('/reviews', reviewData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // FormData 전송 시 올바른 헤더 설정
                },
            });
            console.log('리뷰 제출 성공:', response);
            setModal(false); // Close the modal after submission
        } catch (error) {
            console.log(orderDetails.productId);
            console.log(orderDetails.orderId);
            console.error('리뷰 제출 실패:', error.response || error);
        }
    };

    return (
        <div>
            <ModalBackground>
                <Review>
                    <SatisfyFrame>
                        <div>상품은 만족하셨나요?</div>
                        <Rating>
                            {[...Array(5)].map((_, i) => (
                                <DesignedIcon key={i} filled={i < starRating} onClick={() => handleStarClick(i)} />
                            ))}
                        </Rating>
                    </SatisfyFrame>
                    <ImgFrame>
                        {images.length === 0 && (
                            <ImgWrapper>
                                <ImgText>
                                    <div className="h1">사진을 끌어다 놓으세요</div>
                                    <div className="h2">2장까지 올릴 수 있어요.</div>
                                </ImgText>
                                <ReviewButton as="label">
                                    PC에서 불러오기
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        style={{ display: 'none' }}
                                        onChange={handleImageUpload}
                                    />
                                </ReviewButton>
                            </ImgWrapper>
                        )}
                        {images.length > 0 && (
                            <div style={{ display: 'flex', gap: '10px' }}>
                                {images.map((src, index) => (
                                    <UploadedImage key={index}>
                                        <img src={URL.createObjectURL(src)} alt={`Uploaded ${index + 1}`} />
                                        <DeleteButton onClick={() => handleImageDelete(index)}>x </DeleteButton>
                                    </UploadedImage>
                                ))}
                            </div>
                        )}
                    </ImgFrame>
                    <MainTextFrame>
                        <MainText>
                            <MaintextInput
                                placeholder="상품 리뷰를 작성해주세요."
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                            />
                            <LetterNum>{reviewText.length} / 500</LetterNum>
                        </MainText>
                    </MainTextFrame>
                    <Buttons>
                        <Button onClick={() => setModal(false)}>
                            <ButtonLayer>취소</ButtonLayer>
                        </Button>
                        <Button style={{ backgroundColor: '#65bd83' }} onClick={handleSubmit}>
                            <ButtonLayer style={{ color: '#FFFFFF' }}>등록</ButtonLayer>
                        </Button>
                    </Buttons>
                </Review>
            </ModalBackground>
        </div>
    );
}
