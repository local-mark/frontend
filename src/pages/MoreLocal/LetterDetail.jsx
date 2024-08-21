import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import letters from '../../components/MoreLocal/LetterData';

const LetterDetail = () => {
  const { letterId } = useParams();
  const letter = letters.find(l => l.letterId === letterId);

  if (!letter) {
    return <LoadingPage>Letter not found...</LoadingPage>;
  }

  return (
    <LetterDetailContainer>
      <LetterHead>
        <LetterTitle>{letter.title}</LetterTitle>
        <Date>Date: {letter.createdAt}</Date>
        <TitleBackground src={letter.imageUrl} alt={letter.title}/>
      </LetterHead>
      <LetterBody>
        <LetterImage src={letter.imageUrl} alt={letter.title} />
        <LetterContent>{letter.content}</LetterContent>
      </LetterBody>
    </LetterDetailContainer>
  );
};

const LoadingPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100vw;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  background-color: #f0f0f0;
`;

const LetterDetailContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-size: 16px;
`;

const LetterHead = styled.div`
  position: relative;
  padding: 0;
  height: 30vh;
  overflow: hidden;
`;

const TitleBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 30vh;
  object-fit: cover;
  z-index: 1;
`;

const LetterTitle = styled.h2`
  position: absolute;
  top: 50%;
  left: 10%;
  font-size: 3rem;
  color: white;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Date = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10%;
  font-size: 1.5rem;
  color: white;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const LetterBody = styled.div`
  padding-top: 20px;
`

const LetterImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const LetterContent = styled.p`
  font-size: 2rem;
`;

export default LetterDetail;