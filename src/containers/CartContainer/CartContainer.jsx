import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import Spinner from "../../components/Spinner/Spinner";
import CartItem from "../../components/CartItem/CartItem"; 
import IconPresent from "../../components/IconPresent/IconPresent";
import useItemListLoading from "../../hooks/UseItemListLoading";
import ItemButton from "../../components/ItemButton/ItemButton";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import handlePaymentSuccess from "../../../handlePaymentSucces";

const CartContainer = () => {
    const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
    const { loading, setLoading } = useItemListLoading(); 
    const [showPaymentForm, setShowPaymentForm] = useState(false);

    const handlePaymentClick = () => {
        setShowPaymentForm(prevState => !prevState); 
    };

    useEffect(() => {
        if (cartItems.length === 0) {
            setShowPaymentForm(false);
        }
    }, [cartItems]);

    if (loading) {
        return (
            <section className='section-content'>
                <Spinner />
            </section>
        );
    }

    return (
        <section className='section-cart__content'>
            <div className='section-cart__container-main'>
                {Array.isArray(cartItems) && cartItems.length > 0 ? (
                    <>
                        {cartItems.map(item => (
                            <CartItem 
                                key={item.item.id} 
                                {...item.item}
                                {...item}
                            />
                        ))}
                        <div className="total-finally">
                            <p>Subtotal: ${getCartTotal()}</p>
                        </div>
                        <ItemButton 
                            eventHandler={handlePaymentClick} 
                            className='finally-button' 
                            name={showPaymentForm ? 'Ocultar' : 'Terminar Compra'} 
                        />
                    </>
                ) : (
                    <IconPresent title='No hay artículos en el carrito' className='icon-present-detail' />
                )}

                <PaymentForm 
                    isVisible={showPaymentForm} 
                    onPaymentSuccess={() => handlePaymentSuccess(setShowPaymentForm, setLoading, clearCart)} 
                    className={showPaymentForm ? 'show' : ''}
                />
            </div>
        </section>
    );
}

export default CartContainer;


