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
            <div className='ContainerBox'>
                <CreatorContainer>
                    <div className='TextContainer'>
                        <div>
                            <h4>로컬 크리에이터</h4>
                            <p>지역의 자연•문화 특성과 아이디어를 결합해 사업적 가치를 창출하는 창업가</p>
                        </div>
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
                    <div className='ImageBoxContainer'>
                        <div className='ImageBox'>
                            <img src={dodari} alt='dodari' />
                        </div>
                        <div className='ImageBox'>
                            <img src={soonsoap} alt='soonsoap' />
                        </div>
                        <div className='TextBox'>
                            <h4>직접 인증받은 브랜드만 입점</h4>
                            <Link to="/signup?role=Consumer">
                                <button>로컬 컨슈머로 시작하기</button>
                            </Link>
                        </div>
                    </div>
                    
                </ConsumerContainer>
            </div>
            <BrandCoverContainer>
                <div className='BrandCover'>
                    <div className='ImageBox'>
                        <img src={mockup3} alt='brand_cover_1' />
                    </div>
                    <div className='TextBox'>
                        <div className='BrandNameBox'>
                            <p className='BrandName'>스틸마스프링</p>
                            <p className='BrandLocation'>세종특별자치시 조치원의 도예 공방</p>
                        </div>
                        <div className='InterviewBox'>
                            <p className='Interview'>
                                "청주는 공예비엔날레를 진행해서 세계에 있는 공예인들이 많이 방문하는 곳이에요.<br />
                                ...요즘은 서울에 있는 동네들은 뜨기 시작하면 대부분 비슷해지는 경향이 있는 것 같아요.<br />
                                인기 있어지면 결국 프랜차이즈들이 들어오고, 동네들이 획일적으로 바뀌는 느낌?<br />
                                그래서 요즘은 잘 알려지지 않은, 고유의 맛과 멋이 있는 지역들이 더 특색 있다고 느껴지는 것 같아요."
                            </p>
                            <p className='InterviewSource'>
                                - 로컬 라이프스타일 매거진 &lt;로컬키트&gt;와의 인터뷰 중<br />
                                (@local.kit_official)
                            </p>
                        </div>
                    </div>
                </div>
                <div className='BrandCover'>
                    <div className='TextBox'>
                        <div className='BrandNameBox'>
                            <p className='BrandName'>순솝</p>
                            <p className='BrandLocation'>전라남도 순천시의 로컬 비누 브랜드</p>
                        </div>
                        <div className='InterviewBox'>
                            <p className='Interview'>
                                순솝은 키트 안에 순천의 스토리를 담았다. 소비자는 체험을 통해 비누를 제작하며<br />
                                갈대, 겨울 철새, 수달 등 순천만과 동천에 사는 동식물 이야기를 들을 수 있다. 순솝 비누 제작 키트를<br />
                                통해 소비자는 순천만의 이야기와 비누를 제작하는 과정 자체의 친환경성을 경험할 수 있다. ...<br />
                                "밖에 나갔다가 다시 오니까 순천이 조금 달라 보였어요."
                            </p>
                            <p className='InterviewSource'>
                                - 로컬 라이프스타일 매거진 &lt;로컬키트&gt;와의 인터뷰 중<br />
                                (@local.kit_official)
                            </p>
                        </div>
                    </div>
                    <div className='ImageBox'>
                        <img src={mockup4} alt='brand_cover_2' />
                    </div>
                </div>
            </BrandCoverContainer>
        </LandingContainer>
    );
}

const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;

    .ContainerBox {
        background-color: #F5F5F5;
    }
`;

const Highlight = styled.span`
    color: #65BD83;
`

const CreatorContainer = styled.div`
    display: flex;
    width: 100vw;
    height: auto;
    padding: 40px;

    .TextContainer {
        flex: 0 0 25%;
        display: flex; 
        flex-direction: column;
        justify-content: space-between; 
        align-items: flex-start;

        button {
            background-color: #65BD83;
            color: white;
            border: none;
            padding: 10px 40px;
            cursor: pointer;
            font-size: 1.5em;
            border-radius: 5px;
        }
    }

    h4 {
        font-size: 2.25em;
        font-weight: bold;
    }

    .ImageBoxContainer {
        display: flex;
        flex-direction: row;
        flex: 0 0 75%;
        flex-wrap: wrap;
        width: 75%;
        align-content: space-around;

        .ImageBox {
            flex: 0 0 33%;
            padding-bottom: 25%;
            position: relative;
            display: flex;
            flex-direction: column;

            img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

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

const ConsumerContainer = styled.div`
    width: 100vw;
    height: auto;
    padding: 40px;
    display: flex;
    flex-direction: row;

    .ImageBoxContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex: 0 0 50%;
        width: 100%;
        align-content: space-around;

        .ImageBox {
            flex: 0 0 50%; 
            padding-bottom: 40%; 
            position: relative;
            display: flex;

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
    
    h4 {
        font-size: 2.25em;
        font-weight: bold;
    }

    .TextBox {
        flex: 0 0 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }

    button {
        background-color: #FF8162;
        color: white;
        border: none;
        padding: 10px 40px;
        cursor: pointer;
        font-size: 1.5em;
        border-radius: 5px;
    }
`;

const BrandCoverContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;

    .BrandCover {
        display: flex;
        flex-direction: row;
        margin-top: 40px;
        margin-bottom: 40px;

        .ImageBox {
            flex: 0 0 33%;
        }

        .TextBox {
            flex: 0 0 66%;
            padding: 30px;

            .BrandNameBox {
                margin-bottom: 15px;
                .BrandName{
                    font-size: 1.5em;
                    font-weight: bold;
                }
                .BrandLocation{
                    font-size: 0.75em;
                    color: #4b5563;
                }
            }

            .InterviewBox {
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                .Interview{
                    font-size: 1em;
                    align-self: flex-start;
                }
                .InterviewSource{
                    font-size: 0.75em;
                    color: #6b7280;
                }
            }
        }
    }
`
