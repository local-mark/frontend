import React from 'react';
import { useNavigate } from 'react-router-dom';
import letters from '../../components/MoreLocal/LetterData';

const LocalLetter = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/morelocal/letters/${id}`);
  };

  return (
    <div>
      <h1>Local Letters</h1>
      <div className="letter-list">
        {letters.map((letter) => (
          <div key={letter.letterIdd} className="letter-card" onClick={() => handleCardClick(letter.letterId)}>
            <img src={letter.imageUrl} alt={letter.title} />
            <h2>{letter.title}</h2>
            <p>{letter.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalLetter;
