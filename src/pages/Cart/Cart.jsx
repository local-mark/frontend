import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../store/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateCartItem } = useContext(CartContext);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectItem = (itemId, option) => {
        const itemKey = `${itemId}-${JSON.stringify(option)}`;
        if (selectedItems.some((key) => key.id === itemId && JSON.stringify(key.option) === JSON.stringify(option))) {
            setSelectedItems(
                selectedItems.filter(
                    (key) => !(key.id === itemId && JSON.stringify(key.option) === JSON.stringify(option))
                )
            );
        } else {
            setSelectedItems([...selectedItems, { id: itemId, option }]);
        }
    };

    const handleSelectAll = () => {
        if (selectedItems.length === cartItems.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(cartItems.map((item) => ({ id: item.id, option: item.option })));
        }
    };

    const handleQuantityChange = (itemId, option, delta) => {
        const updatedItem = cartItems.find(
            (item) => item.id === itemId && JSON.stringify(item.option) === JSON.stringify(option)
        );
        if (updatedItem) {
            const newQuantity = Math.max(1, updatedItem.quantity + delta);
            updateCartItem(itemId, option, newQuantity);
        }
    };

    const handleRemoveSelected = () => {
        selectedItems.forEach((itemKey) => {
            removeFromCart(itemKey.id, itemKey.option);
        });
        setSelectedItems([]);
    };

    const calculateTotalProductPrice = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const calculateTotalDeliveryFee = () => {
        const brandShipping = new Set();
        return cartItems.reduce((sum, item) => {
            if (!brandShipping.has(item.brand_id)) {
                brandShipping.add(item.brand_id);
                return sum + (item.delivery_fee || 0);
            }
            return sum;
        }, 0);
    };

    const calculateTotalOrderPrice = () => {
        return calculateTotalProductPrice() + calculateTotalDeliveryFee();
    };

    const formatOptionText = (option) => {
        return Object.values(option).filter((value) => value && value.trim());
    };

    return (
        <CartWrapper>
            <CartHeader>
                <h1>장바구니</h1>
            </CartHeader>
            <HeadLine />
            {cartItems.length === 0 ? (
                <EmptyCartMessage>장바구니가 비어 있습니다.</EmptyCartMessage>
            ) : (
                <>
                    <TableHeader>
                        <SelectAllContainer>
                            <input
                                type="checkbox"
                                checked={selectedItems.length === cartItems.length}
                                onChange={handleSelectAll}
                            />
                        </SelectAllContainer>
                        <th>상품정보</th>
                        <th>수량</th>
                        <th>주문금액</th>
                        <th>배송비</th>
                    </TableHeader>
                    <CartItems>
                        {cartItems.map((item) => (
                            <CartItem key={`${item.id}-${JSON.stringify(item.option)}`}>
                                <ItemCheckbox>
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.some(
                                            (key) =>
                                                key.id === item.id &&
                                                JSON.stringify(key.option) === JSON.stringify(item.option)
                                        )}
                                        onChange={() => handleSelectItem(item.id, item.option)}
                                    />
                                </ItemCheckbox>
                                <ItemInfo>
                                    <ItemImage src={item.image} alt={item.name} />
                                    <div>
                                        <BrandName>{item.brand_name}</BrandName>
                                        <ItemName>{item.name}</ItemName>
                                        <ItemOption>{formatOptionText(item.option)}</ItemOption>
                                    </div>
                                </ItemInfo>
                                <QuantityControl>
                                    <button onClick={() => handleQuantityChange(item.id, item.option, -1)}>-</button>
                                    <Quantity>{item.quantity}</Quantity>
                                    <button onClick={() => handleQuantityChange(item.id, item.option, 1)}>+</button>
                                </QuantityControl>
                                <ItemTotalPrice>{(item.price * item.quantity).toLocaleString()}원</ItemTotalPrice>
                                <ItemDeliveryFee>{item.delivery_fee.toLocaleString()}원</ItemDeliveryFee>
                            </CartItem>
                        ))}
                    </CartItems>
                    <RemoveSelectedButton onClick={handleRemoveSelected}>선택된 상품 삭제</RemoveSelectedButton>

                    <BottomLine />

                    <CartActions>
                        <SummaryContainer>
                            <SummaryItem>
                                <SummaryLabel>총 상품 금액</SummaryLabel>
                                <SummaryValue>{calculateTotalProductPrice().toLocaleString()}원</SummaryValue>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryLabel>배송비</SummaryLabel>
                                <SummaryValue>{calculateTotalDeliveryFee().toLocaleString()}원</SummaryValue>
                            </SummaryItem>
                            <SummaryItem total>
                                <SummaryLabel>결제 금액</SummaryLabel>
                                <SummaryValue>{calculateTotalOrderPrice().toLocaleString()}원</SummaryValue>
                            </SummaryItem>
                            <ButtonContainer>
                                <OrderButton onClick={() => alert('주문이 완료되었습니다.')}>
                                    {calculateTotalOrderPrice().toLocaleString()}원 결제하기
                                </OrderButton>
                            </ButtonContainer>
                        </SummaryContainer>
                    </CartActions>
                </>
            )}
        </CartWrapper>
    );
};

