import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import letters from "../../components/MoreLocal/LetterData";
import LetterCard from "../../components/MoreLocal/LetterCard";

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
            <NavLink to="/morelocal/letters" primary>
              로컬 레터
            </NavLink>
          </NavWrapper>
          <NavLink to="/morelocal/events">이벤트</NavLink>
        </Nav>
      </Header>
      <LetterCardContainer>
        {letters.map((letter) => (
          <div key={letter.letterId}
          className="letterCard"
          onClick={() => handleCardClick(letter.letterId)}
          >
            <LetterTitle>{letter.title}</LetterTitle>
            <img src={letter.imageUrl} alt={letter.title} />
            {/* <p>{new Date(letter.createdAt).toLocaleDateString()}</p> */}
            <p>{letter.createdAt}</p>
          </div>
        ))}
      </LetterCardContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
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
  line-height: 140%; /* 56px */
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

const NavLink = styled(Link)`
  color: ${(props) =>
    props.primary ? "var(--Color-Main-primary, #65bd83)" : "#000"};
  font-family: Pretendard;
  font-size: var(--Text-size-6, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
  text-decoration: none;
`;

/* const Main = styled.main`
  margin-top: 20px;
`; */

const LetterCardContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 100px 24px;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const LetterTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export default LocalLetter;
