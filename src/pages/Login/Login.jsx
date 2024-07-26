import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../store/userSlice';
import {
    Checkbox,
    ConsumerButton,
    CreatorButton,
    Form,
    FormContent,
    Input,
    InputContainer,
    InputFrame,
    LoginButton,
    LoginContainer,
    LoginContent,
    LoginSection,
    LoginSpace,
    RememberContainer,
    RememberFrame,
    UserType,
    FindFrame,
    Find,
    SignupButton,
    LoginText,
    SignupText,
    StyledIcon,
    StyledIcon2,
} from './Login.style';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            alert('아이디(이메일) 혹은 비밀번호 값이 존재하지 않습니다.');
            return;
        }

        setLoading(true);

        try {
            const body = {
                email: email,
                password: password,
            };

            const result = await axios.post('#', body);
            alert('로그인 되셨습니다.');

            dispatch(loginAction(result.data));
            navigate('/');
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.status == 404) {
                alert('등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다.');
            } else {
                alert('로그인에 실패하였습니다.');
            }
        }
    };

    return (
        <div>
            <LoginSection>
                <LoginContent>
                    <LoginSpace>
                        <Form>
                            <FormContent>
                                <UserType>
                                    <ConsumerButton>로컬 컨슈머</ConsumerButton>
                                    <CreatorButton>로컬 크리에이터</CreatorButton>
                                </UserType>
                                <InputFrame>
                                    <InputContainer>
                                        <Input
                                            type="email"
                                            placeholder="아이디(이메일)"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        ></Input>
                                        <StyledIcon2></StyledIcon2>
                                    </InputContainer>
                                    <InputContainer>
                                        <Input
                                            type="password"
                                            placeholder="비밀번호"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                        ></Input>
                                        <StyledIcon></StyledIcon>
                                    </InputContainer>
                                    <RememberContainer>
                                        <RememberFrame>
                                            <Checkbox type="checkbox"></Checkbox>
                                            <div>아이디 기억하기</div>
                                        </RememberFrame>
                                        <FindFrame>
                                            <Find>아이디 찾기</Find>
                                            <Find>비밀번호 찾기</Find>
                                        </FindFrame>
                                    </RememberContainer>
                                </InputFrame>
                                <LoginContainer>
                                    <LoginButton onClick={handleLogin}>
                                        <LoginText>{loading ? 'Loading...' : '로그인'}</LoginText>
                                    </LoginButton>
                                    <SignupButton>
                                        <SignupText>회원가입</SignupText>
                                    </SignupButton>
                                </LoginContainer>
                            </FormContent>
                        </Form>
                    </LoginSpace>
                </LoginContent>
            </LoginSection>
        </div>
    );
}
