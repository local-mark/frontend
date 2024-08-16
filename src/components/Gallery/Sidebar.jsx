import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaChevronUp } from 'react-icons/fa';

const categories = [
    {
        id: null,
        category: '전체',
        link: '/gallery',
    },
    {
        id: 6,
        category: '의류',
        subcategories: [
            { id: 6, name: '상의' },
            { id: 7, name: '하의' },
            { id: 8, name: '악세서리' },
            { id: 9, name: '아우터' },
            { id: 10, name: '이너웨어' },
        ],
    },
    {
        id: 11,
        category: '생활용품',
        subcategories: [
            { id: 11, name: '청소용품' },
            { id: 12, name: '주방용품' },
            { id: 13, name: '욕실' },
        ],
    },
    {
        id: 14,
        category: '인테리어',
        subcategories: [
            { id: 14, name: '홈데코' },
            { id: 15, name: '디자인' },
            { id: 16, name: '책' },
            { id: 17, name: '음반' },
            { id: 18, name: '조명' },
        ],
    },
    {
        id: 19,
        category: '식품',
        subcategories: [
            { id: 19, name: '가공식품' },
            { id: 20, name: '음료' },
            { id: 21, name: '신선식품' },
        ],
    },
    {
        id: 22,
        category: '레저',
        subcategories: [
            { id: 22, name: '스포츠용품' },
            { id: 23, name: '캠핑용품' },
        ],
    },
];

const Sidebar = ({ onCategorySelect }) => {
    const [openCategory, setOpenCategory] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const categoryId = parseInt(params.get('category'), 10);

        if (location.pathname === '/gallery' && !categoryId) {
            setOpenCategory(null); // "전체" 카테고리의 하위 항목들을 열지 않음
            setSelectedCategory(0); // "전체" 카테고리를 선택된 카테고리로 설정
            setSelectedSubcategory(null); // 전체가 선택되었을 때는 서브카테고리 선택 해제
        } else if (categoryId) {
            categories.forEach((category, index) => {
                if (category.subcategories) {
                    const foundSubcategory = category.subcategories.find(
                        (subcategory) => subcategory.id === categoryId
                    );
                    if (foundSubcategory) {
                        setOpenCategory(index);
                        setSelectedCategory(index);
                        setSelectedSubcategory(foundSubcategory.id); // 현재 선택된 서브카테고리 ID 설정
                        onCategorySelect(foundSubcategory.id);
                    }
                }
            });
        }
    }, [location.pathname, location.search]);

    const handleCategoryClick = (index) => {
        if (categories[index].link) {
            navigate(categories[index].link);
            onCategorySelect(categories[index].id); // 선택된 카테고리 ID 전달
            setSelectedCategory(index); // 선택된 카테고리 상태 업데이트
            setSelectedSubcategory(null); // 카테고리를 선택했을 때는 서브카테고리 선택 해제
        } else {
            setOpenCategory(openCategory === index ? null : index);
        }
    };

    const handleSubcategoryClick = (index, subcategory) => {
        setSelectedCategory(index);
        setSelectedSubcategory(subcategory.id); // 서브카테고리의 ID를 상태로 설정
        onCategorySelect(subcategory.id); // 서브카테고리의 ID를 전달
        navigate(`/gallery?category=${subcategory.id}`);
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
                                            <SubcategoryItem key={subcategory.id}>
                                                <SubcategoryLink
                                                    onClick={() => handleSubcategoryClick(index, subcategory)}
                                                    to={`/gallery?category=${subcategory.id}`}
                                                    active={selectedSubcategory === subcategory.id}
                                                >
                                                    {subcategory.name}
                                                </SubcategoryLink>
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

const SubcategoryLink = styled(Link)`
    color: ${(props) => (props.active ? '#65BD83' : '#000')};
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    &:hover {
        color: #65bd83;
    }
`;

export default Sidebar;
