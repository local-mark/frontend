import React, { useEffect, useState } from 'react';
import { NavLink as RouterNavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchData } from '../../services/api'; // api.jsx에서 fetchData 함수를 가져옵니다.

const LocalLetter = () => {
    const navigate = useNavigate();
    const [letters, setLetters] = useState([]);

    // API에서 데이터 가져오기
    useEffect(() => {
        const fetchLetters = async () => {
            try {
                const data = await fetchData('/morelocal/letters');
                if (data.isSuccess) {
                    setLetters(data.result.letters);
                } else {
                    console.error('Failed to fetch letters:', data.message);
                }
            } catch (error) {
                console.error('Error fetching letters:', error);
            }
        };

        fetchLetters();
    }, []);

    const handleCardClick = (letterId) => {
        navigate(`/morelocal/letters/${letterId}`);
    };

    return (
        <PageContainer>
            <Header>
                <Logo>More Local</Logo>
                <Nav>
                    <NavWrapper>
                        <NavLink to="/morelocal/letters" primary>
                            로컬 레터
                        </NavLink>
                    </NavWrapper>
                    <NavLink to="/morelocal/events">이벤트</NavLink>
                </Nav>
            </Header>
            <LetterCardContainer>
                {letters.map((letter) => (
                    <Card
                        key={letter.letter_id}
                        className="letter-card"
                        onClick={() => handleCardClick(letter.letter_id)}
                    >
                        <CardImage src={letter.thumbnail_url} alt={letter.title} />
                        <CardInfo>
                            <Type>{letter.category}</Type>
                            <Title>{letter.title}</Title>
                            <Date>{letter.created_at}</Date>
                        </CardInfo>
                    </Card>
                ))}
            </LetterCardContainer>
        </PageContainer>
    );
};

const PageContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 100px;
    min-width: 1400px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

const Header = styled.header`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    padding: 20px 0;
`;

const Logo = styled.div`
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: -0.8px;
    margin-top: -100px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: var(--Spacing-10, 64px);
`;

const NavWrapper = styled.nav`
    display: flex;
    padding: var(--Spacing-4, 16px) 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-bottom: 4px solid var(--Color-Main-primary, #65bd83);
`;

const NavLink = styled(RouterNavLink)`
    color: ${(props) => (props.primary ? 'var(--Color-Main-primary, #65bd83)' : '#000')};
    font-family: Pretendard;
    font-size: var(--Text-size-6, 20px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: -0.4px;
    text-decoration: none;
`;

const LetterCardContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 100px 24px;
    flex-wrap: wrap;
    margin: 0 auto;
`;

const Card = styled.div`
    cursor: pointer;
    padding-bottom: 10px;
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

const CardImage = styled.img`
    width: 558px;
    height: 441px;
    object-fit: cover;
    margin-bottom: 8px;
`;

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
`;

const Type = styled.div`
    color: white;
    background-color: #ff8162;
    font-size: 1.25rem;
    border-radius: 5px;
    padding: 4px 8px;
`;

const Title = styled.h3`
    font-size: 20px;
    font-weight: bold;
`;

const Date = styled.p`
    font-size: 14px;
    color: #666;
`;

export default LocalLetter;
