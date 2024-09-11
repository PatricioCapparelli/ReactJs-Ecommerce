import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        const existingItem = cartItems.find(currentItem => currentItem.item.id === item.id);

        if (existingItem) {
            const updatedCartItems = cartItems.map(currentItem =>
                currentItem.item.id === item.id
                    ? { ...currentItem, quantity: currentItem.quantity + 1 }
                    : currentItem
            );
            setCartItems(updatedCartItems);
        } else {
            const quantity = item.quantity || 1;
            setCartItems([...cartItems, { item, quantity }]);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
