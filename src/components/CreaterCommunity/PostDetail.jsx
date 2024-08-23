import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Heart from "../../assets/image/CreaterCommunity/Vector.png";
import Comment from "../../assets/image/CreaterCommunity/comment.png";
import DownArrow from "../../assets/image/CreaterCommunity/downarrow.png";
import ReplyMark from "../../assets/image/CreaterCommunity/replymark.png";
import Profile from "../../assets/image/CreaterCommunity/profile.png";
import { fetchData, postData } from "../../services/api"; // postData 함수 추가


const PostDetail = () => {
    const { id } = useParams();  // URL에서 postId 가져오기
    const [post, setPost] = useState(null);  // 게시글 데이터를 저장할 상태
    const [likes, setLikes] = useState(0);  // 초기 좋아요 수
    const [liked, setLiked] = useState(false); // 좋아요 상태 추가 - 14번째 줄
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState(''); // 새로운 댓글 입력값
    const [comments, setComments] = useState([]);  // 댓글 데이터를 처리할 상태

    const [replyInputVisible, setReplyInputVisible] = useState({});
    const [loading, setLoading] = useState(true);  // 로딩 상태
    const [error, setError] = useState(null);  // 에러 상태

    useEffect(() => {
        const fetchPostDetail = async () => {
            try {
                const response = await fetchData(`/posts/post/${id}`);  // 게시글 데이터 가져오기

                if (response.isSuccess) {
                    setPost(response.result);
                    setLikes(response.result.likeNum || 0);  // 좋아요 수 설정
                } else {
                    console.error('Failed to fetch post data:', response.message);
                    setError(new Error('Failed to fetch post data'));
                }

                setLoading(false);
            } catch (err) {
                console.error('Error fetching post data:', err);
                setError(err);
                setLoading(false);
            }
        };
        fetchPostDetail();
    }, [id]);

    const navigate = useNavigate();

    const handleReturnClick = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    const handleLikeClick = async () => { // 좋아요 로직 추가 - 46번째 줄
        try {
            if (liked) {
                // 이미 좋아요가 눌린 상태라면 취소
                const response = await postData(`/likes/${id}/posts`, { user_id: 1 });
                if (response.isSuccess) {
                    setLikes(likes - 1);
                    setLiked(false);
                }
            } else {
                // 좋아요 추가
                const response = await postData(`/likes/${id}/posts`, { user_id: 1 });
                if (response.isSuccess) {
                    setLikes(likes + 1);
                    setLiked(true);
                }
            }
        } catch (error) {
            console.error('Error updating like status:', error);
        }
    };

    const handleNewCommentChange = (event) => {
        setNewComment(event.target.value); // 입력된 댓글 값 업데이트
    };

    const handleAddComment = async () => {
        if (newComment.trim() !== "") {
            const newCommentData = {
                userId: 1, // 임시로 설정된 사용자 ID (실제 사용자 ID를 여기에 넣으세요)
                parentId: null, // 부모 댓글이 없을 경우 null
                content: newComment,
            };

            try {
                const response = await postData(`/comments/${id}/posts`, newCommentData); // API 호출

                if (response.isSuccess) {
                    // 새로운 댓글을 기존 댓글 리스트에 추가
                    const addedComment = {
                        ...newCommentData,
                        id: response.result.insertId, // API 응답에서 받은 insertId 사용
                        createdDate: new Date().toLocaleDateString(), // 현재 날짜
                        children: [], // 대댓글 목록 초기화
                    };
                    setComments([...comments, addedComment]);
                    setNewComment(""); // 입력 필드 초기화
                } else {
                    console.error("Failed to add comment:", response.message);
                }
            } catch (err) {
                console.error("Error adding comment:", err);
            }

        }
    };

    const toggleReplyInput = (index) => {
        setReplyInputVisible((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleAddReply = async (index, replyText) => {
        if (replyText.trim() !== "") {
            const replyData = {
                userId: 1, // 임시로 설정된 사용자 ID (실제 사용자 ID를 여기에 넣으세요)
                parentId: comments[index].id, // 부모 댓글의 ID 설정
                content: replyText,
            };

            try {
                const response = await postData(`/comments/${id}/posts`, replyData); // API 호출

                if (response.isSuccess) {
                    // 새로운 대댓글을 해당 부모 댓글의 대댓글 목록에 추가
                    const addedReply = {
                        ...replyData,
                        id: response.result.insertId, // API 응답에서 받은 insertId 사용
                        createdDate: new Date().toLocaleDateString(), // 현재 날짜
                        children: [], // 대댓글의 자식 목록 초기화
                    };
                    const updatedComments = [...comments];
                    updatedComments[index].children.push(addedReply); // 부모 댓글의 대댓글 목록에 추가
                    setComments(updatedComments);
                } else {
                    console.error("Failed to add reply:", response.message);
                }
            } catch (err) {
                console.error("Error adding reply:", err);
            }
        }

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <PostDetailContainer>
            <PostDetailCategoryContainer>
                <BoardCategory>{post.category}</BoardCategory>
            </PostDetailCategoryContainer>
            <PostDetailTitleContainer>{post.title}</PostDetailTitleContainer>
            <PostDetailAuthorDateContainer>
                <p>Author: {post.author.name}</p>
                <img src={post.author.user_img_url} alt="Author profile" width={50} />
                <p>Date: {post.createdAt}</p>
            </PostDetailAuthorDateContainer>
            <PostDetailContentContainer>
                {post.content}
                {post.imagesData && post.imagesData.map((image, index) => (
                    <PostImage key={index} src={`https://your-image-server-url/${image.filename}`} alt="Post Image" />
                ))}
            </PostDetailContentContainer>
            <ReturnButtonContainer>
                <ReturnButton onClick={handleReturnClick}>&lt; 목록으로 돌아가기</ReturnButton>
            </ReturnButtonContainer>
            <LikeCommentContainer>
                <Likebutton onClick={handleLikeClick}>
                    <img src={Heart} alt="Heart" /> {likes}
                </Likebutton>
                <CommentToggleButton onClick={toggleComments}>
                    <img src={Comment} alt="Comment" />
                    {comments.length}
                    <img src={DownArrow} alt="downarrow" />
                </CommentToggleButton>
                {showComments && (
                    <CommentsContainer>
                        <CommentsNum>댓글 {comments.length}</CommentsNum>

                        {comments.map((comment, index) => (
                            <CommentComponent
                                key={comment.id}
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
                            <AddCommentButton onClick={handleAddComment}>
                                등록
                            </AddCommentButton>
                        </NewCommentContainer>
                    </CommentsContainer>
                )}
            </LikeCommentContainer>
            <AuthorContainer>
                <AuthorWrapper>
                    <BrandContainer brandId={post.brandId} />
                </AuthorWrapper>
            </AuthorContainer>
            <RecentUpdateContainer>
                <RecentUpdateContent>최신 업데이트된 글</RecentUpdateContent>
                <RecentUpdateContentContainer>
                    <RecentUpdateWrapper>
                        <ContentImg src={Profile} alt="임시이미지" />
                        로컬 크레이에이티브 2024 행사 다녀왔어요~!
                    </RecentUpdateWrapper>
                    <RecentUpdateWrapper>
                        <ContentImg src={Profile} alt="임시이미지" />
                        로컬 크레이에이티브 2024 행사 다녀왔어요~!
                    </RecentUpdateWrapper>
                    <RecentUpdateWrapper>
                        <ContentImg src={Profile} alt="임시이미지" />
                        로컬 크레이에이티브 2024 행사 다녀왔어요~!
                    </RecentUpdateWrapper>
                    <RecentUpdateWrapper>
                        <ContentImg src={Profile} alt="임시이미지" />
                        로컬 크레이에이티브 2024 행사 다녀왔어요~!
                    </RecentUpdateWrapper>
                    <RecentUpdateWrapper>
                        <ContentImg src={Profile} alt="임시이미지" />
                        로컬 크레이에이티브 2024 행사 다녀왔어요~!
                    </RecentUpdateWrapper>
                    <RecentUpdateWrapper>
                        <ContentImg src={Profile} alt="임시이미지" />
                        로컬 크레이에이티브 2024 행사 다녀왔어요~!
                    </RecentUpdateWrapper>
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

const RecentUpdateWrapper = styled.div`
    width: 384px;
    height: 329px;
    font-size: 18px;
`;

const ContentImg = styled.img`
    width: 384px;
    height: 288px;
`;
