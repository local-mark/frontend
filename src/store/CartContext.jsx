import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0); // 옵션 기준으로 장바구니 아이템 갯수 상태

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex(
                (cartItem) =>
                    cartItem.id === item.id &&
                    cartItem.brand_id === item.brand_id &&
                    JSON.stringify(cartItem.option) === JSON.stringify(item.option)
            );

            if (existingItemIndex >= 0) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += item.quantity;
                return updatedItems;
            } else {
                return [...prevItems, item];
            }
        });
    };

    const removeFromCart = (itemId, option) => {
        console.log(`Removing item: ${itemId}, ${option}`);
        setCartItems((prevItems) =>
            prevItems.filter(
                (item) => !(item.id === parseInt(itemId) && JSON.stringify(item.option) === JSON.stringify(option))
            )
        );
    };

    const updateCartItem = (itemId, option, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId && JSON.stringify(item.option) === JSON.stringify(option)
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
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

    const calculateCartCount = () => {
        // 옵션 기준으로 유니크한 상품 갯수를 반환
        return cartItems.length;
    };

    useEffect(() => {
        setCartCount(calculateCartCount());
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateCartItem,
                clearCart,
                calculateTotalOrderPrice,
                cartCount, // 옵션 기준으로 계산된 장바구니 갯수
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
