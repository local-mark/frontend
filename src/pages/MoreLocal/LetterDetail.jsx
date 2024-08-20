import React from 'react';
import { useParams } from 'react-router-dom';
import letters from '../../components/MoreLocal/LetterData';

const LetterDetail = () => {
  const { letterId } = useParams();
  const letter = letters.find(l => l.letterId === letterId);

  if (!letter) {
    return <div>Letter not found</div>;
  }

  return (
    <div>
      <h1>{letter.title}</h1>
      <p>Date: {letter.createdAt}</p>
      <img src={letter.imageUrl} alt={letter.title} />
      <div>{letter.content}</div>
    </div>
  );
};

export default LetterDetail;
