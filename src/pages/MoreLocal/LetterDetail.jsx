// src/pages/MoreLocal/LetterDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import letters from '../../components/MoreLocal/LetterData'; // 레터 데이터 import

const LetterDetail = () => {
  const { id: letter_id } = useParams(); // URL에서 letter_id를 가져옵니다.
  const [letter, setLetter] = useState(null);

  useEffect(() => {
    // letter_id에 해당하는 레터를 가져옵니다.
    const letterData = letters.find((letter) => letter.letter_id === letter_id);
    setLetter(letterData);
  }, [letter_id]);

  if (!letter) {
    return <div>Loading...</div>;
  }

  return (
    <div className="letter-detail">
      <h2>{letter.title}</h2>
      <img src={letter.imageUrl} alt={letter.title} />
      <p>Created on: {new Date(letter.createdAt).toLocaleDateString()}</p>
      <p>{letter.content}</p> {/* 레터의 상세 내용 */}
    </div>
  );
};

export default LetterDetail;
