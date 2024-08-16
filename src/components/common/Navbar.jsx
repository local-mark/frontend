import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../store/CartContext';
import logo from '../../assets/icon/Home/localmark_logo.svg';
import cartIcon from '../../assets/icon/Home/cart_icon.svg';

const categories = [
    {
        category: '전체',
        link: '/gallery',
    },
    {
        category: '의류',
        subcategories: [
            { name: '상의', id: 6 },
            { name: '하의', id: 7 },
            { name: '악세서리', id: 8 },
            { name: '아우터', id: 9 },
            { name: '이너웨어', id: 10 },
        ],
    },
    {
        category: '생활용품',
        subcategories: [
            { name: '청소용품', id: 11 },
            { name: '주방용품', id: 12 },
            { name: '욕실', id: 13 },
        ],
    },
    {
        category: '인테리어',
        subcategories: [
            { name: '홈데코', id: 14 },
            { name: '디자인', id: 15 },
            { name: '책', id: 16 },
            { name: '음반', id: 17 },
            { name: '조명', id: 18 },
        ],
    },
    {
        category: '식품',
        subcategories: [
            { name: '가공식품', id: 19 },
            { name: '음료', id: 20 },
            { name: '신선식품', id: 21 },
        ],
    },
    {
        category: '레저',
        subcategories: [
            { name: '스포츠용품', id: 22 },
            { name: '캠핑용품', id: 23 },
        ],
    },
];

const moreLocal = [
    { name: '로컬레터', link: '/morelocal/letters' },
    { name: '이벤트', link: '/morelocal/events' },
];

