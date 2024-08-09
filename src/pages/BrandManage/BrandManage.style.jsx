import styled from 'styled-components';
import { MdArrowDropDown } from 'react-icons/md';

export const BrandManageSection = styled.div`
    display: flex;
    width: 1920px;
    padding: 100px 200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

export const BrandManageFrame = styled.div`
    display: flex;
    width: 1200px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-12, 80px);
`;

export const TopFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    align-self: stretch;
`;

export const BottomFrame = styled.div`
    display: flex;
    width: 652px;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
`;

export const TitleFrame = styled.div`
    display: flex;
    width: 1200px;
    justify-content: space-between;
    align-items: flex-end;
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: var(--Text-size-10, 32px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 44.8px */
    letter-spacing: -0.64px;
`;

export const ContentFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;

    table {
        width: 100%;
        border-collapse: collapse; /* 이 옵션은 기본값으로, 셀 간의 간격을 없애는 역할을 합니다 */
    }

    td {
        padding: 15px; /* 셀 내부 패딩을 늘려 간격을 넓힙니다 */
        text-align: center; /* 셀 내부 텍스트 정렬 */
        color: var(--Color-Text-cto, #000);
        font-family: Pretendard;
        font-size: var(--Text-size-3, 14px);
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 19.6px */
        letter-spacing: -0.28px;
    }
    th {
        padding: 15px; /* 셀 내부 패딩을 늘려 간격을 넓힙니다 */
        text-align: center; /* 셀 내부 텍스트 정렬 */
        color: var(--Color-Text-primary, #222);
        font-family: Pretendard;
        font-size: var(--Text-size-6, 20px);
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 28px */
        letter-spacing: -0.4px;
    }
`;

export const Sort = styled.div`
    display: flex;
    height: 32px;
    padding: 7px 10px;
    align-items: center;
    gap: 4px;
    border-radius: 2px;
    color: var(--Color-Text-primary, #222);
    text-align: right;
    font-family: Pretendard;
    font-size: var(--Text-size-Number, 13px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 18.2px */
    letter-spacing: 0.26px;
`;

export const SubTitleFrame = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: var(--Text-size-6, 20px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: -0.4px;
`;

export const SubContentFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Text-size-6, 20px);
    align-self: stretch;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    color: var(--Color-Text-cto, #000);
    font-family: Pretendard;
    font-size: var(--Text-size-3, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
`;

export const TextFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Text-size-2, 12px);
    align-self: stretch;

    h1 {
        color: var(--Color-Text-primary, #222);
        font-family: Pretendard;
        font-size: var(--Text-size-10, 32px);
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 44.8px */
        letter-spacing: -0.64px;
    }

    h2 {
        color: var(--Color-Text-secondary, #616161);
        font-family: Pretendard;
        font-size: var(--Text-size-5, 18px);
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 25.2px */
        letter-spacing: -0.36px;
        white-space: nowrap;
    }
`;

export const ButtonFrame = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const Button = styled.button`
    display: flex;
    width: 282px;
    height: 140px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: var(--Color-Main-secondary, #ff8162);
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: var(--Text-size-9, 28px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 39.2px */
    letter-spacing: -0.56px;
`;

export const DesignedIcons = styled(MdArrowDropDown)`
    fill: var(--Color-Gray-gray-500, #9e9e9e);
    width: 11px;
    height: 10px;
`;

export const SortList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.08);
`;

export const SortElement = styled.div`
    display: flex;
    height: 30px;
    padding: 0px var(--Spacing-4, 16px);
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-bottom: 0.5px solid var(--Color-Gray-gray-500, #9e9e9e);
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 19.5px */
    letter-spacing: -0.26px;
`;
