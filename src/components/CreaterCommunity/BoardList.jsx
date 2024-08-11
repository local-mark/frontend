import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const BoardList = ({ posts }) => {
    if (!posts || posts.length === 0) {
        return <p>No posts available.</p>;
    }

    return (
        <BoardContainer>
            <ul>
                {posts.map((post) => (
                    <BoardListContainer>
                        <BoardCategory>{title}</BoardCategory>
                        <BoardContents>
                            <StyledLink to={`/creatercommunity/chat/posts/${post.id}`}>{post.title}</StyledLink>
                        </BoardContents>
                    </BoardListContainer>
                ))}
            </ul>
        </BoardContainer>
    );
};

export default BoardList;

const BoardContainer = styled.div`
    width: 100%
    display: flex;
    flex-direction: column;
    align-items = center;
`;

const BoardCategory = styled.button`
    color: white;
    background-color: #65bd83;
    border-radius: 5px;
    width: 95px;
    height: 34px;
    margin-right: auto;
`;

const BoardListContainer = styled.div`
    width: 1200px;
    display: flex;
    justify-content = center;
    align-items = center;
    flex-direction: column;
    margin-top: 60px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color black;
`;

const BoardContents = styled.li`
    width: 1200px;
`;
