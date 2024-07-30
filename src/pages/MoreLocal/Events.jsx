import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1920px;
  padding-bottom: 140px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  overflow-x: auto;
`;

const Header = styled.header`
  width: 1200px;
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

const NavWrapper = styled.div`
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
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const FilterButton = styled.button`
  display: flex;
  padding: var(--Spacing-3, 8px) var(--Spacing-5, 24px);
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid var(--Color-Gray-gray-500, #9e9e9e);
`;

const CardGrid = styled.div`
  display: flex;
  width: 1200px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 120px 24px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  width: 384px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
`;

const CardImage = styled.img`
  width: 384px;
  height: 384px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Text-size-3, 14px);
  align-self: stretch;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--Spacing-3, 8px);
  align-self: stretch;
  width: 384px;
  height: 34px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--Spacing-3, 8px);
  align-self: stretch;
`;

const DDay = styled.div`
  color: var(--Color-Main-secondary, #ff8162);
  font-family: Montserrat;
  font-size: var(--Text-size-7, 22px);
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 30.8px */
  letter-spacing: -0.44px;
`;

const Date = styled.div`
  color: var(--Color-Brand-green-700, #234d34);
  font-family: Montserrat;
  font-size: var(--Text-size-7, 22px);
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 30.8px */
  letter-spacing: -0.44px;
`;

const LocalTag = styled.div`
  background: #65bd83;
  color: #fff;
  border-radius: 5px;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
`;

const MoreButton = styled.button`
  border-radius: 3px;
  border: 1px solid var(--Color-Main-primary, #65bd83);
  display: flex;
  width: 180px;
  height: 54px;
  padding: var(--Text-size-3, 14px) var(--Spacing-9, 56px);
  justify-content: center;
  align-items: center;
  gap: var(--Spacing-3, 8px);
  flex: 1 0 0;
  align-self: block;
  color: var(--Color-Main-primary, #65bd83);
  font-family: Pretendard;
  font-size: var(--Text-size-5, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.36px;
  margin-top: 100px;
`;

const Events = () => {
  return (
    <PageContainer>
      <Header>
        <Logo>More Local</Logo>
        <Nav>
          <NavLink to="/localletter">로컬 레터</NavLink>
          <NavWrapper>
            <NavLink to="/events" primary>
              이벤트
            </NavLink>
          </NavWrapper>
        </Nav>
      </Header>
      <Main>
        <FilterBar>
          <FilterButton>지역명</FilterButton>
          <FilterButton>지역명</FilterButton>
          <FilterButton>지역명</FilterButton>
          <FilterButton>지역명</FilterButton>
          <FilterButton>지역명</FilterButton>
          <FilterButton>지역명</FilterButton>
          <FilterButton>지역명</FilterButton>
          <FilterButton>지역명</FilterButton>
          <FilterButton>지역명</FilterButton>
          <FilterButton>지역명</FilterButton>
          <FilterButton>label</FilterButton>
        </FilterBar>
        <CardGrid>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContentWrapper>
              <CardContent>
                <LocalTag>지역명</LocalTag>
                <CardTitle>이벤트명</CardTitle>
              </CardContent>
              <DateWrapper>
                <DDay>D-12</DDay>
                <Date>2024. 07. 01 - 2024. 07. 14</Date>
              </DateWrapper>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContentWrapper>
              <CardContent>
                <LocalTag>지역명</LocalTag>
                <CardTitle>이벤트명</CardTitle>
              </CardContent>
              <DateWrapper>
                <DDay>D-12</DDay>
                <Date>2024. 07. 01 - 2024. 07. 14</Date>
              </DateWrapper>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContentWrapper>
              <CardContent>
                <LocalTag>지역명</LocalTag>
                <CardTitle>이벤트명</CardTitle>
              </CardContent>
              <DateWrapper>
                <DDay>D-12</DDay>
                <Date>2024. 07. 01 - 2024. 07. 14</Date>
              </DateWrapper>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContentWrapper>
              <CardContent>
                <LocalTag>지역명</LocalTag>
                <CardTitle>이벤트명</CardTitle>
              </CardContent>
              <DateWrapper>
                <DDay>D-12</DDay>
                <Date>2024. 07. 01 - 2024. 07. 14</Date>
              </DateWrapper>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContentWrapper>
              <CardContent>
                <LocalTag>지역명</LocalTag>
                <CardTitle>이벤트명</CardTitle>
              </CardContent>
              <DateWrapper>
                <DDay>D-12</DDay>
                <Date>2024. 07. 01 - 2024. 07. 14</Date>
              </DateWrapper>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContentWrapper>
              <CardContent>
                <LocalTag>지역명</LocalTag>
                <CardTitle>이벤트명</CardTitle>
              </CardContent>
              <DateWrapper>
                <DDay>D-12</DDay>
                <Date>2024. 07. 01 - 2024. 07. 14</Date>
              </DateWrapper>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContentWrapper>
              <CardContent>
                <LocalTag>지역명</LocalTag>
                <CardTitle>이벤트명</CardTitle>
              </CardContent>
              <DateWrapper>
                <DDay>D-12</DDay>
                <Date>2024. 07. 01 - 2024. 07. 14</Date>
              </DateWrapper>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContentWrapper>
              <CardContent>
                <LocalTag>지역명</LocalTag>
                <CardTitle>이벤트명</CardTitle>
              </CardContent>
              <DateWrapper>
                <DDay>D-12</DDay>
                <Date>2024. 07. 01 - 2024. 07. 14</Date>
              </DateWrapper>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContentWrapper>
              <CardContent>
                <LocalTag>지역명</LocalTag>
                <CardTitle>이벤트명</CardTitle>
              </CardContent>
              <DateWrapper>
                <DDay>D-12</DDay>
                <Date>2024. 07. 01 - 2024. 07. 14</Date>
              </DateWrapper>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContentWrapper>
              <CardContent>
                <LocalTag>지역명</LocalTag>
                <CardTitle>이벤트명</CardTitle>
              </CardContent>
              <DateWrapper>
                <DDay>D-12</DDay>
                <Date>2024. 07. 01 - 2024. 07. 14</Date>
              </DateWrapper>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContentWrapper>
              <CardContent>
                <LocalTag>지역명</LocalTag>
                <CardTitle>이벤트명</CardTitle>
              </CardContent>
              <DateWrapper>
                <DDay>D-12</DDay>
                <Date>2024. 07. 01 - 2024. 07. 14</Date>
              </DateWrapper>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImage
              src="https://via.placeholder.com/588x441"
              alt="Example"
            />
            <CardContentWrapper>
              <CardContent>
                <LocalTag>지역명</LocalTag>
                <CardTitle>이벤트명</CardTitle>
              </CardContent>
              <DateWrapper>
                <DDay>D-12</DDay>
                <Date>2024. 07. 01 - 2024. 07. 14</Date>
              </DateWrapper>
            </CardContentWrapper>
          </Card>
        </CardGrid>
        <MoreButton>+more</MoreButton>
      </Main>
    </PageContainer>
  );
};

export default Events;
