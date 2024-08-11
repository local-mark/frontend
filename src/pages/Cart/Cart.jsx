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

    const calculateTotalOrderPrice = () => {
        const brandShipping = new Set();
        const total = cartItems.reduce((sum, item) => {
            const itemPrice = item.price || 0;
            const itemDeliveryFee = brandShipping.has(item.brand_id) ? 0 : item.delivery_fee || 0;
            brandShipping.add(item.brand_id);
            return sum + itemPrice * item.quantity + itemDeliveryFee;
        }, 0);
        return total;
    };

    const formatOptionText = (option) => {
        return Object.values(option).filter((value) => value && value.trim());
    };

    return (
        <CartWrapper>
            <CartHeader>
                <h1>장바구니</h1>
            </CartHeader>
            {cartItems.length === 0 ? (
                <EmptyCartMessage>장바구니가 비어 있습니다.</EmptyCartMessage>
            ) : (
                <>
                    <SelectAllContainer>
                        <input
                            type="checkbox"
                            checked={selectedItems.length === cartItems.length}
                            onChange={handleSelectAll}
                        />
                        <label>전체 선택</label>
                    </SelectAllContainer>
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
                                <ItemDetails>
                                    <ItemName>{item.name}</ItemName>
                                    <ItemOption>{formatOptionText(item.option)}</ItemOption>
                                    <ItemPrice>{(item.price || 0).toLocaleString()}원</ItemPrice>
                                    <ItemDeliveryFee>
                                        배송비: {(item.delivery_fee || 0).toLocaleString()}원
                                    </ItemDeliveryFee>
                                    <QuantityControl>
                                        <button onClick={() => handleQuantityChange(item.id, item.option, -1)}>
                                            -
                                        </button>
                                        <Quantity>{item.quantity}</Quantity>
                                        <button onClick={() => handleQuantityChange(item.id, item.option, 1)}>+</button>
                                    </QuantityControl>
                                    <ItemTotalPrice>
                                        {(
                                            (item.price || 0) * item.quantity +
                                            (item.delivery_fee || 0)
                                        ).toLocaleString()}
                                        원
                                    </ItemTotalPrice>
                                </ItemDetails>
                            </CartItem>
                        ))}
                    </CartItems>
                    <CartActions>
                        <TotalOrderPrice>총 주문 금액: {calculateTotalOrderPrice().toLocaleString()}원</TotalOrderPrice>
                        <RemoveSelectedButton onClick={handleRemoveSelected}>선택된 상품 삭제</RemoveSelectedButton>
                        <OrderButton onClick={() => alert('주문이 완료되었습니다.')}>주문하기</OrderButton>
                    </CartActions>
                </>
            )}
        </CartWrapper>
    );
};

export default Cart;

const CartWrapper = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

const CartHeader = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

const EmptyCartMessage = styled.div`
    text-align: center;
    padding: 50px;
    font-size: 18px;
    color: #999;
`;

const SelectAllContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    input {
        margin-right: 10px;
    }
`;

const CartItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const CartItem = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
`;

const ItemCheckbox = styled.div`
    margin-right: 10px;
`;

const ItemDetails = styled.div`
    flex-grow: 1;
`;

const ItemName = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const ItemOption = styled.div`
    font-size: 14px;
    color: #666;
`;

const ItemPrice = styled.div`
    font-size: 16px;
    color: #333;
`;

const ItemDeliveryFee = styled.div`
    font-size: 14px;
    color: #999;
    margin-top: 5px;
`;

const QuantityControl = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

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
    margin-top: 10px;
    color: #333;
`;

const CartActions = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TotalOrderPrice = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const RemoveSelectedButton = styled.button`
    background-color: #ff4d4f;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
`;

const OrderButton = styled.button`
    background-color: #65bd83;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
`;
