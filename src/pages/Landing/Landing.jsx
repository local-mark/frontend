import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ImageOverlay from '../../components/Landing/ImageOverlay';

import ProfileSlider from '../../components/Landing/ProfileSlider';

import mockup1 from '../../assets/image/Gallery/mockup_1.svg';
import mockup2 from '../../assets/image/Landing/feature.svg';
import mockup3 from '../../assets/image/Landing/creator.svg';
import mockup4 from '../../assets/image/Landing/consumer.svg';

import masanai from '../../assets/image/Landing/masanai.svg';
import dodari from '../../assets/image/Landing/dodari.svg';
import soonsoap from '../../assets/image/Landing/soonsoap.svg';

export default function Landing() {
    return (
        <LandingContainer>
            <ImageOverlay
                    imageSrc={mockup1}
                    overlayColor="rgba(0, 0, 0, 0.5)"
                    contents={
                      <div>
                        <h2>
                            누구보다 특별한 당신에게 <br /><Highlight>로컬이라는 유니크함</Highlight>을 더하다
                        </h2>
                        <p>
                            어디에서도 만나볼 수 없는 로컬 크리에이터들의 제품들을 <br />지금, 로컬마크에서 만나보세요.
                        </p>
                        <Link to='/gallery'>
                            <button>지금 바로 시작하기</button>
                        </Link>
                      </div>
                    }
            />
            <div>
                <CreatorContainer>
                    <div className='TextContainer'>
                        <h4>로컬 크리에이터</h4>
                        <p>지역의 자연•문화 특성과 아이디어를 결합해 사업적 가치를 창출하는 창업가</p>
                        <Link to="/signup?role=Creator">
                            <button>로컬 크리에이터로 시작하기</button>
                        </Link>
                    </div>
                    <div className='ImageBoxContainer'>
                        <div className='ImageBox'>
                            <img src={masanai} alt='masanai' />
                            <div className='caption'>
                                <p className='explain'>
                                    경상남도 마산의 로컬 패션 브랜드
                                </p>
                                <p className='brandName'>
                                    마사나이
                                </p>
                            </div>
                        </div>
                        <div className='ImageBox'>
                            <img src={dodari} alt='dodari' />
                            <div className='caption'>
                                <p className='explain'>
                                    부산 영도의 아웃도어 디자인 브랜드
                                </p>
                                <p className='brandName'>
                                    도다리비쥬얼랩
                                </p>
                            </div>
                        </div>
                        <div className='ImageBox'>
                            <img src={soonsoap} alt='soonsoap' />
                            <div className='caption'>
                                <p className='explain'>
                                    전남 순천의 로컬 비누 브랜드
                                </p>
                                <p className='brandName'>
                                    순솝
                                </p>
                            </div>
                        </div>
                    </div>
                </CreatorContainer>
                <ConsumerContainer>
                    <div>
                        <img src={dodari} alt='dodari' />
                        <img src={soonsoap} alt='soonsoap' />
                    </div>
                    <div>
                        <h4>직접 인증받은 브랜드만 입점</h4>
                        <Link to="/signup?role=Consumer">
                            <button>로컬 컨슈머로 시작하기</button>
                        </Link>
                    </div>
                </ConsumerContainer>
            </div>
            <FeatureContainer>
                <img src={mockup2} alt="Mockup 2" />
                <div>
                    <p id="feature-title">로컬 비즈?��?�� ?���?</p>
                    <p>
                        로컬 비즈?��?�� ?���? ?��?��
                        <br />
                        로컬 비즈?��?�� ?���? ?��?��
                        <br />
                        로컬 비즈?��?�� ?���? ?��?��
                    </p>
                    <ul>
                        <li>Benefit of Feature</li>
                        <li>Benefit of Feature</li>
                        <li>Benefit of Feature</li>
                    </ul>
                </div>
            </FeatureContainer>
            <TargetedContainer>
                <TargetTitle>???겟별 ?���? ?���?</TargetTitle>
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
                    <SignUpTitle>�?�? ?��?���??��?���?</SignUpTitle>
                </SignUpTitleContainer>
                <SignUpButtonContainer>
                    <Link to="/signup">
                        <button>로컬 ?��리에?��?��</button>
                    </Link>
                    <Link to="/signup">
                        <button>?��비자</button>
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
    padding-bottom: 20px;
`;

const Highlight = styled.span`
    color: #65BD83;
`

const CreatorContainer = styled.div`
    display: flex;
    width: 100vw;
    padding: 20px;

    .TextContainer {
        flex: 0 0 25%;
    }

    h4 {
        color: #FF8162;
    }

    .ImageBoxContainer {
        display: flex;
        flex-direction: row;
        flex: 0 0 75%;

        .ImageBox {
            display: flex;
            flex-direction: column;
            flex: 1;

            .caption {
                .explain {
                    color: blue;
                }

                .brandName {
                    color: green;
                }
            }
        }
    }
`;

const ImageBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    .explain {
        color: yellow;
    }

    .brandName {
        color: purple;
    }
`

const ConsumerContainer = styled.div`
    flex-direction: row;
    padding: 20px;
`

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
