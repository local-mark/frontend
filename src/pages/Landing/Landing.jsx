import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import mockup1 from '../../assets/image/Gallery/mockup_1.svg';
import mockup2 from '../../assets/image/Gallery/mockup_2.svg';
import mockup3 from '../../assets/image/Gallery/mockup_3.svg';
import mockup4 from '../../assets/image/Gallery/mockup_4.svg';

export default function Landing() {
    return (
        <LandingContainer>
            <ServiceProfileContainer>
                <h1>로컬마크 캐치프레이징</h1>
                <p>로컬마크 상세 설명 페이지</p>
                <button>지금 둘러보기</button>
                <img src={mockup1} alt="Mockup 1" />
            </ServiceProfileContainer>
            <FeatureContainer>
                <h4>로컬 비즈니스 통계</h4>
                <p>
                    로컬 비즈니스 통계 상승<br/>
                    로컬 비즈니스 통계 상승<br/>
                    로컬 비즈니스 통계 상승
                </p>
                <ul>
                    <li>Benefit of Feature</li>
                    <li>Benefit of Feature</li>
                    <li>Benefit of Feature</li>
                </ul>
                <img src={mockup2} alt="Mockup 2" />
            </FeatureContainer>
            <TargetedContainer>
                <TargetTitle>타겟별 니즈 설명</TargetTitle>
                <TargetCreater>
                    <img src={mockup3} alt="Mockup 3" />
                    <p>
                        자기 개발은 목표를 설정하고 달성하기 위한 여정입니다. 이 블로그 포스트에서는 일상 생활에 쉽게 통합할 수 있는 5가지 핵심 습관을 소개합니다. 첫 번째는 목표 설정과 시간 관리입니다. 이는 개인적 성취와 전문적 성장을 위한 기초를 마련합니다. 두 번째 습관은 긍정적 사고를 통한 자기 격려입니다. 이는 도전을 극복하고 성공으로 나아가는 데 중요합니다. 세 번째는 건강 유지를 위한 일상적인 운동과 균형 잡힌 식단입니다.
                    </p>
                </TargetCreater>
                <TargetConsumer>
                    <p>
                        자기 개발은 목표를 설정하고 달성하기 위한 여정입니다. 이 블로그 포스트에서는 일상 생활에 쉽게 통합할 수 있는 5가지 핵심 습관을 소개합니다. 첫 번째는 목표 설정과 시간 관리입니다. 이는 개인적 성취와 전문적 성장을 위한 기초를 마련합니다. 두 번째 습관은 긍정적 사고를 통한 자기 격려입니다. 이는 도전을 극복하고 성공으로 나아가는 데 중요합니다. 세 번째는 건강 유지를 위한 일상적인 운동과 균형 잡힌 식단입니다.
                    </p>
                    <img src={mockup4} alt="Mockup 4" />
                </TargetConsumer>
            </TargetedContainer>
            <SignUpLinkContainer>
                <SignUpTitle>지금 회원가입하기</SignUpTitle>
                <Link to="/signup">
                    <button>로컬 크리에이터</button>
                </Link>
                <Link to="/signup">
                    <button>소비자</button>
                </Link>
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
    text-align: center;
    margin-bottom: 40px;
`;

const FeatureContainer = styled.div`
    text-align: center;
    margin-bottom: 40px;

    h4 {
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 20px;
    }

    ul {
        list-style-type: disc;
        padding-left: 20px;
        text-align: left;
        margin-bottom: 20px;
    }
`;

const TargetedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
`;

const TargetTitle = styled.h4`
    margin-bottom: 20px;
`;

const TargetCreater = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    text-align: left;

    img {
        margin-right: 20px;
    }

    p {
        flex: 1;
    }
`;

const TargetConsumer = styled.div`
    display: flex;
    align-items: center;
    text-align: left;

    img {
        margin-left: 20px;
    }

    p {
        flex: 1;
    }
`;

const SignUpLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

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
`;

const SignUpTitle = styled.h4`
    margin-bottom: 20px;
`;
