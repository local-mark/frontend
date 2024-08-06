import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 80vh;
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
  background-color: ${({ overlayColor }) => overlayColor || 'rgba(0, 0, 0, 0.5)'};
  padding-top: 5%;
  padding-left: 15%;
  padding-right: 50%;
`;

const ContentContainer = styled.div`
  text-align: left;

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
    background-color: #65BD83;
    color: white;
    border: none;
    padding: 10px 40px;
    cursor: pointer;
    font-size: 1.5em;
    border-radius: 5px;
  }
`;



const ImageOverlay = ({ imageSrc, overlayColor, contents }) => {
  return (
    <ImageContainer>
      <Image src={imageSrc} alt="Overlay" />
      <Overlay overlayColor={overlayColor}>
        <ContentContainer>
          {contents}
        </ContentContainer>
      </Overlay>
    </ImageContainer>
  );
};

export default ImageOverlay;
