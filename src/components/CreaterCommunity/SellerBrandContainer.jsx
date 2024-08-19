import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../../services/api';

export default function SellerBrandContainer({ brandId }) {
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
        navigate(`/brandprofile/${brand.brand_id}/products`);
    };

    return (
        <Container>
            <BrandProfile>
                <ProfileImage onClick={handleBrandProfileClick} src={brand.brand_image} alt="브랜드 프로필" />
                <BrandInfo>
                    <Region>{brand.region_name}</Region>
                    <BrandName>{brand.brand_name}</BrandName>
                    <BrandDescription>{brand.description}</BrandDescription>
                </BrandInfo>
            </BrandProfile>
            <ViewBrandButton onClick={handleBrandProfileClick}>브랜드 둘러보기</ViewBrandButton>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 1200px;
    margin: 30px;
    justify-content: space-between;
    align-items: center;
    background: var(--Color-Background-light-gray, #fafafa);
    padding: 20px;
    border-radius: 5px;
`;

const BrandProfile = styled.div`
    display: flex;
    align-items: center;
`;

const ProfileImage = styled.img`
    width: 180px;
    height: 180px;
    background-color: #e0e0e0;
    margin-right: 20px;
    cursor: pointer;
`;

const BrandInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Region = styled.div`
    display: flex;
    padding: 6px var(--Text-size-2, 12px);
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 25px;
    border-radius: 5px;
    background: var(--Color-Main-primary, #65bd83);
    color: #fff;
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
    width: 80px;
`;

const BrandName = styled.div`
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: var(--Spacing-5, 24px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 33.6px */
    letter-spacing: -0.48px;
    margin-bottom: 25px;
`;

const BrandDescription = styled.div`
    overflow: hidden;
    color: var(--Color-Text-secondary, #616161);
    text-overflow: ellipsis;

    /* B4_M */
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
`;

const ViewBrandButton = styled.button`
    display: flex;
    width: 223px;
    padding: var(--Text-size-6, 20px) var(--Spacing-9, 56px);
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 100px;
    background: var(--Color-Main-secondary, #ff8162);
    color: #fff;

    /* B1_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-5, 18px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e56b50;
    }
`;
