import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import Spinner from "../../components/Spinner/Spinner";
import CartItem from "../../components/CartItem/CartItem"; 
import IconPresent from "../../components/IconPresent/IconPresent";
import ItemButton from "../../components/ItemButton/ItemButton";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import useItemListLoading from "../../hooks/UseItemListLoading";
import useUpdateOrders from "../../hooks/useUpdateOrders"; 
import Swal from "sweetalert2";

const CartContainer = () => {
    const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
    const { loading, setLoading } = useItemListLoading(); 
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const { insertOrder } = useUpdateOrders();

    const handlePaymentClick = () => {
        setShowPaymentForm(prevState => !prevState); 
    };
    // si no hay items , no mostrar metodo de pago
    useEffect(() => {
        if (cartItems.length === 0) {
            setShowPaymentForm(false);
        }
    }, [cartItems]);

    const handlePaymentSuccess = async (paymentData) => {
        const orderData = {
            items: cartItems,
            total: getCartTotal(),
            timestamp: new Date(),
            paymentDetails: paymentData, // insertando los detalles del pago
        };
    
        try {
            await insertOrder(orderData); // insertando en firestore
            clearCart(); 
            
            // pago completado
            await Swal.fire({
                title: '¡Pago completado!',
                text: 'Tu pedido se ha realizado con éxito.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
    
            setShowPaymentForm(false);
            setLoading(false); 
            // error en el pago
        } catch (error) {
            console.error("Error al procesar el pago: ", error);
            
            await Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al realizar el pago. Intenta de nuevo.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };
    

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
                    onPaymentSuccess={handlePaymentSuccess}
                    className={showPaymentForm ? 'show' : ''}
                />
            </div>
        </section>
    );
}

export default CartContainer;


