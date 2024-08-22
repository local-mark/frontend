import styled from 'styled-components';
import { RiImageAddLine } from 'react-icons/ri';

export const RegistSection = styled.div`
    display: flex;
    width: 100%;
    padding: 100px 200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

export const RegistFrame = styled.div`
    display: flex;
    width: 792px;
    flex-direction: column;
    gap: 40px;
    color: var(--Color-Text-primary, #222);
    text-align: center;
    font-family: Pretendard;
    font-size: var(--Text-size-10, 32px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
    letter-spacing: -0.64px;
`;

export const DownFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--Spacing-12, 80px);
    align-self: stretch;
`;

export const Img = styled.image`
    display: flex;
    width: 228px;
    height: 228px;
    justify-content: center;
    align-items: center;
    border: 0.5px solid var(--Color-Gray-gray-800, #424242);
    background: #fff;
    cursor: pointer;
`;

export const DesignedIcons = styled(RiImageAddLine)`
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    opacity: 0.5;
`;

export const FormFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
    align-self: stretch;
`;

export const ButtonFrame = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-3, 8px);
    align-self: stretch;

    .title-wrapper {
        display: flex;
        align-items: center;
        gap: 8px; /* 간격을 조정 */
    }

    h1 {
        color: var(--Color-Text-primary, #222);

        /* B1_SB */
        font-family: Pretendard;
        font-size: var(--Text-size-5, 18px);
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 25.2px */
        letter-spacing: -0.36px;
    }

    h2 {
        color: var(--Color-Text-light1, #9e9e9e);

        /* B1_SB */
        font-family: Pretendard;
        font-size: var(--Text-size-5, 18px);
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
        letter-spacing: -0.36px;
    }
`;

export const InputField = styled.div`
    display: flex;
    padding: var(--Text-size-5, 18px) 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 10px;
    border: 1px solid var(--Color-Gray-gray-400, #bdbdbd);
`;

export const TextLayer = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border: none;
    color: var(--Color-Text-light1, #9e9e9e);

    /* B4_M */
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
`;

export const RequestButton = styled.button`
    display: flex;
    padding: 6px 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-2, 6px);
    border-radius: 3px;
    background: var(--Color-Main-primary, #65bd83);
    color: #fff;
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
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

export const StateLayer = styled.div`
    display: flex;
    padding: 16px 151px;
    justify-content: center;
    align-items: center;
    gap: var(--Spacing-2, 6px);
    align-self: stretch;
    color: var(--Color-Main-primary, #65bd83);

    /* B1_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-5, 18px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
    white-space: nowrap;
`;
