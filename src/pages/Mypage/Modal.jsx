import React, { useState } from 'react';
import axios from 'axios';
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
    ImageContainer,
    DeleteButton,
} from './Modal.style';

export default function Modal(props) {
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [images, setImages] = useState([]);
    const maxImages = 2;

    const handleRatingClick = (index) => {
        setRating(index);
    };

    const handleRatingDrag = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const newRating = Math.ceil((x / rect.width) * 5);
        setRating(newRating);
    };

    const handleReviewTextChange = (e) => {
        setReviewText(e.target.value);
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + images.length > maxImages) {
            alert(`최대 ${maxImages}장까지 업로드할 수 있습니다.`);
            return;
        }
        setImages((prevImages) => [...prevImages, ...files]);
    };

    const handleImageDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        if (files.length + images.length > maxImages) {
            alert(`최대 ${maxImages}장까지 업로드할 수 있습니다.`);
            return;
        }
        setImages((prevImages) => [...prevImages, ...files]);
    };

    const handleImageRemove = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('product_id', 1); // 상품 ID
            formData.append('oi_id', 1); // 주문 ID
            formData.append('content', reviewText);
            formData.append('rating', rating);

            images.forEach((image, index) => {
                formData.append(`image_${index + 1}`, image);
            });

            await axios.post('/reviews', formData);
            alert('리뷰가 성공적으로 작성되었습니다.');
            props.setModal(false); // 모달 닫기
        } catch (error) {
            console.error('리뷰 작성 실패:', error);
            alert('리뷰 작성 중 오류가 발생했습니다.');
        }
    };

    return (
        <div>
            <ModalBackground>
                <Review onDrop={handleImageDrop} onDragOver={(e) => e.preventDefault()}>
                    <SatisfyFrame>
                        <div>상품은 만족하셨나요?</div>
                        <Rating
                            onMouseMove={handleRatingDrag}
                            onClick={(e) => handleRatingClick(Math.ceil((e.clientX / e.target.offsetWidth) * 5))}
                        >
                            {[...Array(5)].map((_, index) => {
                                index += 1;
                                return <DesignedIcon key={index} fill={index <= rating ? '#65BD83' : '#e0e0e0'} />;
                            })}
                        </Rating>
                    </SatisfyFrame>
                    <ImgFrame>
                        {images.length > 0 ? (
                            images.map((image, index) => (
                                <ImageContainer key={index}>
                                    <UploadedImage src={URL.createObjectURL(image)} alt={`uploaded ${index}`} />
                                    <DeleteButton onClick={() => handleImageRemove(index)}>×</DeleteButton>
                                </ImageContainer>
                            ))
                        ) : (
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
                    </ImgFrame>
                    <MainTextFrame>
                        <MainText>
                            <MaintextInput
                                placeholder="상품 리뷰를 작성해주세요."
                                value={reviewText}
                                onChange={handleReviewTextChange}
                                maxLength={500}
                            />
                            <LetterNum>{reviewText.length} / 500</LetterNum>
                        </MainText>
                    </MainTextFrame>
                    <Buttons>
                        <Button onClick={() => props.setModal(false)}>
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
