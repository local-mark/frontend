import styled from 'styled-components';

export const NewModalBackground = styled.div`
    position: fixed; /* 추가 */
    top: 0; /* 추가 */
    left: 0; /* 추가 */
    bottom: 0;
    z-index: 1000; /* 추가 */
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
    overflow-y: auto; /* 추가: 내용이 넘칠 경우 스크롤 추가 */
`;

export const NewFrame = styled.div`
    position: relative;
    display: flex;
    width: 997px;
    padding: 60px var(--Spacing-12, 80px);
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--Color-Background-white, #fff);
`;

export const TopFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--Text-size-2, 12px);
    align-self: stretch;

    h1 {
        align-self: stretch;
        color: var(--Color-Text-primary, #222);
        text-align: center;
        font-family: Pretendard;
        font-size: var(--Text-size-9, 28px);
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 39.2px */
        letter-spacing: -0.56px;
    }

    h2 {
        color: var(--Color-Text-secondary, #616161);
        text-align: center;
        font-family: Pretendard;
        font-size: var(--Text-size-4, 16px);
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 22.4px */
        letter-spacing: -0.32px;
        width: 280px;
        height: 66px;
    }
`;

export const BottomFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
    align-self: stretch;
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: -0.4px;
`;

export const Button = styled.button`
    display: flex;
    width: 384px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 3px;
    background: var(--Color-Main-primary, #65bd83);
`;

export const ButtonLayer = styled.div`
    display: flex;
    padding: 16px 151px;
    justify-content: center;
    align-items: center;
    gap: var(--Spacing-2, 6px);
    align-self: stretch;
    border-radius: 1px;

    color: #fff;
    font-family: Pretendard;
    font-size: var(--Text-size-7, 22px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 30.8px */
    letter-spacing: -0.44px;
    white-space: nowrap;
`;

export const OneFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Text-size-6, 20px);
    align-self: stretch;
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: -0.4px;
`;

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
`;

export const LawFrame = styled.div`
    display: flex;
    align-items: flex-start;
    gap: var(--Spacing-5, 24px);
    align-self: stretch;
    flex: 1 0 0;
    color: var(--Color-Text-secondary, #616161);
    font-family: Pretendard;
    font-size: var(--Text-size-5, 18px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
`;

export const LawestFrame = styled.div`
    display: flex;
    width: 180px;
    height: 54px;
    padding: 10px 36px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: var(--Color-Brand-green-100, #bde2c8);
    white-space: nowrap;
`;

export const Xbutton = styled.button`
    width: 40px;
    height: 40px;
    position: absolute;
    left: 10px;
    top: 10px;
`;
