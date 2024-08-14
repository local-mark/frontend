import React from "react";
import styled from "styled-components";

const WriteForm = ({ selectedCategory, onCategoryChange, title, onTitleChange, content, onContentChange, imagePreview }) => (
    <WriteFormContainer>
        <Dropdown onChange={onCategoryChange} value={selectedCategory}>
            {selectedCategory === "" && (
                <option value="" disabled>
                    글의 카테고리를 선택해 주세요
                </option>
            )}
            <option value="1">잡담</option>
            <option value="2">질문</option>
            <option value="3">정보공유</option>
        </Dropdown>
        <TitleInput
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={onTitleChange}
        />
        <ContentInput
            placeholder="본문을 입력하세요"
            value={content}
            onChange={onContentChange}
        />
        {imagePreview && (
            <ImageContainer>
                <ResizableImage src={imagePreview} alt="미리보기 이미지" contentEditable={false} />
            </ImageContainer>
        )}
    </WriteFormContainer>
);

export default WriteForm;

const WriteFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 1200px;
    margin: 0 auto;
    padding: 80px;
    box-sizing: border-box;
`;

const Dropdown = styled.select`
    padding: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 3px;
    max-width: 306px;
    height: 50px;
`;

const TitleInput = styled.textarea`
    font-size: 40px;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 0;
    width: 100%;
    resize: none; 
    white-space: pre-wrap; 
    word-wrap: break-word; 
    overflow: hidden;
    height: 120px;
    padding-top: 24px;
    padding-bottom: 24px;
    line-height: 1.5;
    box-sizing: border-box;
    overflow-y: auto;
`;

const ContentInput = styled.textarea`
    font-size: 16px;
    border: none;
    width: 100%;
    resize: none;
    overflow: hidden;
    line-height: 1.5;
    white-space: pre-wrap; 
    word-wrap: break-word; 
    height: auto;
    min-height: 100px;
    overflow-y: auto;
    resize: vertical;
`;

const ImagePreview = styled.img`
    max-width: 100%;
    margin-top: 20px;
    border-radius: 10px;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    max-width: 1200px;
`;

const ResizableImage = styled.img`
    max-width: 100%;
    border-radius: 10px;
    resize: both;
    overflow: auto;
`;