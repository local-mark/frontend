import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PreviewImage from '../../assets/image/CreaterCommunity/profile.png';
import LikeImage from '../../assets/image/CreaterCommunity/Vector.png';
import CommentImage from '../../assets/image/CreaterCommunity/comment.png';
import { fetchData } from '../../services/api';

const BoardList = ({ title }) => {
    const { category } = useParams(); // URL 파라미터로부터 카테고리 값을 가져옴
    const [posts, setPosts] = useState([]); // 게시글 데이터를 저장할 상태
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태

    useEffect(() => {
        const loadPosts = async () => {
            try {
                setLoading(true);
                const data = await fetchData('/posts', { category, page: 1, limit: 10 });
                setPosts(data.result.postData); // 서버에서 받은 게시글 데이터를 상태에 저장
                setLoading(false);
            } catch (err) {
                console.error('Failed to fetch posts:', err);
                setError(err);
                setLoading(false);
            }
        };

        loadPosts();
    }, [category]); // 카테고리가 바뀔 때마다 데이터를 다시 불러옴

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!posts || posts.length === 0) {
        return <p>No posts available.</p>;
    }

    const getCategoryPath = (category) => {
        switch (category) {
            case '잡담':
                return 'chat';
            case '질문':
                return 'questions';
            case '정보공유':
                return 'info';
            default:
                return 'chat'; // 기본 경로 설정
        }
    };

    return (
        <BoardContainer>
            <ul>
                {posts.map((post) => (
                    <BoardListContainer key={post.postId}>
                        <BoardDetailContainer>
                            <BoardCategory>{title}</BoardCategory>
                            <BoardTitle>
                                <StyledLink
                                    to={`/creatercommunity/${getCategoryPath(post.category)}/posts/post/${post.postId}`}
                                >
                                    {post.title}
                                </StyledLink>
                            </BoardTitle>
                            <BoardContents>
                                <StyledLink
                                    to={`/creatercommunity/${getCategoryPath(post.category)}/posts/post/${post.postId}`}
                                >
                                    {post.content}
                                </StyledLink>
                            </BoardContents>
                        </BoardDetailContainer>
                        <BoardImagePreview>
                            <BoardPreviewImage
                                src={post.thumbnailFilename ? decodeURIComponent(post.thumbnailFilename) : PreviewImage}
                                alt="previewimage"
                            />
                        </BoardImagePreview>
                        <BoardLikeCommentContainer>
                            <BoardLikeCommentWrapper>
                                <LikeContainer>
                                    <LikeImageContainer>
                                        <LikeImage1 src={LikeImage} alt="좋아요" />
                                    </LikeImageContainer>
                                    <LikeNum>{post.likeNum}</LikeNum>
                                </LikeContainer>
                                <CommnetContainer>
                                    <CommentImageContainer>
                                        <CommentImage1 src={CommentImage} alt="댓글" />
                                    </CommentImageContainer>
                                    <CommentNum>{post.commentNum}</CommentNum>
                                </CommnetContainer>
                            </BoardLikeCommentWrapper>
                        </BoardLikeCommentContainer>
                    </BoardListContainer>
                ))}
            </ul>
        </BoardContainer>
    );
};

export default BoardList;

const BoardContainer = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 2400px;
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
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 60px;
    flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const BoardTitle = styled.li`
    width: 100%;
    font-size: 22px;
    margin-top: 15px;
`;

const BoardContents = styled.li`
    width: 100%;
    font-size: 14px;
`;

const BoardDetailContainer = styled.div`
    width: 918px;
`;

const BoardImagePreview = styled.div`
    width: 282px;
    height: 212px;
`;

const BoardPreviewImage = styled.img`
    width: 282px;
    height: 212px;
`;

const BoardLikeCommentContainer = styled.div`
    width: 1200px;
    height: 22px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 2px;
`;

const LikeContainer = styled.div`
    width: 38px;
    height: 22px;
    display: flex;
`;

const LikeImageContainer = styled.div`
    width: 22px;
    height: 22px;
`;

const LikeImage1 = styled.img`
    width: 22px;
    height: 22px;
`;

const LikeNum = styled.div`
    width: 16px;
    height: 22px;
`;

const CommnetContainer = styled.div`
    width: 38px;
    height: 22px;
    display: flex;
`;

const CommentImageContainer = styled.div`
    width: 22px;
    height: 22px;
`;

const CommentImage1 = styled.img`
    width: 22px;
    height: 22px;
`;

const CommentNum = styled.div`
    width: 16px;
`;

const BoardLikeCommentWrapper = styled.div`
    width: 92px;
    height: 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
