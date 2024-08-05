import React from 'react';
import styled from 'styled-components';

const ProductContent = ({ images }) => {
    return (
        <DescriptionContainer>
            {images.map((image, index) => (
                <DescriptionImage key={index} src={image} alt={`설명 이미지 ${index + 1}`} />
            ))}
        </DescriptionContainer>
    );
};

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
`;

const DescriptionImage = styled.img`
    width: 100%;
    max-width: 1100px;
    object-fit: cover;
    margin-bottom: 10px;
`;

export default ProductContent;
