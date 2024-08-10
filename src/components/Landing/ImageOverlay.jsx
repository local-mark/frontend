import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 87vh;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ContentContainer = styled.div`
    text-align: left;
    padding-top: 5%;
    padding-left: 15%;
    padding-right: 50%;

    h2 {
        color: white;
        font-size: 2.5em;
        font-weight: bold;
        margin-bottom: 20px;
    }

    p {
        color: white;
        font-size: 1.5em;
        margin-bottom: 20px;
    }

    button {
        background-color: #65bd83;
        color: white;
        border: none;
        padding: 10px 40px;
        cursor: pointer;
        font-size: 1.5em;
        border-radius: 5px;
    }
`;

const Arrow = styled.div`
    position: absolute;
    bottom: 20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid white;
    cursor: pointer;

    &:hover {
        border-top: 25px solid #65bd83;
    }
`;

const ImageOverlay = ({ imageSrc, contents }) => {
    const scrollToNextSection = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <ImageContainer>
            <Image src={imageSrc} alt="Overlay" />
            <Overlay>
                <ContentContainer>{contents}</ContentContainer>
                <Arrow onClick={scrollToNextSection} />
            </Overlay>
        </ImageContainer>
    );
};

export default ImageOverlay;
