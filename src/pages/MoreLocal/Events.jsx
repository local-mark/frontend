import React from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink, useNavigate } from 'react-router-dom';
import events from "../../components/MoreLocal/EventData";

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

const NavLink = styled(RouterNavLink)`
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

const CardGrid = styled.div`
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

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;
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
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 30.8px */
  letter-spacing: -0.44px;

  position: relative;
  margin-bottom: 10px;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 8px;
    border-radius: 3px;
    background-color:rgba(255, 129, 98, 0.3);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const EventDate = styled.div`
  color: var(--Color-Brand-green-700, #234d34);
  font-family: Montserrat;
  font-size: 1.5rem;
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

/* const MoreButton = styled.button`
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
`; */

const Events = () => {
  const navigate = useNavigate();

  const handleCardClick = (eventId) => {
    navigate(`/morelocal/events/${eventId}`);
  };

  const formatEventDate = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate + 'T00:00:00');
    const end = new Date(endDate + 'T23:59:59');

    if (now > end) {
      return '완료됨';
    }

    if (now.getTime() === start.getTime()) {
      return 'D-Day';
    }

    const timeDiff = end - now;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return `D-${daysDiff}`;
  };

  return (
    <PageContainer>
      <Header>
        <Logo>More Local</Logo>
        <Nav>
          <NavLink to="/morelocal/letters">로컬 레터</NavLink>
          <NavWrapper>
            <NavLink to="/morelocal/events" primary>
              이벤트
            </NavLink>
          </NavWrapper>
        </Nav>
      </Header>
      <Main>
        <CardGrid>
          {events.map((event) => (
            <Card key={event.eventId} className="event-card" onClick={() => handleCardClick(event.eventId)}>
              <CardImage src={event.imageUrl} alt={event.title} />
              <CardContentWrapper>
                <CardContent>
                  <LocalTag>{event.location}</LocalTag>
                  <CardTitle>{event.title}</CardTitle>
                </CardContent>
                <DateWrapper>
                  <DDay>
                    {formatEventDate(event.startDate, event.endDate)}
                  </DDay>
                  <EventDate>{event.startDate} ~ {event.endDate}</EventDate>
                </DateWrapper>
              </CardContentWrapper>
            </Card>
          ))}
        </CardGrid>
        {/* <MoreButton>+more</MoreButton> */}
      </Main>
    </PageContainer>
  );
};


export default Events;
