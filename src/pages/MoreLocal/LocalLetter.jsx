import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  padding-bottom: 140px;
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

const Main = styled.main`
  margin-top: 20px;
`;

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

const CardDescription = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
`;

const Date = styled.div`
  font-size: 14px;
  color: #999;
`;

const LocalLetter = () => {
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
      <Main>
        <CardGrid>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContent>
              <Category>인터뷰</Category>
              <CardTitle>동심을 찾아주는 이로이로 소품샵 - 장은혜</CardTitle>
              <Date>2024. 07. 01</Date>
            </CardContent>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContent>
              <Category>인터뷰</Category>
              <CardTitle>동심을 찾아주는 이로이로 소품샵 - 장은혜</CardTitle>
              <Date>2024. 07. 01</Date>
            </CardContent>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContent>
              <Category>인터뷰</Category>
              <CardTitle>동심을 찾아주는 이로이로 소품샵 - 장은혜</CardTitle>
              <Date>2024. 07. 01</Date>
            </CardContent>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContent>
              <Category>인터뷰</Category>
              <CardTitle>동심을 찾아주는 이로이로 소품샵 - 장은혜</CardTitle>
              <Date>2024. 07. 01</Date>
            </CardContent>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContent>
              <Category>인터뷰</Category>
              <CardTitle>동심을 찾아주는 이로이로 소품샵 - 장은혜</CardTitle>
              <Date>2024. 07. 01</Date>
            </CardContent>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContent>
              <Category>인터뷰</Category>
              <CardTitle>동심을 찾아주는 이로이로 소품샵 - 장은혜</CardTitle>
              <Date>2024. 07. 01</Date>
            </CardContent>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContent>
              <Category>인터뷰</Category>
              <CardTitle>동심을 찾아주는 이로이로 소품샵 - 장은혜</CardTitle>
              <Date>2024. 07. 01</Date>
            </CardContent>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContent>
              <Category>인터뷰</Category>
              <CardTitle>동심을 찾아주는 이로이로 소품샵 - 장은혜</CardTitle>
              <Date>2024. 07. 01</Date>
            </CardContent>
          </Card>
        </CardGrid>
      </Main>
    </PageContainer>
  );
};

export default LocalLetter;
