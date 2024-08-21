// event detail page
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import events from '../../components/MoreLocal/EventData';

const EventDetail = () => {
    const {eventId} = useParams();
    const event = events.find(e => e.eventId === eventId);

    if (!event) {
        return <LoadingPage>Event not found...</LoadingPage>;
    }

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
        <EventDetailContainer>
            <EventHead>
                <LocalTag>{event.location}</LocalTag>
                <EventTitle>{event.title}</EventTitle>
                <DateWrapper>
                    <DDay>{formatEventDate(event.startDate, event.endDate)}</DDay>
                    <EventDate>{event.startDate} ~ {event.endDate}</EventDate>
                </DateWrapper>
                <AuthorContainer>
                    <AuthorImg scr={event.authorImage} alt={event.authorName} />
                    <Author>
                        <AuthorName>{event.authorName}</AuthorName>
                        <AuthorDescription>{event.authorDescription}</AuthorDescription>
                    </Author>
                </AuthorContainer>
            </EventHead>
            <EventBody>
                <EventImage src={event.imageUrl} alt={event.title} />
                <EventContent>{event.content}</EventContent>
            </EventBody>
        </EventDetailContainer>
    );
};

const EventDetailContainer = styled.div`
  display: flex;
  width: 100vw;
  max-width: 100%;
  padding: 100px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow-x: auto;
`;

const EventHead = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;
  padding: 10px 0;

  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const LocalTag = styled.div`
  background: #65bd83;
  color: #fff;
  border-radius: 5px;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
`;

const EventTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
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

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--Spacing-3, 8px);
  align-self: stretch;
`;

const AuthorImg = styled.img``;

const Author = styled.div`
    display: flex;
    flex-direction: column;
`;

const AuthorName = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

const AuthorDescription = styled.div`
    font-size: 1rem;
`;

const EventBody = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  padding: 20px 0;`;

const EventImage = styled.img`
  /* width: 30vw;
  height: auto;
  object-fit: cover; */
  margin-bottom: 8px;
`;

const EventContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--Spacing-3, 8px);
  align-self: stretch;
`;

export default EventDetail;
