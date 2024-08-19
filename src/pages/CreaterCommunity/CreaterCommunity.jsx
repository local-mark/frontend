import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import BoardList from '../../components/CreaterCommunity/BoardList';
import Write from './Write';
import samplePosts from './samplePosts';
import { useLocation } from 'react-router-dom';
import PageBar from '../../components/CreaterCommunity/PageBar';
import { NavLink } from 'react-router-dom';
import PostDetail from '../../components/CreaterCommunity/PostDetail';

const CreaterCommunity = ({ posts }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const location = useLocation();
    const postsPerPage = 5;
    const totalPages = Math.ceil(samplePosts.length / postsPerPage);

    const currentPosts = samplePosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <CreaterCommunityContainer>
            {!location.pathname.includes('/creatercommunity/write') && (
                <CreaterCommunityNavbar>
                    <CreaterCommunityTitle>크리에이터 커뮤니티</CreaterCommunityTitle>
                    <CreaterCommunityMenu>
                        <CreaterCommunityMenuItem to="chat">잡담</CreaterCommunityMenuItem>
                        <CreaterCommunityMenuItem to="questions">질문</CreaterCommunityMenuItem>
                        <CreaterCommunityMenuItem to="info">정보공유</CreaterCommunityMenuItem>
                    </CreaterCommunityMenu>
                    <WriteButtonConatiner>
                        <Link to="/creatercommunity/write">
                            <WriteButton>글쓰기</WriteButton>
                        </Link>
                    </WriteButtonConatiner>
                </CreaterCommunityNavbar>
            )}
            <CreaterCommunityContentConatainer>
                <Routes>
                    <Route
                        path="chat"
                        element={
                            <>
                                <BoardList title="잡담" posts={currentPosts} />
                                <PageBar
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            </>
                        }
                    />
                    <Route path="chat/posts/:id" element={<PostDetail posts={samplePosts} />} />
                    <Route
                        path="questions"
                        element={
                            <>
                                <BoardList title="질문" posts={currentPosts} />
                                <PageBar
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            </>
                        }
                    />
                    <Route
                        path="info"
                        element={
                            <>
                                <BoardList title="정보공유" posts={currentPosts} />
                                <PageBar
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            </>
                        }
                    />
                    <Route path="write" element={<Write />} />
                    <Route path="*" element={<Navigate to="/creatercommunity/chat" />} />
                </Routes>
            </CreaterCommunityContentConatainer>
        </CreaterCommunityContainer>
    );
};

export default CreaterCommunity;

const CreaterCommunityContainer = styled.div`
    width: 100%;
    min-heigth: 2400px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CreaterCommunityNavbar = styled.div`
    width: 1200px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const WriteButtonConatiner = styled.div`
    width: 1200px;
    max-width: 1200px;
    height: 41px;
    margin-left: auto;
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 30px;
`;

const WriteButton = styled.button`
    color: white;
    background-color: #ff8162;
    border: none;
    width: 94px;
    height: 41px;
    border-radius: 5px;
`;

const CreaterCommunityTitle = styled.div`
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    padding-top: 30px;
`;

const CreaterCommunityMenu = styled.div`
    width: 100%;
    display: flex;
    list-style: none;
    gap: 40px;
    text-align: center;
    justify-content: center;
    padding-top: 15px;
    font-weight: 300;
`;

const CreaterCommunityMenuItem = styled(NavLink)`
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 23.8px;
    white-space: nowrap;
    text-align: center;
    display: inline-block;
    color: black;

    &.active {
        color: #65bd83;
        border-bottom: 2px solid #65bd83;
    }
`;

const CreaterCommunityContentConatainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

