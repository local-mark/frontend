// src/components/common/Navbar.jsx
import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/icon/Home/localmark_logo.svg';
import cartIcon from '../../assets/icon/Home/cart_icon.svg';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cartCount, setCartCount] = useState(0); // 카트에 담긴 갯수 상태
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname.includes('/creatercommunity/write')) {
        return null;
    };

    const handleAuthClick = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false);
        } else {
            navigate('/login');
        }
    };

    // 카트에 아이템 추가하는 함수 (예시용)
    const addToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <NavbarWrapper>
            <NavbarContainer>
                <Link to="/">
                    <Logo src={logo} alt="LocalMark Logo" />
                </Link>
                <Menu>
                    <MenuItem>
                        <Link to="/gallery">제품 갤러리</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/localletter">more local</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/mypage">마이페이지</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/creatercommunity">크리에이터 커뮤니티</Link>
                        {/* 임시 라우터 */}
                    </MenuItem>
                </Menu>
                <RightMenu>
                    <CartIconContainer>
                        <Icon src={cartIcon} alt="Cart Icon" />
                        {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
                    </CartIconContainer>
                    <Button onClick={handleAuthClick}>{isLoggedIn ? '로그아웃' : '로그인'}</Button>
                </RightMenu>
            </NavbarContainer>
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
    color: var(--Color-Background-white, #fff);
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
    background: var(--Color-Main-primary, #65bd83);
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
    background: var(--Color-Main-secondary, #ff8162);
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
    color: #000;
`;
