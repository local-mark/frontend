import styled from 'styled-components';

export const LoginSection = styled.div`
    display: flex;
    width: 100%;
    height: 700px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const LoginContent = styled.div`
    display: flex;
    width: 1260px;
    height: 700px;
    padding: 10px 0px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`;

export const LoginSpace = styled.div`
    display: flex;
    padding: 50px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`;

export const Form = styled.div`
    display: flex;
    width: 610px;
    height: 628px;
    padding: 30px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const FormContent = styled.div`
    display: flex;
    height: 515px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    align-self: stretch;
`;

export const UserType = styled.div`
    display: flex;
    padding: 3px;
    justify-content: center;
    align-items: center;
    gap: 3px;
    border-radius: 100px;
    border: 1px solid var(--Color-Text-cto, #000);
    background: #f6f6f6;
`;

export const ConsumerButton = styled.button`
    display: flex;
    padding: 13px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    border-radius: 50px;
    background: var(--Color-Text-cto, #000);
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const CreatorButton = styled.button`
    display: flex;
    padding: 13px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    border-radius: 50px;
    border: 1px solid var(--Color-Text-cto, #000);
    background: #fff;
    color: var(--Color-Text-cto, #000);
    text-align: center;
    font-family: Roboto;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const InputContainer = styled.div`
    display: flex;
    height: 109px;
    padding: 10px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
    align-self: stretch;
    color: var(--Color-Text-cto, #000);
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%; /* 28.125px */
`;

export const Input = styled.input`
    height: 50px;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 5px;
    border: 1px solid var(--Color-Text-cto, #000);
    background: #fff;
`;

export const RememberContainer = styled.div`
    display: flex;
    height: 44px;
    padding: 10px 0px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    align-self: stretch;
    color: var(--Color-Text-cto, #000);
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 119.531%; /* 23.906px */
`;

export const Checkbox = styled.input`
    width: var(--Text-size-6, 20px);
    height: var(--Text-size-6, 20px);
    border-radius: 5px;
    border: 1px solid var(--Color-Text-cto, #000);
    background: #fff;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;

export const LoginButton = styled.button`
    display: flex;
    width: 98px;
    height: var(--Spacing-8, 48px);
    padding: 13px 24px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    border-radius: 5px;
    background: var(--Color-Text-cto, #000);
    color: #ffffff;
`;
