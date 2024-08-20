import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 200px 524px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.16);
    backdrop-filter: blur(4px);
    overflow-y: auto;
`;

export const Review = styled.div`
    display: flex;
    width: 872px;
    height: 1101px;
    padding: 40px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--Color-Background-white, #fff);
`;

export const SatisfyFrame = styled.div`
    display: flex;
    width: 260px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    height: 100%;
    color: var(--Color-Text-primary, #222);
    text-align: center;
    font-family: Pretendard;
    font-size: var(--Text-size-9, 28px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.56px;
`;

export const ImgFrame = styled.div`
    height: auto;
    flex-shrink: 0;
    background: var(--Color-Gray-gray-100, #f5f5f5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MainTextFrame = styled.div`
    display: flex;
    width: 792px;
    height: 345px;
    padding: var(--Text-size-6, 20px);
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 0.5px solid var(--Color-Gray-gray-400, #bdbdbd);
    background: #fff;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    height: 100%;
    width: 100%;
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: var(--Spacing-3, 8px);
    align-self: stretch;
`;

export const DesignedIcon = styled(FaStar)`
    width: 46px;
    height: 46px;
    fill: ${(props) => (props.filled ? '#65BD83' : 'var(--Color-Gray-gray-300, #e0e0e0)')};
    cursor: pointer;
`;

export const ImgWrapper = styled.div`
    display: flex;
    width: 384px;
    height: 384px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

export const ImgText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;

    .h1 {
        color: var(--Color-Text-secondary, #616161);
        font-family: Pretendard;
        font-size: var(--Text-size-6, 20px);
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: -0.4px;
        white-space: nowrap;
    }

    .h2 {
        color: var(--Color-Text-light1, #9e9e9e);
        text-align: center;
        font-family: Pretendard;
        font-size: var(--Text-size-4, 16px);
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: -0.32px;
    }
`;

export const ReviewButton = styled.button`
    display: flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    background: var(--Color-Main-primary, #65bd83);
    color: #fff;
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: -0.32px;
`;

export const MainText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 1 0 0;
`;

export const MaintextInput = styled.textarea`
    height: 280px;
    width: 100%;
    color: var(--Color-Text-secondary, #616161);
    font-family: Pretendard;
    font-size: var(--Text-size-6, 20px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.4px;
    text-align: left;
    border: none;
    resize: none;
`;

export const LetterNum = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    color: var(--Color-Text-light1, #9e9e9e);
    font-family: Pretendard;
    font-size: var(--Text-size-5, 18px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.36px;
`;

export const Button = styled.button`
    display: flex;
    width: 384px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 3px;
    border: 1px solid var(--Color-Main-primary, #65bd83);
`;

export const ButtonLayer = styled.div`
    display: flex;
    padding: 16px 151px;
    justify-content: center;
    align-items: center;
    gap: var(--Spacing-2, 6px);
    align-self: stretch;
    border-radius: 1px;
    color: var(--Color-Main-primary, #65bd83);
    font-family: Pretendard;
    font-size: var(--Text-size-7, 22px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: -0.44px;
`;

export const UploadedImage = styled.div`
    position: relative;
    width: 380px;
    height: 380px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
`;

export const DeleteButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
