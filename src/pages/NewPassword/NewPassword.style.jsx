import styled from 'styled-components';

export const NewpasswordSection = styled.div`
    display: flex;
    width: 100%;
    height: 700px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const NewpasswordContent = styled.div`
    display: flex;
    width: 1260px;
    padding: 10px 0px;
    justify-content: center;
    align-items: center;
`;

export const NewpasswordPane = styled.div`
    display: flex;
    width: 630px;
    padding: 50px 10px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
`;

export const NewpasswordFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
`;

export const NewpasswordWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-6, 32px);
    height: 100%;
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

    /* B1_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-5, 18px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
    white-space: nowrap;
`;

export const NewpasswordForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-6, 32px);
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-3, 8px);
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-1, 4px);
    align-self: stretch;

    .h1 {
        color: var(--Color-Text-primary, #222);

        /* B1_SB */
        font-family: Pretendard;
        font-size: var(--Text-size-5, 18px);
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 25.2px */
        letter-spacing: -0.36px;
    }

    .h2 {
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

export const InputField = styled.div`
    display: flex;
    width: 384px;
    padding: 18px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid var(--Color-Gray-gray-400, #bdbdbd);
`;

export const Input = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border: none;
`;
