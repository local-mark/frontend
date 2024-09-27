import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../../services/api';

export default function RecentEvents() {
    const [recentEvents, setRecentEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecentEvents = async () => {
            try {
                const response = await fetchData('/morelocal/events/recent');
                if (response.isSuccess) {
                    setRecentEvents(response.result.events); // Ensure the correct property path
                } else {
                    console.error('Failed to fetch recent events:', response.message);
                }
            } catch (error) {
                console.error('Error fetching recent events:', error);
            }
        };

        fetchRecentEvents();
    }, []);

    const handleCardClick = (eventId) => {
        window.scrollTo(0, 0);
        navigate(`/morelocal/events/${eventId}`);
    };

    return (
        <RecentUpdateContainer>
            <RecentUpdateContent>최신 업데이트된 이벤트</RecentUpdateContent>
            <RecentUpdateContentContainer>
                {recentEvents.map((event) => (
                    <RecentUpdateWarpp key={event.event_id} onClick={() => handleCardClick(event.event_id)}>
                        <ContentImg src={event.thumbnail_url} alt={event.title} />
                        <PostTitle>{event.title}</PostTitle>
                    </RecentUpdateWarpp>
                ))}
            </RecentUpdateContentContainer>
        </RecentUpdateContainer>
    );
}

const RecentUpdateContainer = styled.div`
    width: 1200px;
    max-width: 1200px;
    height: 800px;
`;

const RecentUpdateContent = styled.div`
    width: 1200px;
    font-size: 32px;
    margin-bottom: 20px;
    margin-top: 10px;
`;

const RecentUpdateContentContainer = styled.div`
    width: 1200px;
    font-size: 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
`;

const RecentUpdateWarpp = styled.div`
    width: 384px;
    height: 329px;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const ContentImg = styled.img`
    width: 384px;
    height: 288px;
    object-fit: cover;
    margin-bottom: 10px;
`;

const PostTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;
