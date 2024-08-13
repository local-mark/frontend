import React, { useState } from 'react';
import styled from 'styled-components';

import mork_1 from "../../assets/image/MoreLocal/soap.png";
import mork_2 from "../../assets/image/MoreLocal/soap_2.png";

const lettersPerPage = 6;

const SampleLetters = [
    {
        letter_id: 7,
        category: "뉴스레터",
        title: "제목8",
        thumbnail_url: {mork_1},
        created_at: "2024.08.02"
    },
    {
        letter_id: 6,
        category: "인터뷰",
        title: "제목7",
        thumbnail_url: {mork_2},
        created_at: "2024.08.02"
    },
    {
        letter_id: 5,
        category: "뉴스레터",
        title: "제목6",
        thumbnail_url: {mork_1},
        created_at: "2024.08.02"
    },
    {
        letter_id: 4,
        category: "인터뷰",
        title: "제목5",
        thumbnail_url: {mork_2},
        created_at: "2024.08.02"
    },
    {
        letter_id: 3,
        category: "뉴스레터",
        title: "제목4",
        thumbnail_url: {mork_1},
        created_at: "2024.08.02"
    },
    {
        letter_id: 2,
        category: "인터뷰",
        title: "제목3",
        thumbnail_url: {mork_2},
        created_at: "2024.08.02"
    },
    {
        letter_id: 1,
        category: "뉴스레터",
        title: "제목2",
        thumbnail_url: {mork_1},
        created_at: "2024.08.02"
    },
    {
        letter_id: 0,
        category: "인터뷰",
        title: "제목1",
        thumbnail_url: {mork_2},
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

const LetterCard = ({curruntPage, onPageChange}) => {
    const [letters, setLetters] = useState([]);
    const pageLetters = SampleLetters.slice((curruntPage - 1) * lettersPerPage, curruntPage * lettersPerPage);
    setLetters(pageLetters);

    const totalPages = Math.ceil(SampleLetters.length / lettersPerPage);

    return (
        <div>
            <CardGrid>
                {letters.map((letter) => (
                    <Card>
                        <CardImage src={mork_1} alt='sample_1' />
                        <CardContent>
                            <Category>{letter.category}</Category>
                            <CardTitle>{letter.title}</CardTitle>
                            <Date>{letter.created_at}</Date>
                        </CardContent>
                    </Card>
                ))}
            </CardGrid>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>  
    );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <PaginationContainer>
            <PageButton onClick={handlePreviousPage} disabled={currentPage === 1}>
                <FaChevronLeft />
            </PageButton>
            {[...Array(totalPages)].map((_, index) => (
                <PageButton key={index + 1} onClick={() => onPageChange(index + 1)} active={index + 1 === currentPage}>
                    {index + 1}
                </PageButton>
            ))}
            <PageButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                <FaChevronRight />
            </PageButton>
        </PaginationContainer>
    );
};


export default LetterCard;
