import Swal from 'sweetalert2';

const handlePaymentSuccess = async (setShowPaymentForm, setLoading, clearCart) => {
    setShowPaymentForm(false);
    setLoading(true); 

    await new Promise(resolve => setTimeout(resolve, 2000)); 

    setLoading(false); 
    Swal.fire({
        icon: 'success',
        title: 'Pago finalizado con éxito',
        text: '¡Gracias por tu compra!',
    });
    clearCart();
};

export default handlePaymentSuccess;