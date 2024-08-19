import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import first_background from '../../assets/image/Landing/first_background.png';
import masanai from '../../assets/image/Landing/masanai.png';
import dodari from '../../assets/image/Landing/dodari_visual_lab.png';
import still_ma_spring from '../../assets/image/Landing/stillmaspring.png';
import soonsoap_1 from '../../assets/image/Landing/soap.png';
import soonsoap_2 from '../../assets/image/Landing/soap_2.png';
import pin_icon from '../../assets/image/Landing/pin_icon.svg';

export default function Landing() {
    const scrollToNextSection = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <LandingContainer>
            <ImageOverlay>
                <OverlayImage src={first_background} alt="Overlay" />
                <Overlay>
                    <OverlayContent>
                        <h2>
                            누구보다 특별한 당신에게<br /><Highlight>로컬이라는 유니크함</Highlight>을 더하다
                        </h2>
                        <p>
                            어디에서도 만나볼 수 없는 로컬 크리에이터들의 제품들을<br />지금, 로컬마크에서 만나보세요.
                        </p>
                        <Link to="/gallery">
                            <button>지금 바로 시작하기</button>
                        </Link>
                    </OverlayContent>
                    <DownArrow onClick={scrollToNextSection} />
                </Overlay>
            </ImageOverlay>
            <div className="ContainerBox">
                <CreatorContainer>
                    <div className="TextContainer">
                        <div>
                            <h4>로컬 크리에이터</h4>
                            <p>
                                지역의 자연•문화 특성과 아이디어를 결합해
                                <br />
                                사업적 가치를 창출하는 창업가
                            </p>
                        </div>
                        <Link to="/signup?role=Creator">
                            <button>로컬 크리에이터로 시작하기</button>
                        </Link>
                    </div>
                    <div className="ImageBoxContainer">
                        <div className="BrandBox">
                            <div className="ImageBox">
                                <img src={masanai} alt="masanai" />
                            </div>
                            <div className="caption">
                                <p className="explain">경상남도 마산의 로컬 패션 브랜드</p>
                                <p className="brandName">마사나이</p>
                            </div>
                        </div>
                        <div className="BrandBox">
                            <div className="ImageBox">
                                <img src={dodari} alt="dodari" />
                            </div>
                            <div className="caption">
                                <p className="explain">부산 영도의 아웃도어 디자인 브랜드</p>
                                <p className="brandName">도다리비쥬얼랩</p>
                            </div>
                        </div>
                        <div className="BrandBox">
                            <div className="ImageBox">
                                <img src={soonsoap_2} alt="soonsoap" />
                            </div>
                            <div className="caption">
                                <p className="explain">전남 순천의 로컬 비누 브랜드</p>
                                <p className="brandName">순솝</p>
                            </div>
                        </div>
                    </div>
                </CreatorContainer>
                <ConsumerContainer>
                    <div className="ImageBoxContainer">
                        <div className="ImageBox">
                            <img src={dodari} alt="dodari" />
                        </div>
                        <div className="ImageBox">
                            <img src={soonsoap_2} alt="soonsoap" />
                        </div>
                    </div>
                    <div className="TextBox">
                        <h4>직접 인증받은 브랜드만 입점</h4>
                        <Link to="/signup?role=Consumer">
                            <button>로컬 컨슈머로 시작하기</button>
                        </Link>
                    </div>
                </ConsumerContainer>
            </div>
            <BrandCoverContainer>
                <div className="BrandCover">
                    <div className="ImageBox">
                        <img src={still_ma_spring} alt="brand_cover_1" />
                    </div>
                    <div className="TextBox" id="left-padding">
                        <div className="BrandNameBox">
                            <img src={pin_icon} alt="Location Pin" className="pinIcon" />
                            <p className="BrandName">스틸마스프링</p>
                            <p className="BrandLocation">세종특별자치시 조치원의 도예 공방</p>
                        </div>

                        <div className="InterviewBox">
                            <p className="Interview">
                                "청주는 공예비엔날레를 진행해서 세계에 있는 공예인들이 많이 방문하는 곳이에요.
                                <br />
                                ...요즘은 서울에 있는 동네들은 뜨기 시작하면 대부분 비슷해지는 경향이 있는 것 같아요.
                                <br />
                                인기 있어지면 결국 프랜차이즈들이 들어오고, 동네들이 획일적으로 바뀌는 느낌?
                                <br />
                                그래서 요즘은 잘 알려지지 않은, 고유의 맛과 멋이 있는 지역들이 더 특색 있다고 느껴지는
                                것 같아요."
                            </p>
                            <p className="InterviewSource">
                                - 로컬 라이프스타일 매거진 &lt;로컬키트&gt;와의 인터뷰 중<br />
                                (@local.kit_official)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="BrandCover">
                    <div className="TextBox" id="right-padding">
                        <div className="BrandNameBox">
                            <img src={pin_icon} alt="Location Pin" className="pinIcon" />
                            <p className="BrandName">순솝</p>
                            <p className="BrandLocation">전라남도 순천시의 로컬 비누 브랜드</p>
                        </div>

                        <div className="InterviewBox">
                            <p className="Interview">
                                순솝은 키트 안에 순천의 스토리를 담았다. 소비자는 체험을 통해 비누를 제작하며
                                <br />
                                갈대, 겨울 철새, 수달 등 순천만과 동천에 사는 동식물 이야기를 들을 수 있다. 순솝 비누
                                제작 키트를
                                <br />
                                통해 소비자는 순천만의 이야기와 비누를 제작하는 과정 자체의 친환경성을 경험할 수 있다.
                                ...
                                <br />
                                "밖에 나갔다가 다시 오니까 순천이 조금 달라 보였어요."
                            </p>
                            <p className="InterviewSource">
                                - 로컬 라이프스타일 매거진 &lt;로컬키트&gt;와의 인터뷰 중<br />
                                (@local.kit_official)
                            </p>
                        </div>
                    </div>
                    <div className="ImageBox">
                        <img src={soonsoap_1} alt="brand_cover_2" />
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
    min-width: 1400px;
    margin: 0 auto;

    .ContainerBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 30px;
        padding-left: 250px;
        padding-right: 250px;
        background: var(--Color-Gray-gray-50, #fafafa);
    }
`;

const ImageOverlay = styled.div`
    display: flex;
    position: relative;
    top: 0px;
    width: 100%;
    min-width: 1500px;
    height: 87vh;
    overflow: hidden;
`;

const OverlayImage = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
`;

const OverlayContent = styled.div`
    text-align: left;
    padding-top: 5%;
    padding-left: 15%;
    padding-right: 50%;

    h2 {
        color: white;
        font-size: 2.5em;
        font-weight: bold;
        margin-bottom: 20px;
    }

    p {
        color: white;
        font-size: 1.25em;
        margin-bottom: 20px;
    }

    button {
        background-color: #65bd83;
        color: white;
        border: none;
        padding: 10px 40px;
        cursor: pointer;
        font-size: 1.5em;
        border-radius: 5px;
    }
`;

const DownArrow = styled.div`
    position: absolute;
    bottom: 20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid white;
    cursor: pointer;

    &:hover {
        border-top: 25px solid #65bd83;
    }
`;

const Highlight = styled.span`
    color: #65bd83;
`;

const CreatorContainer = styled.div`
    display: flex;
    width: 1400px;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;

    .TextContainer {
        max-width: 500px;
        text-align: left;

        h4 {
            color: var(--Color-Text-primary, #222);
            font-family: Pretendard;
            font-size: var(--Text-size-11, 40px);
            font-style: normal;
            font-weight: 700;
            line-height: 140%;
            letter-spacing: -0.8px;
        }

        p {
            font-size: 1.25em;
            color: #666;
            margin-bottom: 130px;
        }

        button {
            background-color: #65bd83;
            color: white;
            border: none;
            padding: 15px 50px;
            cursor: pointer;
            font-size: 1.25em;
            font-weight: 600;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #57a572;
            }
        }
    }

    .ImageBoxContainer {
        display: flex;
        gap: 30px;

        .BrandBox {
            width: 300px;
            position: relative;
            overflow: hidden;
            border-radius: 10px;

            .ImageBox {
                width: 100%;
                padding-top: 100%;
                position: relative;

                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 10px;
                }
            }

            .caption {
                text-align: center;
                padding-top: 10px;

                .explain {
                    font-size: 1em;
                    color: #666;
                    margin-bottom: 5px;
                }

                .brandName {
                    font-size: 1.25em;
                    font-weight: bold;
                    color: #333;
                }
            }
        }
    }
`;

const ConsumerContainer = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 10px;
    margin-top: 150px;

    .ImageBoxContainer {
        display: flex;
        gap: 30px;

        .ImageBox {
            width: 300px;
            height: 300px;
            position: relative;
            overflow: hidden;
            border-radius: 10px;

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .TextBox {
        max-width: 600px;
        text-align: right;
        margin-top: -40px;

        h4 {
            color: var(--Color-Text-primary, #222);
            font-family: Pretendard;
            font-size: var(--Text-size-11, 40px);
            font-style: normal;
            font-weight: 700;
            line-height: 140%;
            letter-spacing: -0.8px;
        }

        button {
            background-color: #ff8162;
            margin-top: 150px;
            color: white;
            border: none;
            padding: 12px 50px;
            cursor: pointer;
            font-size: 1.25em;
            font-weight: 600;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
    }
`;

const BrandCoverContainer = styled.div`
    width: 1400px;
    padding: 40px;
    box-sizing: border-box;

    .BrandCover {
        display: flex;
        flex-direction: row;
        margin-top: 40px;
        margin-bottom: 40px;

        .ImageBox {
            width: 533px;
        }

        .TextBox {
            width: 1067px;
            padding: 30px;
            box-sizing: border-box;
            margin-left: 100px;

            .BrandNameBox {
                display: flex;
                align-items: center;
                margin-bottom: 15px;

                .pinIcon {
                    margin-right: 10px;
                }

                .BrandName {
                    color: var(--Color-Text-primary, #222);
                    font-family: Pretendard;
                    font-size: var(--Text-size-10, 32px);
                    font-style: normal;
                    font-weight: 600;
                    line-height: 140%;
                    letter-spacing: -0.64px;
                }

                .BrandLocation {
                    color: var(--Color-Text-secondary, #616161);
                    margin-left: 9px;
                    padding-top: 10px;
                    font-family: Pretendard;
                    font-size: var(--Text-size-3, 14px);
                    font-style: normal;
                    font-weight: 400;
                    line-height: 140%;
                    letter-spacing: -0.28px;
                }
            }

            .InterviewBox {
                .Interview {
                    font-size: 1em;
                    padding-bottom: 20px;
                }

                .InterviewSource {
                    font-size: 0.75em;
                    color: #6b7280;
                    text-align: right;
                    margin-right: 200px;
                }
            }

            #left-padding {
                padding-left: 275px;
            }

            #right-padding {
                padding-right: 275px;
            }
        }
    }
`;
