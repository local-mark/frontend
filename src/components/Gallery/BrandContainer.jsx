import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../../services/api';

export default function BrandContainer({ brandId }) {
    const navigate = useNavigate();
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
    width: 150px;
    height: auto;
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
    width: 50px;

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
