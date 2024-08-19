// src/pages/MoreLocal/LetterDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import letters from '../../components/MoreLocal/LetterData'; // 레터 데이터 import
import styled from 'styled-components';

// 스타일드 컴포넌트 정의
const LoadingPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh; /* 화면 전체 높이 */
  width: 100vw; /* 화면 전체 너비 */
  font-size: 2rem; /* 글씨 크기 */
  font-weight: bold; /* 글씨 두께 */
  color: #333; /* 글씨 색상 */
  background-color: #f0f0f0; /* 배경 색상 */
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

const LetterContent = styled.p`
  font-size: 1rem;
`;

const LetterDetail = () => {
  const { id: letterId } = useParams(); // URL에서 letterId를 가져옵니다.
  const [letter, setLetter] = useState(null);

  useEffect(() => {
    // letterId에 해당하는 레터를 가져옵니다.
    const letterData = letters.find((letter) => letter.letterId === letterId); // letterId로 비교
    setLetter(letterData);
  }, [letterId]);

  if (!letter) {
    return <LoadingPage>Loading...</LoadingPage>; // 로딩 화면
  }

  return (
    <LetterDetailContainer>
      <LetterTitle>{letter.title}</LetterTitle>
      <LetterImage src={letter.imageUrl} alt={letter.title} />
      <p>Created on: {new Date(letter.createdAt).toLocaleDateString()}</p> {/* 날짜 포맷 조정 */}
      <LetterContent>{letter.content}</LetterContent> {/* 레터의 상세 내용 */}
    </LetterDetailContainer>
  );
};

export default LetterDetail;
