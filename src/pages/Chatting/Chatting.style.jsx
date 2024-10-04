// Chatting.style.js
import styled from 'styled-components';
import { FaCircle } from 'react-icons/fa';
import { AiOutlineMore } from 'react-icons/ai';

export const ChattingSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: var(--Color-Gray-gray-50, #fafafa);
`;

export const OpponentFrame = styled.div`
    display: flex;
    width: 384px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
    border: 1px solid var(--Color-Gray-gray-400, #bdbdbd);
    background: #fff;
`;

export const ChattingFrame = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const UserFrame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 384px;
    height: 110px;
    flex-shrink: 0;
    border: 1px solid var(--Color-Gray-gray-400, #bdbdbd);
`;

export const UserFrame2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 80%;
`;

export const DesignedIcons = styled(FaCircle)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: var(--Spacing-10, 64px);
    height: var(--Spacing-10, 64px);
    flex-shrink: 0;
    text-align: center;
    fill: #d9d9d9;
`;

export const DesignedIconsText = styled.div`
    margin-top: 10px;
    position: absolute; /* 텍스트를 절대 위치로 설정 */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 27px */
`;

export const IconWithText = styled.div`
    margin-top: 15px;
    position: relative; /* 텍스트를 아이콘 위에 배치하기 위해 상대 위치 설정 */
    width: 35px; /* 아이콘 크기와 맞춤 */
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SummarizeFrame = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    width: 100%;
    h1 {
        color: #000;
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 30px */
    }

    h2 {
        margin-top: 5px;
        color: #000;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 21px */
    }
`;

export const TopFrame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 816px;
    height: 110px;
    flex-shrink: 0;
    border: 1px solid var(--Color-Gray-gray-400, #bdbdbd);
    background: #fff;
`;

export const TopFrame2 = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 80%;
`;

export const DesignedIcons2 = styled(AiOutlineMore)`
    width: 60px;
    height: 30px;
    flex-shrink: 0;
`;

export const BottomFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 816px;
    height: 770px;
    flex-shrink: 0;
    background: #fff;
`;

export const ChatFrame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 763px;
    height: 165px;
    flex-shrink: 0;
    border-radius: 9px;
    border: 1px solid var(--Color-Gray-gray-900, #222);
    background: #fff;
`;

export const Chat = styled.div`
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
`;

export const ChatLayer = styled.textarea`
    width: 100%;
    height: 100%;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    resize: none; /* 사용자가 사이즈를 변경하지 못하게 함 */
    overflow-y: auto; /* 스크롤바가 필요할 때 자동으로 보이게 함 */
    padding: 10px;
    box-sizing: border-box;
    text-align: start; /* 텍스트를 상단 정렬 */
    border: none;
`;

export const ChatLayer2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
`;

export const GroupFrame = styled.div`
    width: 756px;
    height: 500px;
    flex-shrink: 0;
    margin-bottom: 13px;
    margin-top: 53px;
    overflow-y: auto; /* 세로 스크롤 활성화 */
`;

export const ButtonFrame = styled.button`
    display: inline-flex;
    padding: 10px 29px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    background: var(--Color-Brand-green-400, #48ac6f);
`;

export const ButtonLayer = styled.div`
    color: #fff;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
`;

export const LettersLayer = styled.div`
    margin-right: 10px;
    margin-top: 20px;
    color: var(--Color-Gray-gray-600, #757575);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
`;

export const BoxFrame = styled.div`
    height: 44px;
    flex-shrink: 0;
`;

export const TxtFrame = styled.div`
    display: inline-flex;
    padding: 10px var(--Text-size-5, 18px);
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 0px 100px 100px 37px;
    background: #e3eae5;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    white-space: nowrap;
`;

export const MsgFrame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    h1 {
        margin-top: 20px;
        margin-left: 5px;
        color: var(--Color-Gray-gray-700, #616161);
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 18px */
    }
`;
