import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchData } from '../../services/api';
import RecentEvents from '../../components/MoreLocal/RecentEvents';

const EventDetail = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEventDetail = async () => {
            try {
                const response = await fetchData(`/morelocal/events/${eventId}`);
                if (response.isSuccess) {
                    setEvent(response.result);
                } else {
                    console.error('Failed to fetch event:', response.message);
                }
            } catch (error) {
                console.error('Error fetching event detail:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEventDetail();
    }, [eventId]);

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

    if (loading) {
        return <Loading>Loading...</Loading>;
    }

    if (!event) {
        return <Loading>Event not found...</Loading>;
    }

    return (
        <EventDetailContainer>
            <EventHead>
                <LocalTag>{event.event.subregion_name}</LocalTag>
                <EventTitle>{event.event.title}</EventTitle>
                <DateWrapper>
                    <DDay>{formatEventDate(event.event.start_date, event.event.end_date)}</DDay>
                    <EventDate>
                        {event.event.start_date} ~ {event.event.end_date}
                    </EventDate>
                </DateWrapper>
                {event.event.authorImage && (
                    <AuthorContainer>
                        <AuthorImg src={event.event.authorImage} alt={event.event.authorName} />
                        <Author>
                            <AuthorName>{event.event.authorName}</AuthorName>
                            <AuthorDescription>{event.event.authorDescription}</AuthorDescription>
                        </Author>
                    </AuthorContainer>
                )}
            </EventHead>
            <EventBody>
                <EventImage src={event.event.thumbnail_url} alt={event.event.title} />
                <EventContent>{event.event.content}</EventContent>
                {event.images.map((imageUrl, index) => (
                    <EventImage key={index} src={imageUrl} alt={`Event image ${index}`} />
                ))}
            </EventBody>
            <RecentContainer>
                <RecentEvents />
            </RecentContainer>
        </EventDetailContainer>
    );
};

export default EventDetail;

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;

    font-size: 2rem;
    font-weight: bold;
    color: #333;
    background-color: #f0f0f0;
`;

const EventDetailContainer = styled.div`
    margin: 0 auto;
    max-width: 1800px;
    min-width: 1300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const EventHead = styled.div`
    width: 80%;
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
    line-height: 140%;
    letter-spacing: -0.44px;
    position: relative;
    margin-bottom: 10px;
    &:after {
        content: '';
        display: block;
        width: 100%;
        height: 8px;
        border-radius: 3px;
        background-color: rgba(255, 129, 98, 0.3);
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
    line-height: 140%;
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
    padding: 20px 0;
`;

const EventImage = styled.img`
    width: 1000px;
    height: auto;
    object-fit: cover;
    margin-bottom: 8px;
`;

const EventContent = styled.div`
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 20px;
`;

const RecentContainer = styled.div`
    width: 100%;
    max-width: 1800px;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
