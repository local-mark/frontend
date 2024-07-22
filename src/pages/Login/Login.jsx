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
    LoginButton,
    LoginContainer,
    LoginContent,
    LoginSection,
    LoginSpace,
    RememberContainer,
    UserType,
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
            alert('이메일 혹은 비밀번호 값이 존재하지 않습니다.');
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
                alert('이메일 혹은 비밀번호가 잘못되었습니다.');
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
                                <InputContainer>
                                    <div>E-mail (ID)</div>
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    ></Input>
                                </InputContainer>
                                <InputContainer>
                                    <div>Password</div>
                                    <Input
                                        type="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    ></Input>
                                </InputContainer>
                                <RememberContainer>
                                    <Checkbox type="checkbox"></Checkbox>
                                    <div>아이디 기억하기</div>
                                </RememberContainer>
                                <LoginContainer>
                                    <LoginButton onClick={handleLogin}>{loading ? 'Loading...' : '로그인'}</LoginButton>
                                    <div>회원가입</div>
                                </LoginContainer>
                            </FormContent>
                        </Form>
                    </LoginSpace>
                </LoginContent>
            </LoginSection>
        </div>
    );
}
