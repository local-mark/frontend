import React from 'react';
import { NavLink as RouterNavLink, useNavigate } from 'react-router-dom';
import letters from '../../components/MoreLocal/LetterData';
import styled from 'styled-components';

const LocalLetter = () => {
  const navigate = useNavigate();

  const handleCardClick = (letterId) => {
    navigate(`/morelocal/letters/${letterId}`);
  };

  return (
    <PageContainer>
      <Header>
        <Logo>More Local</Logo>
        <Nav>
          <NavWrapper>
            <StyledNavLink to="/morelocal/letters" primary>
              로컬 레터
            </StyledNavLink>
          </NavWrapper>
          <RouterNavLink to="/morelocal/events">이벤트</RouterNavLink>
        </Nav>
      </Header>
      <LetterCardContainer>
        {letters.map((letter) => (
          <Card key={letter.letterId} className="letter-card" onClick={() => handleCardClick(letter.letterId)}>
            <CardImage src={letter.imageUrl} alt={letter.title} />
            <CardInfo>
              <Type>{letter.type}</Type>
              <Title>{letter.title}</Title>
              <Date>{letter.createdAt}</Date>
            </CardInfo>
          </Card>
        ))}
      </LetterCardContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  max-width: 100%;
  padding: 100px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow-x: auto;
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
  margin-top: 40px;
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

const StyledNavLink = styled(RouterNavLink)`
  color: ${(props) =>
    props.primary ? "var(--Color-Main-primary, #65bd83)" : "#000"};
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
  width: 30vw;
  height: auto;
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
  background-color: #FF8162;
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
