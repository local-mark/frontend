// src/pages/MoreLocal/LetterDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import letters from '../../components/MoreLocal/LetterData';
import styled from 'styled-components';

const LetterDetail = () => {
  const { letterId } = useParams();
  const [letter, setLetter] = useState(null);

  useEffect(() => {
    const letterData = letters.find((letter) => letter.letterId === letterId);
    setLetter(letterData);
  }, [letterId]);

  if (!letter) {
    return <LoadingPage>Loading...</LoadingPage>;
  }

  return (
    <LetterDetailContainer>
      <LetterTitle>{letter.title}</LetterTitle>
      <LetterImage src={letter.imageUrl} alt={letter.title} />
      <Date>Created on: {letter.createdAt}</Date>
      <LetterContent>{letter.content}</LetterContent>
    </LetterDetailContainer>
  );
};

const LoadingPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
`;

const LetterTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const LetterImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const Date = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const LetterContent = styled.p`
  font-size: 1rem;
`;

export default LetterDetail;
