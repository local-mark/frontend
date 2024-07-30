import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChevronUp } from 'react-icons/fa';

const categories = [
    {
        name: '전체',
        link: '/gallery',
    },
    {
        name: '의류',
        subcategories: ['상의', '하의', '악세서리', '아우터', '이너웨어'],
    },
    {
        name: '생활용품',
        subcategories: ['청소용품', '주방용품', '욕실'],
    },
    {
        name: '인테리어',
        subcategories: ['홈데코', '디자인', '책', '음반', '조명'],
    },
    {
        name: '식품',
        subcategories: ['가공식품', '음료', '신선식품'],
    },
    {
        name: '레저',
        subcategories: ['스포츠용품', '캠핑용품'],
    },
];

const Sidebar = () => {
    const [openCategory, setOpenCategory] = useState(0);

    const handleCategoryClick = (index) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    return (
        <SidebarWrapper>
            <SelectedCategory>
                <CategoryTitle active={true}>{categories[openCategory].name}</CategoryTitle>
                <Divider />
            </SelectedCategory>
            <SidebarContainer>
                {categories.map((category, index) => (
                    <Category key={category.name}>
                        {category.subcategories ? (
                            <>
                                <CategoryHeader
                                    onClick={() => handleCategoryClick(index)}
                                    active={openCategory === index}
                                >
                                    <CategoryName active={openCategory === index}>{category.name}</CategoryName>
                                    {openCategory === index && <FaChevronUp color="#65BD83" />}
                                </CategoryHeader>
                                {openCategory === index && (
                                    <SubcategoryList>
                                        {category.subcategories.map((subcategory) => (
                                            <SubcategoryItem key={subcategory}>
                                                <Link to={`/${subcategory}`}>{subcategory}</Link>
                                            </SubcategoryItem>
                                        ))}
                                    </SubcategoryList>
                                )}
                            </>
                        ) : (
                            <CategoryHeader onClick={() => handleCategoryClick(index)} active={openCategory === index}>
                                <Link to={category.link}>
                                    <CategoryName active={openCategory === index}>{category.name}</CategoryName>
                                </Link>
                            </CategoryHeader>
                        )}
                    </Category>
                ))}
            </SidebarContainer>
        </SidebarWrapper>
    );
};

const SidebarWrapper = styled.div`
    width: 250px;
    padding: 20px;
    margin-left: 200px;
    margin-top: 30px;
`;

const SelectedCategory = styled.div`
    margin-bottom: 20px;
`;

const SidebarContainer = styled.div``;

const Category = styled.div`
    margin-bottom: 10px;
`;

const CategoryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: ${(props) => (props.active ? '#65BD83' : '#000')};
`;

const CategoryName = styled.div`
    font-family: Pretendard;
    font-size: var(--Text-size-5, 18px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
    color: ${(props) => (props.active ? '#65BD83' : '#000')};
`;
const CategoryTitle = styled.div`
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: var(--Spacing-5, 24px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 33.6px */
    letter-spacing: -0.48px;
`;
const Divider = styled.div`
    width: 204px;
    height: 4px;
    background: var(--Color-Main-primary, #65bd83);
    margin: 5px 0; /* Add some margin for spacing */
`;

const SubcategoryList = styled.ul`
    list-style: none;
    padding-left: 20px;
`;

const SubcategoryItem = styled.li`
    margin: 5px 0;
`;

export default Sidebar;
