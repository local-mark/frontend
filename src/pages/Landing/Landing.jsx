import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import mockup1 from '../../assets/image/Landing/catchphrase.svg';
import mockup2 from '../../assets/image/Landing/feature.svg';
import mockup3 from '../../assets/image/Landing/creator.svg';
import mockup4 from '../../assets/image/Landing/consumer.svg';

export default function Landing() {
    return (
        <LandingContainer>
            <ServiceProfileContainer>
                <div id="text-container">
                    <p id="catchphrase">로컬마크 캐치프레이즈</p>
                    <p>로컬마크 상세 설명 페이지</p>
                    <Link to="/gallery">
                        <button>지금 둘러보기</button>
                    </Link>
                </div>
                <div id="image-container">
                    <img src={mockup1} alt="Mockup 1" />
                </div>
            </ServiceProfileContainer>
            <FeatureContainer>
                <img src={mockup2} alt="Mockup 2" />
                <div>
                    <p id="feature-title">로컬 비즈니스 통계</p>
                    <p>
                        로컬 비즈니스 통계 상술
                        <br />
                        로컬 비즈니스 통계 상술
                        <br />
                        로컬 비즈니스 통계 상술
                    </p>
                    <ul>
                        <li>Benefit of Feature</li>
                        <li>Benefit of Feature</li>
                        <li>Benefit of Feature</li>
                    </ul>
                </div>
            </FeatureContainer>
            <TargetedContainer>
                <TargetTitle>타겟별 니즈 설명</TargetTitle>
                <TargetCreater>
                    <img src={mockup3} alt="Mockup 3" />
                    <p>
                        Self-improvement is a journey of setting and achieving goals. In this blog post, we introduce
                        five key habits that can be easily integrated into daily life. The first is goal setting and
                        time management, which lay the foundation for personal achievement and professional growth. The
                        second habit is self-encouragement through positive thinking, which is crucial for overcoming
                        challenges and moving towards success. The third is maintaining health through regular exercise
                        and a balanced diet.
                    </p>
                </TargetCreater>
                <TargetConsumer>
                    <p>
                        Self-improvement is a journey of setting and achieving goals. In this blog post, we introduce
                        five key habits that can be easily integrated into daily life. The first is goal setting and
                        time management, which lay the foundation for personal achievement and professional growth. The
                        second habit is self-encouragement through positive thinking, which is crucial for overcoming
                        challenges and moving towards success. The third is maintaining health through regular exercise
                        and a balanced diet.
                    </p>
                    <img src={mockup4} alt="Mockup 4" />
                </TargetConsumer>
            </TargetedContainer>
            <SignUpLinkContainer>
                <SignUpTitleContainer>
                    <SignUpTitle>지금 회원가입하기</SignUpTitle>
                </SignUpTitleContainer>
                <SignUpButtonContainer>
                    <Link to="/signup">
                        <button>로컬 크리에이터</button>
                    </Link>
                    <Link to="/signup">
                        <button>소비자</button>
                    </Link>
                </SignUpButtonContainer>
            </SignUpLinkContainer>
        </LandingContainer>
    );
}

const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const ServiceProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    margin-bottom: 100px;
    width: 80%;
    margin: 0 auto;

    .text-container,
    .image-container {
        flex: 1;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #catchphrase {
        font-size: 4em;
        font-weight: bold;
    }

    button {
        margin: 10px;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }

    img {
        width: 100%;
        max-width: 400px;
        height: auto;
    }
`;

const FeatureContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 100px;
    margin-bottom: 100px;
    width: 80%;

    #feature-title {
        font-size: 2em;
        font-weight: bold;
    }

    img {
        margin-right: 30px;
        width: 30%;
    }

    div {
        align-items: flex-end;
        flex: 1;
        text-align: right;
    }

    h4 {
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 20px;
    }

    ul {
        list-style-type: disc;
        padding-right: 20px;
        text-align: right;
        margin-bottom: 20px;
    }

    li {
        text-align: right;
    }
`;

const TargetedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
`;

const TargetTitle = styled.h4`
    margin-bottom: 50px;

    font-size: 2em;
    font-weight: bold;
`;

const TargetCreater = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 60px;
    text-align: left;
    width: 80%;

    img {
        margin-right: 20px;
        width: 30%;
    }

    p {
        flex: 1;
    }
`;

const TargetConsumer = styled.div`
    display: flex;
    align-items: center;
    margin-botton: 60px;
    text-align: left;
    width: 80%;

    img {
        margin-left: 20px;
        width: 30%;
    }

    p {
        flex: 1;
    }
`;

const SignUpLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
`;

const SignUpTitleContainer = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
`;

const SignUpButtonContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
        margin: 10px;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

const SignUpTitle = styled.h4`
    font-size: 2em;
    font-weight: bold;
`;

const SignUpButton = styled.button`
    margin: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
