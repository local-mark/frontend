import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginAction } from '../../store/userSlice';
import {
    Checkbox,
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
    StyledIcon3,
    UserTypeButton,
    Mes,
} from './Login.style';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [activeButton, setActiveButton] = useState('Consumer');
    const [idfocus, setIdfocus] = useState(false);
    const [pwfocus, setPwfocus] = useState(false);
    const [mes, setMes] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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
                setMes(true);
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
                                    <UserTypeButton
                                        onClick={() => {
                                            setActiveButton('Consumer');
                                        }}
                                        style={{
                                            background: activeButton === 'Consumer' ? '#222' : '#eee',
                                            color: activeButton === 'Consumer' ? '#fff' : '#222',
                                        }}
                                    >
                                        로컬 컨슈머
                                    </UserTypeButton>
                                    <UserTypeButton
                                        onClick={() => {
                                            setActiveButton('Creator');
                                        }}
                                        style={{
                                            background: activeButton === 'Creator' ? '#222' : '#eee',
                                            color: activeButton === 'Creator' ? '#fff' : '#222',
                                        }}
                                    >
                                        로컬 크리에이터
                                    </UserTypeButton>
                                </UserType>
                                <InputFrame>
                                    <InputContainer
                                        onFocus={() => {
                                            setIdfocus(true);
                                        }}
                                        onBlur={() => {
                                            setIdfocus(false);
                                        }}
                                        style={{
                                            border: idfocus
                                                ? '1px solid #000'
                                                : mes
                                                  ? '1px solid #FF616A'
                                                  : '1px solid #bdbdbd',
                                        }}
                                    >
                                        <Input
                                            type="email"
                                            placeholder="아이디(이메일)"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        ></Input>
                                        {email && <StyledIcon2 onClick={() => setEmail('')}></StyledIcon2>}
                                    </InputContainer>
                                    {mes ? (
                                        <Mes>
                                            등록되지 않은 아이디이거나,<br></br>아이디 또는 비밀번호를 잘못
                                            입력하였습니다.
                                        </Mes>
                                    ) : null}
                                    <InputContainer
                                        onFocus={() => {
                                            setPwfocus(true);
                                        }}
                                        onBlur={() => {
                                            setPwfocus(false);
                                        }}
                                        style={{ border: pwfocus ? '1px solid #000' : '1px solid #bdbdbd' }}
                                    >
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="비밀번호"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                        ></Input>
                                        {showPassword ? (
                                            <StyledIcon3 onClick={() => setShowPassword(!showPassword)}></StyledIcon3>
                                        ) : (
                                            <StyledIcon onClick={() => setShowPassword(!showPassword)}></StyledIcon>
                                        )}
                                    </InputContainer>
                                    <RememberContainer>
                                        <RememberFrame>
                                            <Checkbox type="checkbox"></Checkbox>
                                            <div>아이디 기억하기</div>
                                        </RememberFrame>
                                        <FindFrame>
                                            <Find onClick={() => {}}>아이디 찾기</Find>
                                            <Find onClick={() => {}}>비밀번호 찾기</Find>
                                        </FindFrame>
                                    </RememberContainer>
                                </InputFrame>
                                <LoginContainer>
                                    <LoginButton onClick={handleLogin}>
                                        <LoginText>{loading ? 'Loading...' : '로그인'}</LoginText>
                                    </LoginButton>
                                    <SignupButton>
                                        <Link to="/signup">
                                            <SignupText>회원가입</SignupText>
                                        </Link>
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