export default Cart;

const CartWrapper = styled.div`
    padding: 20px;
    max-width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    input {
        width: 20px;
        height: 20px;
    }
`;

const CartHeader = styled.div`
    color: var(--Color-Text-primary, #222);
    text-align: center;
    font-family: Pretendard;
    font-size: var(--Text-size-10, 32px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
    letter-spacing: -0.64px;
`;

const HeadLine = styled.div`
    width: 1200px;
    height: 4px;
    margin-top: 5px;
    background: var(--Color-Main-primary, #65bd83);
`;

const BottomLine = styled.div`
    width: 1200px;
    height: 4px;
    margin-top: 30px;
    background: var(--Color-Main-primary, #65bd83);
`;

const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
    padding: 20px 0;
    width: 1200px;
    border-bottom: 2px solid var(--Color-Gray-gray-400, #bdbdbd);
    font-weight: bold;
    text-align: center;
    color: var(--Color-Text-primary, #222);
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 39.2px */
    letter-spacing: -0.56px;
    color: #666;
`;

const SelectAllContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const EmptyCartMessage = styled.div`
    text-align: center;
    padding: 50px;
    font-size: 18px;
    color: #999;
`;

const CartItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const CartItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    width: 1200px;
`;

const ItemCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ItemInfo = styled.div`
    display: flex;
`;

const ItemImage = styled.img`
    width: 180px;
    height: 180px;
    object-fit: cover;
    margin-right: 25px;
`;

const BrandName = styled.div`
    color: var(--Color-Text-primary, #222);
    align-self: stretch;
    margin-top: 15px;

    /* B4_M */
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
`;

const ItemName = styled.div`
    color: var(--Color-Text-primary, #222);

    margin-top: 20px;
    /* ST3_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-6, 20px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: -0.4px;
`;

const ItemOption = styled.div`
    color: var(--Color-Text-secondary, #616161);

    /* B7_R */
    font-family: Pretendard;
    font-size: var(--Text-size-3, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
`;

const QuantityControl = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        width: 30px;
        height: 30px;
        border: 1px solid #ddd;
        background: #f0f0f0;
        cursor: pointer;
    }
`;

const Quantity = styled.div`
    margin: 0 10px;
    font-size: 16px;
`;

const ItemTotalPrice = styled.div`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #333;
`;

const ItemDeliveryFee = styled.div`
    font-size: 14px;
    color: #999;
    text-align: center;
`;

const CartActions = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    width: 100%;
`;

const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    width: 1200px;
    padding: 30px;
    min-width: 1200px;
    max-width: 1200px;
`;

const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Pretendard;
    color: var(--Color-Text-primary, #222);
    font-family: Pretendard;
    font-size: var(--Text-size-10, 24px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 44.8px */
    letter-spacing: -0.64px;
    font-weight: ${(props) => (props.total ? 'bold' : '400')};
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
    margin-bottom: ${(props) => (props.total ? '20px' : '0')};
`;

const SummaryLabel = styled.div`
    color: var(--Color-Text-secondary, #616161);
`;

const SummaryValue = styled.div`
    color: var(--Color-Text-primary, #222);
`;

const RemoveSelectedButton = styled.button`
    background: #222222;
    color: #fff;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    font-family: Pretendard;
    font-size: var(--Text-size-3, 15px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
    margin-left: 20px;
`;

const ButtonContainer = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const OrderButton = styled.button`
    background-color: #65bd83;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    width: 588px;
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: var(--Text-size-10, 24px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 44.8px */
    letter-spacing: -0.64px;
`;
