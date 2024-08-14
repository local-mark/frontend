import React from "react";
import styled from "styled-components";
import imageIcon from "../../assets/image/CreaterCommunity/image_Button.png";
import Bold from "../../assets/image/CreaterCommunity/Bold_Button.png";
import Strikethrough from "../../assets/image/CreaterCommunity/strikethrough_Button.png";

const WritePageHeader = ({ onImageClick, onCancelClick, onRegisterClick, fileInputRef, onFileChange }) => (
    <WritePageHeaderContainer>
        <WritePageLeftMenu>
            <img src={imageIcon} alt="image" onClick={onImageClick} />
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={onFileChange}
            />
            <img src={Bold} alt="Bold" />
            <img src={Strikethrough} alt="Strikethrough" />
        </WritePageLeftMenu>
        <WritePageRightMenu>
            <CancelButton onClick={onCancelClick}>취소</CancelButton>
            <RegisterButton onClick={onRegisterClick}>등록</RegisterButton>
        </WritePageRightMenu>
    </WritePageHeaderContainer>
);

export default WritePageHeader;

const WritePageHeaderContainer = styled.div`
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
`;

const WritePageRightMenu = styled.div`
    display: flex;
    gap: 10px;
`;

const CancelButton = styled.button`
    background-color: white; 
    color: #65BD83;
    border: 1px solid #65BD83;
    width: 180px;
    height: 54px;
    border-radius: 3px;
`;

const RegisterButton = styled.button`
    background-color: #4caf50; 
    color: white;
    width: 180px;
    height: 54px;
    border-radius: 3px;
    &:hover {
        background-color: #388e3c;
    }
`;
