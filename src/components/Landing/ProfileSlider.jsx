import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import mockup1 from '../../assets/image/Landing/catchphrase.svg';
import mockup2 from '../../assets/image/Landing/feature.svg';
import mockup3 from '../../assets/image/Landing/creator.svg';
import mockup4 from '../../assets/image/Landing/consumer.svg'

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", width: '50px', height: '50px'}}
        onClick={onClick}
      />
    );
}

export default class ProfileSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <Arrow />,
            prevArrow: <Arrow />
        };

        const sliderStyle = {
            backgroundColor: '#f0f0f0', // 슬라이더 전체 배경색
            padding: '20px' // 슬라이더 내부 패딩
        };

        return (
            <div style={sliderStyle}>
                <h2> Single Item</h2>
                <StyledSlider {...settings}>
                    <StyledBox>
                        <StyledImg src={mockup1} alt="Mockup 1" />
                    </StyledBox>
                    <StyledBox>
                        <StyledImg src={mockup2} alt="Mockup 2" />
                    </StyledBox>
                    <StyledBox>
                        <StyledImg src={mockup3} alt="Mockup 3" />
                    </StyledBox>
                    <StyledBox>
                        <StyledImg src={mockup4} alt="Mockup 4" />
                    </StyledBox>
                </StyledSlider>
            </div>
        );
    }
}

const StyledSlider = styled(Slider)`
    .slick-list {
        width: 1600px;
        margin: 0 auto;
    }

    .slick-slide div {
        /* cursor: pointer; */
    }

    .slick-dots {
        bottom: -50px;
        margin-top: 200px;
    }

    .slick-track {
        /* overflow-x: hidden; */
    }
`;

const StyledBox = styled.div`
    cursor: pointer;
`;

const StyledImg = styled.img`
    width: 380px;
    height: 190px;
`;
