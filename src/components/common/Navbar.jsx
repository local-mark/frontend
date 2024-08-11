import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/icon/Home/localmark_logo.svg';
import cartIcon from '../../assets/icon/Home/cart_icon.svg';

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

const moreLocal = [
    { name: '로컬레터', link: '/localletter' },
    { name: '이벤트', link: '/events' },
];

const community = [
    { name: '잡담', link: '/creatercommunity/chat' },
    { name: '질문', link: '/creatercommunity/chat/posts/:id' },
    { name: '정보공유', link: '/creatercommunity/info' },
];

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cartCount, setCartCount] = useState(0); // 카트에 담긴 갯수 상태
    const [dropdownVisible, setDropdownVisible] = useState(''); // 드롭다운 메뉴 가시성 상태
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

    return (
        <NavbarWrapper onMouseLeave={handleMouseLeave}>
            <NavbarContainer>
                <Link to="/">
                    <Logo src={logo} alt="LocalMark Logo" />
                </Link>
                <Menu>
                    <MenuItem onMouseEnter={() => handleMouseEnter('gallery')}>
                        <Link to="/gallery">제품 갤러리</Link>
                    </MenuItem>
                    <MenuItem onMouseEnter={() => handleMouseEnter('local')}>
                        <Link to="/localletter">more local</Link>
                    </MenuItem>
                    <MenuItem onMouseEnter={() => handleMouseEnter('creatercommunity')}>
                        <Link to="/creatercommunity">크리에이터 커뮤니티</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/mypage">마이페이지</Link>
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
            <DropdownWrapper>
                {dropdownVisible === 'gallery' && (
                    <DropdownMenuWrapper onMouseEnter={() => handleMouseEnter('gallery')}>
                        <DropdownMenu>
                            {categories.map((category, index) => (
                                <DropdownItem key={index}>
                                    <DropdownCategory>
                                        <Link to={category.link || '#'}>{category.category}</Link>
                                    </DropdownCategory>
                                    {category.subcategories && (
                                        <SubcategoryList>
                                            {category.subcategories.map((subcategory, subIndex) => (
                                                <SubcategoryItem key={subIndex}>
                                                    <Link to={`/${subcategory}`}>{subcategory}</Link>
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
                                    <Link to={item.link}>{item.name}</Link>
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
                                    <Link to={item.link}>{item.name}</Link>
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
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 40px;
    margin-left: -50px;
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
    &:hover {
        color: #65bd83;
    }
`;

const SubMenuItem = styled.div`
    padding: 5px 0;
    font-weight: bold;
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
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
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
