import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BrandProfileBanner from '../../components/Brand/BrandProfileBanner';
import ProductBrand from '../../components/Brand/ProductBrand';
import BoardList from '../../components/CreaterCommunity/BoardList';
import styled from 'styled-components';

const BrandProfile = () => {
    const [activeTab, setActiveTab] = useState('products');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Wrapper>
            <BrandProfileBanner />
            <TabContainer>
                <Tab isActive={activeTab === 'products'} onClick={() => handleTabClick('products')}>
                    제품갤러리
                </Tab>
                <Tab isActive={activeTab === 'community'} onClick={() => handleTabClick('community')}>
                    크리에이터 커뮤니티
                </Tab>
            </TabContainer>
            <ContentContainer>{activeTab === 'products' ? <ProductBrand /> : <BoardList />}</ContentContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    margin-bottom: 30px;
    flex-direction: column;
    justify-content: center;
`;

const TabContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const Tab = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    margin: 0 10px;
    border-bottom: ${(props) => (props.isActive ? '3px solid #65BD83' : 'none')};
    color: ${(props) => (props.isActive ? '#65BD83' : '#222')};
    font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
    transition: color 0.3s ease;

    &:hover {
        color: #65bd83;
    }
`;

const ContentContainer = styled.div`
    margin-top: 20px;
`;

export default BrandProfile;
