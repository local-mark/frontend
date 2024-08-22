import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../../services/api';

export default function RecentLetters() {
    const [recentPosts, setRecentPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                const response = await fetchData('/morelocal/letters/recent');
                if (response.isSuccess) {
                    setRecentPosts(response.result.letters);
                } else {
                    console.error('Failed to fetch recent posts:', response.message);
                }
            } catch (error) {
                console.error('Error fetching recent posts:', error);
            }
        };

        fetchRecentPosts();
    }, []);

    const handleCardClick = (letterId) => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
        navigate(`/morelocal/letters/${letterId}`);
    };

    return (
        <RecentUpdateContainer>
            <RecentUpdateContent>최신 업데이트된 글</RecentUpdateContent>
            <RecentUpdateContentContainer>
                {recentPosts.map((post) => (
                    <RecentUpdateWarpp key={post.letter_id} onClick={() => handleCardClick(post.letter_id)}>
                        <ContentImg src={post.thumbnail_url} alt={post.title} />
                        <PostTitle>{post.title}</PostTitle>
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
