import React, { useState } from 'react';
import styled from 'styled-components';

const categories = {
    의류: ['상의', '하의', '악세서리', '아우터', '이너웨어'],
    생활용품: ['청소용품', '주방용품', '욕실'],
    인테리어: ['홈데코', '디자인', '책', '음반', '조명'],
    식품: ['가공식품', '음료', '신선식품'],
    레저: ['스포츠용품', '캠핑용품'],
};

const GallerySidebar = ({ onCategorySelect }) => {
    const [openCategory, setOpenCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <SidebarContainer>
            {Object.keys(categories).map((category) => (
                <div key={category}>
                    <Category onClick={() => handleCategoryClick(category)}>{category}</Category>
                    {openCategory === category && (
                        <SubCategoryList>
                            {categories[category].map((subCategory) => (
                                <SubCategory key={subCategory} onClick={() => onCategorySelect(subCategory)}>
                                    {subCategory}
                                </SubCategory>
                            ))}
                        </SubCategoryList>
                    )}
                </div>
            ))}
        </SidebarContainer>
    );
};

const SidebarContainer = styled.div`
    width: 200px;
    padding: 20px;
`;

const Category = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
    cursor: pointer;
`;

const SubCategoryList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 20px 10px;
`;

const SubCategory = styled.li`
    margin-bottom: 5px;
    cursor: pointer;
`;

export default GallerySidebar;
