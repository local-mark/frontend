import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import WritePageHeader from "./WritePageHeader";
import WriteForm from "./WriteForm";

const Write = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [title, setTitle] = useState(""); //글 제목
    const [content, setContent] = useState(""); //글 본문
    const [category, setCategory] = useState("1"); //카테고리
    const [imagePreview, setImagePreview] = useState(""); // 이미지 미리보기
    const [images, setImages] = useState([]); // 이미지 배열
    const fileInputRef = useRef(null); // 파일 입력창에 접근

    const navigate = useNavigate();
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const contentRef = useRef(null);

    const handleRegisterClick = async () => {
        const formData = new FormData();
        formData.append("userId", 1); // 실제 사용자 ID를 여기에 설정
        formData.append("category", category);
        formData.append("title", title);
        formData.append("content", content);

        images.forEach((image) => {
            formData.append("image", image);
        });

        try {
            const response = await axios.post("/posts/signin", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (response.data.isSuccess) {
                alert("게시글이 성공적으로 등록되었습니다!");
                navigate(-1); // 등록 후 커뮤니티 페이지로 이동
            } else {
                alert("게시글 등록에 실패했습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("서버와의 통신에 문제가 발생했습니다.");
        }
    };

    const handleCancelClick = () => {
        navigate(-1); // 이전 페이지
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
            setImagePreview(imageUrl);
            setContent((prevContent) => `${prevContent}\n![이미지](${imageUrl})`);
        }
    };

    const handleBoldClick = () => {
        const textarea = contentRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        if (start === end) return; // 텍스트 선택이 없을 때는 아무 동작도 하지 않음

        const selectedText = content.substring(start, end);
        const boldText = `**${selectedText}**`;

        setContent(content.slice(0, start) + boldText + content.slice(end));
    };

    return (
        <WritePageContainer>
            <WritePageHeader
                onImageClick={handleImageClick}
                onCancelClick={handleCancelClick}
                onRegisterClick={handleRegisterClick}
                fileInputRef={fileInputRef}
                onFileChange={handleFileChange}
                onBoldClick={handleBoldClick}
            />
            <WriteForm
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                title={title}
                onTitleChange={handleTitleChange}
                content={content}
                onContentChange={handleContentChange}
                imagePreview={imagePreview}
                contentRef={contentRef}
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
