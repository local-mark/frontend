import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ProfileSlider from '../../components/Landing/ProfileSlider';

import mockup1 from '../../assets/image/Gallery/mockup_1.svg';
import mockup2 from '../../assets/image/Landing/feature.svg';
import mockup3 from '../../assets/image/Landing/creator.svg';
import mockup4 from '../../assets/image/Landing/consumer.svg';

export default function Landing() {
    return (
        <LandingContainer>
            <ServiceProfileContainer>
               <img src={mockup1} alt='Sample' className='background-image' />
               <OverlayBox></OverlayBox>
               <ProfileContents>
                    <div className='title'>Local Mark</div>
                    <div className='explain'>now, local mark</div>
                    <button>Start Now!</button>
               </ProfileContents>
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
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: auto;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
`;

const OverlayBox = styled.div`
    position: 'absolute';
    top: 0;
    left: 0;
    width: '100%';
    height: '100%';
    backgroundColor: 'rgba(0, 0, 0, 0.5)';
`;

const ProfileContents = styled.div`
    position: 'absolute';
    top: '50%';
    left: '50%';
    transform: 'translate(-50%, -50%)';
    textAlign: 'center';

    .title {
        color: 'green';
        fontSize: '54px';
        fontWeight: 'bold';
        marginBottom: '30px';
    }

    .explain {
        color: 'white';
        fontSize: '24px';
        marginBottom: '20px';
    }

    button {
        padding: '10px 20px';
        fontSize: '16px';
        fontWeight: 'bold';
        color: 'white';
        backgroundColor: '#007BFF';
        border: 'none';
        borderRadius: '5px';
        cursor: 'pointer';
        transition: 'background-color 0.3s';
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
