import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import WritePageHeader from './WritePageHeader';
import WriteForm from './WriteForm';
import { postData } from '../../services/api';

const Write = () => {
    const [selectedCategory, setSelectedCategory] = useState(''); // 카테고리
    const [title, setTitle] = useState(''); // 글 제목
    const [content, setContent] = useState(''); // 글 본문
    const [images, setImages] = useState([]); // 이미지 배열
    const fileInputRef = useRef(null); // 파일 입력창에 접근

    const navigate = useNavigate();

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImages([...images, file]);
            setContent((prevContent) => `${prevContent}\n![이미지](${imageUrl})`);
        }
    };

    const handleRegisterClick = async () => {
        const formData = new FormData();
        formData.append('userId', 1); // 실제 사용자 ID를 설정
        formData.append('category', selectedCategory); // 선택된 카테고리 설정
        formData.append('title', title); // 입력된 제목 설정
        formData.append('content', content); // 입력된 본문 설정

        images.forEach((image) => {
            formData.append('image', image); // 이미지 파일 추가
        });

        try {
            const response = await postData('/posts/signin?directory=post', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.isSuccess) {
                alert('게시글이 성공적으로 등록되었습니다!');
                navigate(-1); // 등록 후 이전 페이지로 이동
            } else {
                alert('게시글 등록에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('서버와의 통신에 문제가 발생했습니다.');
        }
    };

    const handleCancelClick = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <WritePageContainer>
            <WritePageHeader
                onImageClick={handleImageClick}
                onCancelClick={handleCancelClick}
                onRegisterClick={handleRegisterClick}
                fileInputRef={fileInputRef}
                onFileChange={handleFileChange}
            />
            <WriteForm
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                title={title}
                onTitleChange={handleTitleChange}
                content={content}
                onContentChange={handleContentChange}
            />
        </WritePageContainer>
    );
};

export default Write;

const WritePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    min-height: 600px;
    overflow: auto;
    white-space: nowrap;
    box-sizing: border-box;
    padding-top: 80px;
`;
