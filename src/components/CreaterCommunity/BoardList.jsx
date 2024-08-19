import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PreviewImage from "../../assets/image/CreaterCommunity/profile.png";
import LikeImage from "../../assets/image/CreaterCommunity/Vector.png";
import CommentImage from "../../assets/image/CreaterCommunity/comment.png";


const BoardList = ({ title, posts }) => {
    if (!posts || posts.length === 0) {
        return <p>No posts available.</p>;
    }

    return (
        <BoardContainer>
            <ul>
                {posts.map((post) => (
                    <BoardListContainer>
                        <BoardDetailContainer>
                            <BoardCategory>{title}</BoardCategory>
                            <BoardTitle>
                                <StyledLink to={`/creatercommunity/chat/posts/${post.id}`}>{post.title}</StyledLink>
                            </BoardTitle>
                            <BoardContents>
                                <StyledLink to={`/creatercommunity/chat/posts/${post.id}`}>{post.content}</StyledLink>
                            </BoardContents>
                        </BoardDetailContainer>
                        <BoardImagePreview>
                            <BoardPreviewImage src={PreviewImage} alt="previewimage" />
                        </BoardImagePreview>
                        <BoardLikeCommentContainer>
                            <BoardLikeCommentWrapper>
                                <LikeContainer>
                                    <LikeImageContainer>
                                        <LikeImage1 src={LikeImage} alt="좋아요" />
                                    </LikeImageContainer>
                                    <LikeNum>
                                        10
                                    </LikeNum>
                                </LikeContainer>
                                <CommnetContainer>
                                    <CommentImageContainer>
                                        <CommentImage1 src={CommentImage} alt="댓글" />
                                    </CommentImageContainer>
                                    <CommentNum>
                                        10
                                    </CommentNum>
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
    align-items = center;
    min-height = 2400px;
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
    flex-direction: row;
    margin-top: 60px;
    flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color black;
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
`

const BoardImagePreview = styled.div`
    width: 282px;
    height: 212px;
`

const BoardPreviewImage = styled.img`
    width: 282px;
    height: 212px;
`

const BoardLikeCommentContainer = styled.div`
    width: 1200px;
    height: 22px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 2px;
`

const LikeContainer = styled.div`
    width: 38px;
    height: 22px;
    display: flex;
`
const LikeImageContainer = styled.div`
    width: 22px;
    height: 22px;
`
const LikeImage1 = styled.img`
    width: 22px;
    height: 22px;
`

const LikeNum = styled.div`
    width: 16px;
    height: 22px;
`
const CommnetContainer = styled.div`
    width: 38px;
    height: 22px;
    display: flex;
`

const CommentImageContainer = styled.div`
    width: 22px;
    height: 22px;
`

const CommentImage1 = styled.img`
    width: 22px;
    height: 22px;
`

const CommentNum = styled.div`
    width: 16px;
`

const BoardLikeCommentWrapper = styled.div`
    width: 92px;
    height: 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`