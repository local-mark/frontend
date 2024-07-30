import styled from 'styled-components';
import { IoEye } from 'react-icons/io5';
import { IoEyeOff } from 'react-icons/io5';
import { MdCancel } from 'react-icons/md';

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
    align-items: center;
`;

export const FormContent = styled.div`
    display: flex;
    width: 384px;
    flex-direction: column;
    align-items: center;
    gap: 60px;
`;

export const UserType = styled.div`
    display: flex;
    width: 298px;
    padding: var(--Spacing-2, 6px);
    align-items: center;
    border-radius: 100px;
    background: var(--Color-Gray-gray-200, #eee);
`;

export const UserTypeButton = styled.button`
    display: flex;
    width: 143px;
    padding: var(--Text-size-2, 12px) var(--Spacing-4, 16px);
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 100px;

    /* B3_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
`;

export const InputFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--Text-size-2, 12px);
    align-self: stretch;
`;

export const InputContainer = styled.div`
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
    flex: 1 0 0;
    color: var(--Color-Text-light1, #9e9e9e);

    /* B4_M */
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
    border: none;
`;

export const RememberContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const RememberFrame = styled.div`
    display: flex;
    align-items: center;
    gap: var(--Spacing-1, 4px);
`;

export const FindFrame = styled.div`
    display: flex;
    align-items: center;
    gap: var(--Spacing-4, 16px);
`;

export const Find = styled.div`
    color: var(--Color-Text-light1, #9e9e9e);

    /* B6_M */
    font-family: Pretendard;
    font-size: var(--Text-size-3, 14px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
`;

export const Checkbox = styled.input`
    width: var(--Text-size-6, 20px);
    height: var(--Text-size-6, 20px);
    border-radius: 5px;
    border: 1px solid var(--Color-Text-cto, #000);
    background: #fff;
    accent-color: black;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Text-size-2, 12px);
    align-self: stretch;
`;

export const LoginButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 3px;
    background: var(--Color-Main-primary, #65bd83);
`;

export const LoginText = styled.button`
    display: flex;
    padding: 16px 151px;
    justify-content: center;
    align-items: center;
    gap: var(--Spacing-2, 6px);
    align-self: stretch;
    border-radius: 1px;
    color: #ffffff;
`;

export const SignupButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 3px;
    border: 1px solid var(--Color-Main-primary, #65bd83);
`;

export const SignupText = styled.button`
    display: flex;
    padding: 16px 151px;
    justify-content: center;
    align-items: center;
    gap: var(--Spacing-2, 6px);
    align-self: stretch;
    border-radius: 1px;
    color: #65bd83;
`;

export const StyledIcon = styled(IoEye)`
    width: var(--Text-size-7, 22px);
    height: var(--Text-size-7, 22px);
    flex-shrink: 0;
    opacity: 0.5;
`;

export const StyledIcon3 = styled(IoEyeOff)`
    width: var(--Text-size-7, 22px);
    height: var(--Text-size-7, 22px);
    flex-shrink: 0;
    opacity: 0.5;
`;

export const StyledIcon2 = styled(MdCancel)`
    width: var(--Text-size-7, 22px);
    height: var(--Text-size-7, 22px);
    flex-shrink: 0;
    opacity: 0.5;
`;

export const Mes = styled.div`
    display: flex;
    width: 384px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-1, 4px);
    color: #ff616a;
`;
