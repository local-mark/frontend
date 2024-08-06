import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import mockup1 from '../../assets/image/Gallery/mockup_1.svg';

const mockData = {
    brand: [
        {
            brand_id: 1,
            region_name: '성수',
            brand_name: '브랜드명',
            description: '브랜드 소개',
            brand_url: 'https://brand.com',
            brand_image: mockup1,
        },
    ],
};

export default function BrandProfileBanner() {
    const navigate = useNavigate();
    const brand = mockData.brand[0];

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
    width: 510px;
    height: 382px;
    flex-shrink: 0;
`;