const community = [
    { name: '잡담', link: '/creatercommunity/chat' },
    { name: '질문', link: '/creatercommunity/questions' },
    { name: '정보공유', link: '/creatercommunity/info' },
];

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { cartCount } = useContext(CartContext);
    const [dropdownVisible, setDropdownVisible] = useState('');
    const navigate = useNavigate();

    const handleAuthClick = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false);
        } else {
            navigate('/login');
        }
    };

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleMouseEnter = (menu) => {
        setDropdownVisible(menu);
    };

    const handleMouseLeave = () => {
        setDropdownVisible('');
    };

    const handleSubcategoryClick = (subcategoryId) => {
        navigate(`/gallery?category=${subcategoryId}`);
    };

    return (
        <NavbarWrapper onMouseLeave={handleMouseLeave}>
            {!location.pathname.includes('/creatercommunity/write') && (
                <NavbarContainer>
                    <Logo src={logo} alt="LocalMark Logo" onClick={() => navigate('/')} />
                    <Menu>
                        <MenuItem onMouseEnter={() => handleMouseEnter('gallery')}>
                            <span onClick={() => navigate('/gallery')}>제품 갤러리</span>
                        </MenuItem>
                        <MenuItem onMouseEnter={() => handleMouseEnter('local')}>
                            <span onClick={() => navigate('/morelocal/letters')}>more local</span>
                        </MenuItem>
                        <MenuItem onMouseEnter={() => handleMouseEnter('creatercommunity')}>
                            <span onClick={() => navigate('/creatercommunity')}>크리에이터 커뮤니티</span>
                        </MenuItem>
                        <MenuItem>
                            <span onClick={() => navigate('/mypage')}>마이페이지</span>
                        </MenuItem>
                    </Menu>
                    <RightMenu>
                        <CartIconContainer onClick={handleCartClick}>
                            <Icon src={cartIcon} alt="Cart Icon" />
                            {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
                        </CartIconContainer>
                        <Button onClick={handleAuthClick}>{isLoggedIn ? '로그아웃' : '로그인'}</Button>
                    </RightMenu>
                </NavbarContainer>
            )}
            <DropdownWrapper>
                {dropdownVisible === 'gallery' && (
                    <DropdownMenuWrapper onMouseEnter={() => handleMouseEnter('gallery')}>
                        <DropdownMenu>
                            {categories.map((category, index) => (
                                <DropdownItem key={index}>
                                    <DropdownCategory>
                                        <span onClick={() => category.link && navigate(category.link)}>
                                            {category.category}
                                        </span>
                                    </DropdownCategory>
                                    {category.subcategories && (
                                        <SubcategoryList>
                                            {category.subcategories.map((subcategory, subIndex) => (
                                                <SubcategoryItem key={subIndex}>
                                                    <span onClick={() => handleSubcategoryClick(subcategory.id)}>
                                                        {subcategory.name}
                                                    </span>
                                                </SubcategoryItem>
                                            ))}
                                        </SubcategoryList>
                                    )}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </DropdownMenuWrapper>
                )}
                {dropdownVisible === 'local' && (
                    <DropdownMenuWrapper onMouseEnter={() => handleMouseEnter('local')}>
                        <DropdownMenuMoreLocal>
                            {moreLocal.map((item, index) => (
                                <SubMenuItem key={index}>
                                    <span onClick={() => navigate(item.link)}>{item.name}</span>
                                </SubMenuItem>
                            ))}
                        </DropdownMenuMoreLocal>
                    </DropdownMenuWrapper>
                )}
                {dropdownVisible === 'creatercommunity' && (
                    <DropdownMenuWrapper onMouseEnter={() => handleMouseEnter('creatercommunity')}>
                        <DropdownMenuCommunity>
                            {community.map((item, index) => (
                                <SubMenuItem key={index}>
                                    <span onClick={() => navigate(item.link)}>{item.name}</span>
                                </SubMenuItem>
                            ))}
                        </DropdownMenuCommunity>
                    </DropdownMenuWrapper>
                )}
            </DropdownWrapper>
        </NavbarWrapper>
    );
}

const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 1300px;
    white-space: nowrap;
    border-bottom: 0.7px solid #dbe0de;
    position: relative;
`;

const NavbarContainer = styled.nav`
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: #fff;
    overflow: hidden;
`;

const Logo = styled.img`
    width: 190px;
    height: 100px;
    margin-left: 100px;
    cursor: pointer;
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 40px;
    margin-left: -50px;
    cursor: pointer;
`;

const MenuItem = styled.li`
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 23.8px;
    white-space: nowrap;
    position: relative;
    &:hover {
        color: #65bd83;
        border-bottom: 3px solid #65bd83;
    }
`;

const DropdownWrapper = styled.div`
    position: absolute;
    top: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 1000;
`;

const DropdownMenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    animation: fadeIn 0.3s ease-in-out;
    border-top: 0.7px solid #bdbdbd;
    border-bottom: 0.7px solid #bdbdbd;
    background: #fafafa;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const DropdownMenu = styled.div`
    display: flex;
    padding: 20px;
    margin-left: 200px;
    background: #fafafa;
`;

const DropdownMenuMoreLocal = styled.div`
    display: flex;
    padding: 20px;
    margin-right: 245px;
    align-items: flex-start;
    flex-direction: column;
    background: #fafafa;
`;

const DropdownMenuCommunity = styled.div`
    display: flex;
    padding: 20px;
    align-items: flex-start;
    margin-left: 50px;
    flex-direction: column;
    background: #fafafa;
`;

const DropdownItem = styled.div`
    margin-right: 20px;
    width: 100px;
`;

const DropdownCategory = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
`;

const SubcategoryList = styled.ul`
    list-style: none;
    padding: 0;
`;

const SubcategoryItem = styled.li`
    margin-bottom: 5px;
    cursor: pointer;
    &:hover {
        color: #65bd83;
    }
`;

const SubMenuItem = styled.div`
    padding: 5px 0;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: #65bd83;
    }
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-right: 200px;
`;

const Button = styled.button`
    color: #fff;
    padding: 5px;
    margin-left: 10px;
    width: 71px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.28px;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background: #65bd83;
    white-space: nowrap;
`;

const CartIconContainer = styled.div`
    position: relative;
    top: 5px;
    cursor: pointer;
`;

const CartCount = styled.div`
    position: absolute;
    top: -5px;
    right: -13px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background: #ff8162;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
    color: #000;
`;
