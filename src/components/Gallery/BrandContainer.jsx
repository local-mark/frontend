import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import mockup1 from '../../assets/image/Gallery/mockup_1.svg';
import mockup2 from '../../assets/image/Gallery/mockup_2.svg';
import mockup3 from '../../assets/image/Gallery/mockup_3.svg';
import mockup4 from '../../assets/image/Gallery/mockup_4.svg';

const mockData = {
    brand: [
        {
            brand_id: 1,
            region_name: '지역명',
            brand_name: '브랜드명',
            description: '브랜드 소개',
            brand_url: 'https://brand.com',
            brand_image: mockup1,
        },
    ],
};

export default function BrandContainer() {
    const navigate = useNavigate();
    const brand = mockData.brand[0];

    const handleBrandProfileClick = () => {
        navigate(`/brand/${brand.brand_id}`);
    };

    return (
        <Container>
            <BrandProfile>
                <ProfileImage onClick={handleBrandProfileClick} src={brand.brand_image} alt="브랜드 프로필" />
                <BrandInfo>
                    <Region>{brand.region_name}</Region>
                    <BrandName onClick={handleBrandProfileClick}>{brand.brand_name}</BrandName>
                    <BrandDescription>{brand.description}</BrandDescription>
                </BrandInfo>
            </BrandProfile>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 1200px;
    margin: 30px;
    gap: var(--Spacing-4, 16px);
    background: var(--Color-Background-light-gray, #fafafa);
    padding: 10px;
    border-radius: 5px;
`;

const BrandProfile = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const ProfileImage = styled.img`
    width: 102px;
    height: 102px;
    background-color: #e0e0e0;
    margin-right: 10px;
`;

const BrandInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Region = styled.div`
    display: flex;
    padding: 4px var(--Text-size-2, 12px);
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: var(--Color-Main-primary, #65bd83);
    color: #fff;
    font-family: Pretendard;
    font-size: var(--Text-size-2, 12px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 16.8px */
    letter-spacing: -0.24px;
    margin-top: -19px;
`;

const BrandName = styled.div`
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: var(--Text-size-6, 20px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: -0.4px;
    margin-top: 8px;
`;

const BrandDescription = styled.div`
    overflow: hidden;
    color: var(--Color-Text-secondary, #616161);
    text-overflow: ellipsis;
    font-family: Pretendard;
    font-size: var(--Text-size-2, 12px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 16.8px */
    letter-spacing: -0.24px;
`;
