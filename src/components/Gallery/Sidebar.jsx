import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaChevronUp } from 'react-icons/fa';

const categories = [
    {
        category: '전체',
        link: '/gallery',
    },
    {
        category: '의류',
        subcategories: ['상의', '하의', '악세서리', '아우터', '이너웨어'],
    },
    {
        category: '생활용품',
        subcategories: ['청소용품', '주방용품', '욕실'],
    },
    {
        category: '인테리어',
        subcategories: ['홈데코', '디자인', '책', '음반', '조명'],
    },
    {
        category: '식품',
        subcategories: ['가공식품', '음료', '신선식품'],
    },
    {
        category: '레저',
        subcategories: ['스포츠용품', '캠핑용품'],
    },
];

const Sidebar = () => {
    const [openCategory, setOpenCategory] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/gallery') {
            setOpenCategory(0);
        } else {
            categories.forEach((category, index) => {
                if (category.subcategories) {
                    category.subcategories.forEach((subcategory) => {
                        if (location.pathname.includes(subcategory)) {
                            setOpenCategory(index);
                            setSelectedCategory(index);
                        }
                    });
                }
            });
        }
    }, [location.pathname]);

    const handleCategoryClick = (index) => {
        if (categories[index].link) {
            navigate(categories[index].link);
        } else {
            setOpenCategory(openCategory === index ? null : index);
        }
    };

    const handleSubcategoryClick = (index, subcategory) => {
        setSelectedCategory(index);
        navigate(`/${subcategory}`);
    };

    return (
        <SidebarWrapper>
            <SelectedCategory>
                <CategoryTitle active={true}>{categories[selectedCategory].category}</CategoryTitle>
                <Divider />
            </SelectedCategory>
            <SidebarContainer>
                {categories.map((category, index) => (
                    <Category key={category.category}>
                        {category.subcategories ? (
                            <>
                                <CategoryHeader
                                    onClick={() => handleCategoryClick(index)}
                                    active={openCategory === index}
                                >
                                    <CategoryName active={openCategory === index}>{category.category}</CategoryName>
                                    {openCategory === index && <FaChevronUp color="#65BD83" />}
                                </CategoryHeader>
                                {openCategory === index && (
                                    <SubcategoryList>
                                        {category.subcategories.map((subcategory) => (
                                            <SubcategoryItem key={subcategory}>
                                                <Link
                                                    onClick={() => handleSubcategoryClick(index, subcategory)}
                                                    to={`/${subcategory}`}
                                                >
                                                    {subcategory}
                                                </Link>
                                            </SubcategoryItem>
                                        ))}
                                    </SubcategoryList>
                                )}
                            </>
                        ) : (
                            <CategoryHeader onClick={() => handleCategoryClick(index)} active={openCategory === index}>
                                <Link to={category.link}>
                                    <CategoryName active={openCategory === index}>{category.category}</CategoryName>
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
    margin-left: 150px;
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
    margin: 5px 0;
`;

const SubcategoryList = styled.ul`
    list-style: none;
    padding-left: 20px;
`;

const SubcategoryItem = styled.li`
    margin: 5px 0;
`;

export default Sidebar;
