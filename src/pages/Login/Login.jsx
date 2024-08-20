import axios from 'axios';
import { useEffect, useState } from 'react';
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
import { useCookies } from 'react-cookie';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [activeButton, setActiveButton] = useState('Consumer');
    const [idfocus, setIdfocus] = useState(false);
    const [pwfocus, setPwfocus] = useState(false);
    const [mes, setMes] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [btn, setBtn] = useState(false);
    const [rememberId, setRememberId] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['rememberedId']);

    //페이지 로드 시 쿠키에서 아이디 불러오기
    useEffect(() => {
        if (cookies.rememberedId) {
            setId(cookies.rememberedId);
            setRememberId(true);
        }
    }, [cookies]);

    //ID칸과 PASSWORD칸이 비어있는지 확인
    useEffect(() => {
        if (id == '' || password == '') {
            setBtn(false);
        } else {
            setBtn(true);
        }
    });

    //비어있지 않아야 로그인 버튼이 동작
    const handleButtonClick = (e) => {
        e.preventDefault();
        if (btn) {
            handleLogin(e);
        }
    };

    //로그인 동작
    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const body = {
                loginId: id,
                password: password,
            };

            const result = await axios.post('https://umc.localmark.store/auth/login', body);

            // 로그인 성공 시 아이디 기억하기 설정
            if (rememberId) {
                setCookie('rememberedId', id, { path: '/', maxAge: 7 * 24 * 60 * 60 }); // 쿠키 유효기간 7일
            } else {
                removeCookie('rememberedId');
            }

            dispatch(loginAction(result.data));
            navigate('/');
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.status == 400) {
                setMes(true);
            } else {
                alert('로그인에 실패하였습니다.'); //임의 표시
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
                                            type="text"
                                            placeholder="아이디"
                                            value={id}
                                            onChange={(e) => {
                                                setId(e.target.value);
                                            }}
                                        ></Input>
                                        {id && <StyledIcon2 onClick={() => setId('')}></StyledIcon2>}
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
                                            <Checkbox
                                                type="checkbox"
                                                checked={rememberId}
                                                onChange={(e) => setRememberId(e.target.checked)}
                                            ></Checkbox>
                                            <div>아이디 기억하기</div>
                                        </RememberFrame>
                                        <FindFrame>
                                            <Find onClick={() => {}}>아이디 찾기</Find>
                                            <Find onClick={() => {}}>비밀번호 찾기</Find>
                                        </FindFrame>
                                    </RememberContainer>
                                </InputFrame>
                                <LoginContainer>
                                    <LoginButton onClick={handleButtonClick}>
                                        <LoginText>{loading ? 'Loading...' : '로그인'}</LoginText>
                                    </LoginButton>
                                    <SignupButton>
                                        <Link to={`/signup?role=${activeButton}`}>
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
