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
    UploadedImage,
    DeleteButton,
    SatisfyFrame,
} from './Modal.style';

export default function Modal({ setModal, orderDetails, onReviewSubmit }) {
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

    const handleImageDelete = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        const review = {
            productId: orderDetails.productId,
            orderId: orderDetails.orderId,
            content: reviewText,
            rating: starRating,
            images: images.map((image) => URL.createObjectURL(image)),
        };

        onReviewSubmit(review); // Pass the review data to the parent component
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
