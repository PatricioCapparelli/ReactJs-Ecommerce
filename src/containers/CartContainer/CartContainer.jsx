import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import Spinner from "../../components/Spinner/Spinner";
import CartItem from "../../components/CartItem/CartItem"; 
import IconPresent from "../../components/IconPresent/IconPresent";
import useItemListLoading from "../../hooks/UseItemListLoading";
import ItemButton from "../../components/ItemButton/ItemButton";
import PaymentForm from "../../components/PaymentForm/PaymentForm";

const CartContainer = () => {
    const { cartItems, getCartTotal, removeItem, incrementItemQuantity } = useContext(CartContext);
    const { loading } = useItemListLoading();
    const [showPaymentForm, setShowPaymentForm] = useState(false);

    const handlePaymentClick = () => {
        setShowPaymentForm(true);
    };

    return (
        <section className='section-cart__content'>
            <div className='section-cart__container-main'>
                {loading ? (
                    <Spinner />
                ) : (
                    Array.isArray(cartItems) && cartItems.length > 0 ? (
                        <>
                            {cartItems.map(item => (
                                <CartItem 
                                    key={item.item.id} 
                                    id={item.item.id} 
                                    img={item.item.img} 
                                    price={item.item.price} 
                                    name={item.item.name} 
                                    stock={item.item.stock} 
                                    className="cart-item" 
                                    quantity={item.quantity} 
                                    addItem={incrementItemQuantity}
                                    removeItem={removeItem}
                                />
                            ))}
                            <div className="total-finally">
                                <p>Subtotal: ${getCartTotal()}</p>
                            </div>
                            <ItemButton eventHandler={handlePaymentClick} className='finally-button' name='Terminar Compra' />
                            {showPaymentForm && <PaymentForm />}
                        </>
                    ) : (
                        <IconPresent title='No hay artículos en el carrito...' className='icon-present-detail' />
                    )
                )}
            </div>
        </section>
    );
}

export default CartContainer;

