import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Heart from '../../assets/image/CreaterCommunity/Vector.png';
import Comment from '../../assets/image/CreaterCommunity/comment.png';
import DownArrow from '../../assets/image/CreaterCommunity/downarrow.png';
import ReplyMark from '../../assets/image/CreaterCommunity/replymark.png';
import Profile from '../../assets/image/CreaterCommunity/profile.png';
import BrandContainer from './SellerBrandContainer'; // BrandContainer import

const PostDetail = ({ posts }) => {
    const { id } = useParams();
    const { brandId } = useParams();
    const post = posts.find((post) => post.id === parseInt(id));
    const [likes, setLikes] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);
    const [replyInputVisible, setReplyInputVisible] = useState({});

    const navigate = useNavigate();

    const handleReturnClick = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    const handleLikeClick = () => {
        setLikes(likes + 1);
    };

    const handleNewCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            const newCommentData = {
                text: newComment,
                author: 'BrandName',
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                replies: [],
            };
            setComments([...comments, newCommentData]);
            setNewComment('');
        }
    };

    const toggleReplyInput = (index) => {
        setReplyInputVisible((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleAddReply = (index, replyText) => {
        const updatedComments = [...comments];
        const replyData = {
            text: replyText,
            author: 'BrandName',
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        };
        updatedComments[index].replies.push(replyData);
        setComments(updatedComments);
    };

    const toggleComments = () => {
        setShowComments((prevState) => !prevState);
    };

    const getCategoryName = (category) => {
        switch (category) {
            case '1':
                return '잡담';
            case '2':
                return '질문';
            case '3':
                return '정보공유';
            default:
                return '잡담';
        }
    };

    const categoryName = getCategoryName(post.category);

    if (!post) {
        return <p>Post not found.</p>;
    }

    return (
        <PostDetailContainer>
            <PostDetailCategoryContainer>
                <BoardCategory>{categoryName}</BoardCategory>
            </PostDetailCategoryContainer>
            <PostDetailTitleContainer>{post.title}</PostDetailTitleContainer>
            <PostDetailAuthorDateContainer>
                <p>Author: {post.author}</p>
                <p>Date: {post.date}</p>
            </PostDetailAuthorDateContainer>
            <PostDetailContentContainer>{post.content}</PostDetailContentContainer>
            <ReturnButtonContainer>
                <ReturnButton onClick={handleReturnClick}>&lt; 목록으로 돌아가기</ReturnButton>
            </ReturnButtonContainer>
            <LikeCommentContainer>
                <Likebutton onClick={handleLikeClick}>
                    <img src={Heart} alt="Heart" /> {likes}
                </Likebutton>
                <CommentToggleButton onClick={toggleComments}>
                    <img src={Comment} alt="Comment" />
                    10
                    <img src={DownArrow} alt="downarrow" />
                </CommentToggleButton>
                {showComments && (
                    <CommentsContainer>
                        <CommentsNum>댓글 0</CommentsNum>
                        {comments.map((comment, index) => (
                            <CommentComponent
                                key={index}
                                comment={comment}
                                index={index}
                                replyInputVisible={replyInputVisible}
                                toggleReplyInput={toggleReplyInput}
                                handleAddReply={handleAddReply}
                            />
                        ))}
                        <NewCommentContainer>
                            <NewCommentInput
                                placeholder="댓글을 입력하세요"
                                value={newComment}
                                onChange={handleNewCommentChange}
                            />
                            <AddCommentButton onClick={handleAddComment}>등록</AddCommentButton>
                        </NewCommentContainer>
                    </CommentsContainer>
                )}
            </LikeCommentContainer>
            <AuthorContainer>
                <AuthorWrapper>
                    {/* BrandContainer에 brandId 전달 */}
                    <BrandContainer brandId={post.brandId} />
                </AuthorWrapper>
            </AuthorContainer>
            <RecentUpdateContainer>
                <RecentUpdateContent>최신 업데이트된 글</RecentUpdateContent>
                <RecentUpdateContentContainer>
                    <RecentUpdateWarpp>
                        <ContentImg src={Profile} alt="임시이미지" />
                        로컬 크레이에이티브 2024 행사 다녀왔어요~!
                    </RecentUpdateWarpp>
                    <RecentUpdateWarpp>
                        <ContentImg src={Profile} alt="임시이미지" />
                        로컬 크레이에이티브 2024 행사 다녀왔어요~!
                    </RecentUpdateWarpp>
                    <RecentUpdateWarpp>
                        <ContentImg src={Profile} alt="임시이미지" />
                        로컬 크레이에이티브 2024 행사 다녀왔어요~!
                    </RecentUpdateWarpp>
                    <RecentUpdateWarpp>
                        <ContentImg src={Profile} alt="임시이미지" />
                        로컬 크레이에이티브 2024 행사 다녀왔어요~!
                    </RecentUpdateWarpp>
                    <RecentUpdateWarpp>
                        <ContentImg src={Profile} alt="임시이미지" />
                        로컬 크레이에이티브 2024 행사 다녀왔어요~!
                    </RecentUpdateWarpp>
                    <RecentUpdateWarpp>
                        <ContentImg src={Profile} alt="임시이미지" />
                        로컬 크레이에이티브 2024 행사 다녀왔어요~!
                    </RecentUpdateWarpp>
                </RecentUpdateContentContainer>
            </RecentUpdateContainer>
        </PostDetailContainer>
    );
};
export default PostDetail;

// Comment 컴포넌트 정의 (댓글 요소)
const CommentComponent = ({ comment, index, replyInputVisible, toggleReplyInput, handleAddReply }) => (
    <CommentContainer>
        <CommentHeader>
            <img src={Profile} alt="프로필" />
            <CommentInfo>
                <CommentAuthor>{comment.author}</CommentAuthor>
                <CommentDate>
                    {comment.date} {comment.time}
                </CommentDate>
            </CommentInfo>
        </CommentHeader>
        <CommentText>{comment.text}</CommentText>
        <ReplyButton onClick={() => toggleReplyInput(index)}>답글</ReplyButton>
        {replyInputVisible[index] && (
            <ReplyInputContainer>
                <img src={ReplyMark} alt="replymark" />
                <ReplyInputWrapper>
                    <ReplyInput
                        placeholder="답글을 입력하세요"
                        onKeyPress={(e) => {
                            if (e.key === 'Enter' && e.target.value.trim()) {
                                handleAddReply(index, e.target.value);
                                e.target.value = '';
                            }
                        }}
                    />
                    <AddReplyButton onClick={() => handleAddReply(index, e.target.value)}>등록</AddReplyButton>
                </ReplyInputWrapper>
            </ReplyInputContainer>
        )}
        {comment.replies.map((reply, replyIndex) => (
            <ReplyComponent key={replyIndex} reply={reply} />
        ))}
    </CommentContainer>
);

// Reply 컴포넌트 정의 (답글 요소)
const ReplyComponent = ({ reply }) => (
    <ReplyContainer>
        <ReplyHeader>
            <img src={Profile} alt="프로필" />
            <ReplyInfo>
                <ReplyAuthor>{reply.author}</ReplyAuthor>
                <ReplyDate>
                    {reply.date} {reply.time}
                </ReplyDate>
            </ReplyInfo>
        </ReplyHeader>
        <ReplyText>{reply.text}</ReplyText>
    </ReplyContainer>
);
const PostDetailContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-align: center;
    align-items: center;
    min-height: 600px;
`;

const PostDetailCategoryContainer = styled.div`
    width: 100%;
    max-width: 1200px;
`;

const BoardCategory = styled.button`
    color: white;
    background-color: #65bd83;
    border-radius: 5px;
    width: 95px;
    height: 34px;
    margin-right: auto;
    margin-top: 80px;
`;

const PostDetailTitleContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-align: center;
    font-size: 32px;
    margin-top: 12px;
    margin-bottom: 12px;
`;
const PostDetailAuthorDateContainer = styled.div`
    width: 100%;
    display: flex;
    max-width: 1200px;
    justify-content: start;
    margin-top: 12px;
    border-bottom: 2px solid #ccc;
    padding-bottom: 40px;
`;

const PostDetailContentContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-top: 40px;
    border-bottom: 2px solid #ccc;
    padding-bottom: 80px;
`;

const ReturnButtonContainer = styled.div`
    width: 1200px;
    justify-content: start;
    display: flex;
    margin-bottom: 40px;
`;

const ReturnButton = styled.button`
    color: black;
    font-size: 20px;
    width: 200px;
    height: 40px;
    display: flex;
    background: none;
    cursor: pointer;
    text-algin: left;
    justify-content: start;
`;

const LikeCommentContainer = styled.div`
    width: 1200px;
    display flex;
    margin-bottom: 20px;

`;

const Likebutton = styled.button`
    width: 94px;
    height: 46px;
    font-size: 24px;
    border: solid 1px black;
    border-radius: 5px;
    margin-right: 24px;
`;

const CommentToggleButton = styled.button`
    width: 130px;
    height: 46px;
    font-size: 24px;
    border: solid 1px black;
    border-radius: 5px;
`;
const CommentsContainer = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
`;
const CommentsNum = styled.div`
    width: 1200px;
    font-size: 24px;
    margin: 20px 0;
    border-bottom: 2px solid #ccc;
    padding-right: 100px;
`;
const CommentContainer = styled.div`
    margin-bottom: 20px;
`;

const CommentText = styled.p`
    margin: 0;
`;

const ReplyButton = styled.button`
    background: none;
    border: solid 1px black;
    color: black;
    cursor: pointer;
    font-size: 16px;
    border-radius: 2px;
    width: 52px;
    height: 30px;
    &:hover {
        color: #388e3c;
    }
`;

const AddReplyButton = styled.button`
    background-color: #65bd83;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 55px;
    height: 37px;
    margin-top: 5px;
    &:hover {
        background-color: #388e3c;
    }
`;

const ReplyInputContainer = styled.div`
    width: 1200px;
    background-color: #fafafa;
    display: flex;
    justify-items: center;
    align-items: center;
`;

const ReplyInput = styled.input`
    width: 1100px;
    border: none;
    background-color: white;
    height: 40px;
    margin-top: 10px;
`;

const Reply = styled.div`
    margin-top: 10px;
    margin-left: 20px;
`;

const ReplyText = styled.p`
    margin: 0;
`;

const NewCommentContainer = styled.div`
    display: flex;
    margin-top: 20px;
    border: 1px solid #bdbdbd;
    justify-items: center;
    align-items: center;
`;

const NewCommentInput = styled.input`
    width: 100%;
    max-width: 1100px;
    padding: 10px;
    border: none;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const ReplyInputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #bdbdbd;
    justify-items: center;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    width: 1200px;
`;

const AddCommentButton = styled.button`
    margin-left: 10px;
    background-color: #65bd83;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 55px;
    height: 37px;

    &:hover {
        background-color: #388e3c;
    }
`;
const CommentHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const CommentInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const CommentAuthor = styled.div`
    font-weight: bold;
`;

const CommentDate = styled.div`
    font-size: 12px;
    color: gray;
`;

const ReplyHeader = styled(CommentHeader)`
    margin-top: 10px;
`;

const ReplyInfo = styled(CommentInfo)``;

const ReplyAuthor = styled(CommentAuthor)``;

const ReplyDate = styled(CommentDate)``;

const AuthorContainer = styled.div`
    width: 100%;
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
`;

const AuthorWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    heigth: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LocationButton = styled.button`
    width: 65px;
    height: 34px;
    background-color: #65bd83;
    border: none;
    border-radius: 5px;
    color: white;
`;

const BrandLinkButton = styled.button`
    width: 323px;
    height: 65px;
    background-color: #ff8162;
    color: white;
    border-radius: 100px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const AutorProfile = styled.div`
    width: 300px;
    justify-content: center;
    align-items: center;
`;

const BottomProfile = styled.img`
    width: 180px;
    height: 180px;
`;

const LocationButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Brand = styled.div`
    width: 100%
    font-size: 24px;
`;
const BrandInfo = styled.div`
    width: 100%
    font-size: 16px;
`;

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
`;

const ContentImg = styled.img`
    width: 384px;
    height: 288px;
`;
