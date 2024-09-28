import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, quantity) => {
        if (!item || !item.id || quantity <= 0) return; 
        const alreadyExists = cartItems.find(currentItem => currentItem.item.id === item.id);
    
        if (alreadyExists) {
            updateItemQuantity(item.id, quantity);
        } else {
            setCartItems([...cartItems, { item, quantity: Number(quantity) }]);
        }
    };
    
    
    const updateItemQuantity = (id, quantity) => {
        setCartItems(cartItems.map(currentItem => 
            currentItem.item.id === id 
                ? { ...currentItem, quantity: currentItem.quantity + quantity }
                : currentItem
        ));
    };
    

    const removeItem = (id) => {
        const updatedCartItems = cartItems.map(currentItem =>
            currentItem.item.id === id
                ? { ...currentItem, quantity: currentItem.quantity - 1 }
                : currentItem
        ).filter(currentItem => currentItem.quantity > 0); 

        setCartItems(updatedCartItems);
    };

    const removeAllOfItem = (id) => {
        const updatedCartItems = cartItems.filter(currentItem => currentItem.item.id !== id);
        setCartItems(updatedCartItems);
    };
    

    const clearCart = () => {
        setCartItems([]);
    };

    const incrementItemQuantity = (id) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.item.id === id);
            
            if (existingItem) {
                const availableStock = Number(existingItem.item.stock);
                const currentQuantity = existingItem.quantity;
    
                if (currentQuantity < availableStock) {
                    return prevItems.map(i =>
                        i.item.id === id
                            ? { ...i, quantity: i.quantity + 1 }
                            : i
                    );
                } else {
                    alert("No hay suficiente stock");
                    return prevItems; 
                }
            } else {
                alert("El artículo no se encuentra en el carrito");
                return prevItems; 
            }
        });
    };
    
    

    const getCartQuantity = () => {
        return cartItems.reduce((acc, act) => acc + act.quantity, 0) || 0; 
    };
    

    const getCartTotal = () => {
        return cartItems.reduce((acc, act) => acc + (act.item.price * act.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart, getCartQuantity, getCartTotal, incrementItemQuantity, removeAllOfItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
