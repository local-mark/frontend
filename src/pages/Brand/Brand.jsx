import React from 'react';
import BrandProfileBanner from '../../components/Brand/BrandProfileBanner';
import ProductBrand from '../../components/Brand/ProductBrand';
import styled from 'styled-components';
const Brand = () => {
    return (
        <Wrapper>
            <BrandProfileBanner />
            <ProductBrand />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    margin-bottom: 30px;
    flex-direction: column;
    justify-content: center;
`;
export default Brand;
