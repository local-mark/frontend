import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../../services/api';

export default function BrandProfileBanner() {
    const navigate = useNavigate();
    const { brandId } = useParams(); // useParams로 brandId를 가져옵니다.
    const [brand, setBrand] = useState(null);

    useEffect(() => {
        const loadBrandData = async () => {
            try {
                const data = await fetchData(`/brand/${brandId}`);
                setBrand(data.result.brand);
            } catch (error) {
                console.error('브랜드 데이터를 불러오는 중 오류가 발생했습니다:', error);
            }
        };

        loadBrandData();
    }, [brandId]);

    if (!brand) {
        return <div>Loading...</div>;
    }

    const handleBrandProfileClick = () => {
        navigate(`/brand/${brand.brand_id}/products`);
    };

    return (
        <Wrapper>
            <Container>
                <BrandProfile>
                    <BrandInfo>
                        <Region>{brand.region_name}</Region>
                        <BrandName onClick={handleBrandProfileClick}>{brand.brand_name}</BrandName>
                        <BrandDescription>{brand.description}</BrandDescription>
                    </BrandInfo>
                </BrandProfile>
                <BrandImage src={brand.brand_image} alt="브랜드 이미지" />
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    min-width: 1400px;
    align-items: flex-start;
    align-self: stretch;
    background: var(--Color-Background-light-gray, #fafafa);
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1100px;
    min-width: 1100px;
    padding: 50px;
    background: var(--Color-Background-light-gray, #fafafa);
`;

const BrandProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
`;

const BrandInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Region = styled.div`
    display: flex;
    width: 65px;
    padding: 4px var(--Text-size-2, 12px);
    justify-content: center;
    align-items: center;
    background-color: #65bd83;
    color: white;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 5px;
`;

const BrandName = styled.div`
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: var(--Text-size-11, 40px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 56px */
    letter-spacing: -0.8px;
    margin-bottom: 5px;
    cursor: pointer;
`;

const BrandDescription = styled.div`
    color: var(--Color-Text-secondary, #616161);
    font-family: Pretendard;
    font-size: var(--Text-size-6, 20px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 28px */
    letter-spacing: -0.4px;
`;

const BrandImage = styled.img`
    height: 315px;
    width: auto;
    flex-shrink: 0;
`;
