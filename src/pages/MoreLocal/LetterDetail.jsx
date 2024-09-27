import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchData } from '../../services/api';
import RecentLetters from '../../components/MoreLocal/RecentLetters';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const LetterDetail = () => {
    const { letterId } = useParams();
    const [letter, setLetter] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const handleReturnClick = () => {
        navigate(`/morelocal/letters`);
    };
    useEffect(() => {
        const fetchLetterDetail = async () => {
            try {
                const response = await fetchData(`/morelocal/letters/${letterId}`);
                if (response.isSuccess) {
                    setLetter(response.result);
                } else {
                    console.error('Failed to fetch letter:', response.message);
                }
            } catch (error) {
                console.error('Error fetching letter detail:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLetterDetail();
    }, [letterId]);

    const renderContentWithImages = (content, images = []) => {
        const contentParts = content.split('\n\n');
        const imageElements = images.map((imageUrl, index) => (
            <LetterImage key={index} src={imageUrl} alt={`content-img-${index}`} />
        ));

        return contentParts.map((part, index) => (
            <React.Fragment key={index}>
                <LetterContent dangerouslySetInnerHTML={{ __html: parseBoldText(part) }} />
                {imageElements[index] && <>{imageElements[index]}</>}
            </React.Fragment>
        ));
    };

    const parseBoldText = (text) => {
        return text.replace(/\*\*(.*?)\*\*/g, '<h1>$1</h1>');
    };

    if (loading) {
        return <LoadingPage>Loading...</LoadingPage>;
    }

    if (!letter) {
        return <LoadingPage>Letter not found...</LoadingPage>;
    }

    const contentImageMatch = letter.letter.content.match(/(https:\/\/[^\s]+)/);
    const initialContentImage = contentImageMatch ? contentImageMatch[0] : null;
    const initialContentText = letter.letter.content.replace(initialContentImage, '');

    return (
        <LetterDetailContainer>
            <LetterHead>
                <TitleBackgroundOverlay>
                    <TitleBackground src={letter.letter.thumbnail_url} alt={letter.letter.title} />
                </TitleBackgroundOverlay>
                <LetterTitle>{letter.letter.title}</LetterTitle>
                <Date>Date: {letter.letter.created_at}</Date>
            </LetterHead>
            <LetterBody>
                {initialContentImage && <InitialContentImage src={initialContentImage} alt="initial-content-img" />}
                {renderContentWithImages(initialContentText, letter.images || [])}

                <FaChevronLeft />
                <a onClick={handleReturnClick}>목록으로 돌아가기</a>
            </LetterBody>

            <RecentContainer>
                <RecentLetters />
            </RecentContainer>
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
    margin: 0 auto;
    max-width: 1800px;
    min-width: 1400px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
`;

const LetterHead = styled.div`
    position: relative;
    padding: 0;
    height: 30vh;
    overflow: hidden;
`;

const TitleBackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
`;

const TitleBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    color: var(--Color-Gray-gray-100, #f5f5f5);
    font-family: Montserrat;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
    color: white;
    z-index: 2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const LetterBody = styled.div`
    padding-left: 200px;
    padding-right: 200px;
    margin-top: 80px;
    a {
        font-size: 22px;
        cursor: pointer;
    }
`;

const InitialContentImage = styled.img`
    width: 300px;
    height: auto;
    margin-bottom: 10px;
`;

const LetterImage = styled.img`
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
`;

const LetterContent = styled.div`
    font-size: 2rem;
    margin-bottom: 20px;
    line-height: 1.6;

    h1 {
        font-weight: bold;
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

const RecentContainer = styled.div`
    width: 100%;
    max-width: 1800px;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default LetterDetail;
