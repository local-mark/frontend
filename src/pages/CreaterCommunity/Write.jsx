import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import imageIcon from "../../assets/image/CreaterCommunity/image_Button.png";
import Bold from "../../assets/image/CreaterCommunity/Bold_Button.png"
import Strikethrough from "../../assets/image/CreaterCommunity/strikethrough_Button.png"
import axios from "axios";
import { useRef } from "react";

const Write = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const [title, setTitle] = useState(""); //글 제목
    const [content, setContent] = useState(""); //글 본문
    const [category, setCategory] = useState("1"); //카테고리
    const [image, setImage] = useState(""); // 이미지 링크
    const fileInputRef = useRef(null); // 파일 입력창에 접근

    const navigate = useNavigate();


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleRegisterClick = async () => {
        const requestData = {
            userId: 1, // 실제 사용자 ID를 여기에 설정
            category: category,
            title: title,
            image: image, // 이미지 링크
            content: content,
        };

        try {
            const response = await axios.post("/posts", requestData);
            if (response.data.isSuccess) {
                alert("게시글이 성공적으로 등록되었습니다!");
                navigate("/creatercommunity"); // 등록 후 커뮤니티 페이지로 이동
            } else {
                alert("게시글 등록에 실패했습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("서버와의 통신에 문제가 발생했습니다.");
        }
    };

    const handleCancelClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            setContent((prevContent) => `${prevContent}\n![이미지](${imageUrl})`)
        }
    };

    return (
        <WritePageContainer>
            <WirtePageHeaderConatainer>
                <WritePageHeader>
                    <WritePageLeftMenu>
                        <img src={imageIcon} alt="image" onClick={handleImageClick} />
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                        <img src={Bold} alt="Bold" />
                        <img src={Strikethrough} alt="Strikethrough" />
                    </WritePageLeftMenu>
                    <WritePageRigthMenu>
                        <CancelButton onClick={handleCancelClick}>취소</CancelButton>
                        <RegisterButton onClick={handleRegisterClick}>등록</RegisterButton>
                    </WritePageRigthMenu>
                </WritePageHeader>
            </WirtePageHeaderConatainer>
            <WriteForm>
                <Dropdown onChange={handleCategoryChange} value={selectedCategory}>
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
                    onChange={handleTitleChange}
                >

                </TitleInput>
                <ContentInput
                    placeholder="본문을 입력하세요"
                    value={content}
                    onChange={handleContentChange}
                >
                </ContentInput>
                {image && <ImagePreview src={image} alt="미리보기 이미지" />}
            </WriteForm>
        </WritePageContainer>
    );
};
export default Write;

const WritePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    min-heigth: 600px;
    overflow: auto;
    white-space: nowrap;
    box-sizing: border-box;
    padding-top: 80px;
`

const WirtePageHeaderConatainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
`

const WritePageHeader = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    position: fixed; 
    top: 0; 
    left: 50%; 
    transform: translateX(-50%); 
    padding-left: 100px;
    padding-right: 100px;
    background-color: white;
    z-index: 1000; 
    padding-top: 10px;
`;

const WritePageLeftMenu = styled.div`
    width: 100%;
    gap: 10px;
    flex-direction: row;
    justify-items: center;

    img {
        width: 40px;
        height: 40px;
    }
`

const WritePageRigthMenu = styled.div`
    display: flex;
    gap: 10px;
`

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
    height: auto;
    line-height: 1.5;
    white-space: pre-wrap; 
    word-wrap: break-word; 
    height: auto;
    min-height: 900px;
    overflow-y: auto;
    resize: vertical;
`;

const WriteForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 1200px;
    margin: 0 auto;
    padding: 80px;
    box-sizing: border-box;
`;

const CancelButton = styled.button`
    background-color: white; /* Red */
    color: #65BD83;
    border: 1px solid #65BD83;
    width: 180px;
    height: 54px;
    border-radius: 3px;
`;

const RegisterButton = styled.button`
    background-color: #4caf50; /* Green */
    color: white;
    width: 180px;
    height: 54px;
    border-radius: 3px;
    &:hover {
        background-color: #388e3c; /* Darker Green */
    }
`;

const ImagePreview = styled.img`
    max-width: 100%;
    margin-top: 20px;
    border-radius: 10px;
`;
