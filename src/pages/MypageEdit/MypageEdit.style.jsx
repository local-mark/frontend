import styled from 'styled-components';

export const MypageeditSection = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const MypageeditContent = styled.div`
    display: flex;
    width: 1260px;
    padding: 10px 0px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`;

export const MypageeditPane = styled.div`
    display: flex;
    width: 630px;
    padding: 50px 10px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
`;

{
    /* 384px 지웠음 */
}
export const MypageeditFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
    height: 100%;
`;

export const MypageeditWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-6, 32px);
    color: var(--Color-Text-primary, #222);

    /* ST1_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-7, 22px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 30.8px */
    letter-spacing: -0.44px;
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
    white-space: nowrap;

    /* B1_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-5, 18px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
`;

export const MypageeditTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-6, 32px);
`;

export const MypageeditBottom = styled.div`
    display: flex;
    width: 275px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    color: var(--Color-Text-secondary, #616161);
    font-family: Pretendard;
    font-size: var(--Text-size-3, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;

    .h6 {
        text-decoration-line: underline;
    }
`;

export const IdFrame = styled.div`
    display: flex;
    width: 384px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
`;

export const PwFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-3, 8px);
    width: 443px;
`;

export const FormFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-3, 8px);
    align-self: stretch;
    color: var(--Color-Text-primary, #222);

    /* B1_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-5, 18px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
`;

export const InputField = styled.div`
    display: flex;
    padding: 18px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 10px;
    border: 1px solid var(--Color-Gray-gray-400, #bdbdbd);
    width: 384px;
`;

export const Input = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    color: var(--Color-Text-primary, #222);

    /* B4_M */
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
    border: none;
`;

export const EditButton = styled.div`
    color: var(--Color-Text-light1, #9e9e9e);

    /* B7_R */
    font-family: Pretendard;
    font-size: var(--Text-size-3, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
    display: flex;
    margin-left: auto;
    margin-top: 10px; /* optional */
`;

export const TempFrame = styled.div`
    display: flex;
    width: 100%;
`;

export const TempFrame2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .h6 {
        color: var(--Color-Text-secondary, #616161);

        /* B7_R */
        font-family: Pretendard;
        font-size: var(--Text-size-3, 14px);
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 19.6px */
        letter-spacing: -0.28px;
    }
`;

export const TempFrame3 = styled.div`
    display: flex;
    align-items: center;
    gap: var(--Spacing-3, 8px);
`;

export const OkButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 5px;
    background: var(--Color-Main-primary, #65bd83);
    white-space: nowrap;
    width: 41px;
`;

export const OkbuttonLayer = styled.div`
    display: flex;
    padding: var(--Spacing-3, 8px) 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    color: #fff;
    white-space: nowrap;

    /* B9_M */
    font-family: Pretendard;
    font-size: var(--Text-size-2, 12px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 16.8px */
    letter-spacing: -0.24px;
`;

export const AgreeFrame = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    color: var(--Color-Text-primary, #222);

    /* B6_M */
    font-family: Pretendard;
    font-size: var(--Text-size-3, 14px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
    white-space: nowrap;
`;

export const Checkbox = styled.input`
    width: var(--Text-size-6, 20px);
    height: var(--Text-size-6, 20px);
    accent-color: black;
`;
