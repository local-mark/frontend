import React, { useState } from 'react';
import styled from 'styled-components';

import mork_1 from "../../assets/image/MoreLocal/soap.png";
import mork_2 from "../../assets/image/MoreLocal/soap_2.png";

const SampleLetters = [
    {
        letter_id: 7,
        category: "뉴스레터",
        title: "제목8",
        thumbnail_url: mork_1,
        created_at: "2024.08.02"
    },
    {
        letter_id: 6,
        category: "인터뷰",
        title: "제목7",
        thumbnail_url: mork_2,
        created_at: "2024.08.02"
    },
    {
        letter_id: 5,
        category: "뉴스레터",
        title: "제목6",
        thumbnail_url: mork_1,
        created_at: "2024.08.02"
    },
    {
        letter_id: 4,
        category: "인터뷰",
        title: "제목5",
        thumbnail_url: mork_2,
        created_at: "2024.08.02"
    },
    {
        letter_id: 3,
        category: "뉴스레터",
        title: "제목4",
        thumbnail_url: mork_1,
        created_at: "2024.08.02"
    },
    {
        letter_id: 2,
        category: "인터뷰",
        title: "제목3",
        thumbnail_url: mork_2,
        created_at: "2024.08.02"
    },
    {
        letter_id: 1,
        category: "뉴스레터",
        title: "제목2",
        thumbnail_url: mork_1,
        created_at: "2024.08.02"
    },
    {
        letter_id: 0,
        category: "인터뷰",
        title: "제목1",
        thumbnail_url: mork_2,
        created_at: "2024.08.02"
    }
];

const CardGrid = styled.div`
  display: flex;
  width: 100vw;
  align-items: flex-start;
  align-content: flex-start;
  gap: 100px 24px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  width: 30vw;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 30px 5px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 30vw;
  height: 45vh;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardContent = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const Category = styled.div`
  color: #ff5722;
  font-size: 14px;
  font-weight: bold;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const Date = styled.div`
  font-size: 14px;
  color: #999;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background: ${({ active }) => (active ? '#ff5722' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: 1px solid #ddd;
  padding: 8px 16px;
  margin: 0 4px;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const LetterCard = () => {
    return (
        <div>
            <CardGrid>
                {SampleLetters.map((letter) => (
                    <Card key={letter.letter_id}>
                        <CardImage src={letter.thumbnail_url} alt={letter.title} />
                        <CardContent>
                            <Category>{letter.category}</Category>
                            <CardTitle>{letter.title}</CardTitle>
                            <Date>{letter.created_at}</Date>
                        </CardContent>
                    </Card>
                ))}
            </CardGrid>
        </div>  
    );
};

export default LetterCard;
