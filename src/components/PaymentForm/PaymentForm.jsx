import { useState } from 'react';
import Cards from 'react-credit-cards-2';

const PaymentForm = ({ isVisible, onPaymentSuccess, className }) => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onPaymentSuccess();
    };

    return (
        <div className={`payment-card ${isVisible ? 'show' : ''} ${className}`}>
            <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
            />
            {isVisible && (
                <form className='payment-form' onSubmit={handleSubmit}>
                    <div className='payment-form_one'>
                        <input
                            className='payment-input'
                            type="text"
                            name="number"
                            placeholder="Card Number"
                            value={state.number}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                        <input
                            className='payment-input'
                            type="text"
                            name="expiry"
                            placeholder="Expiry"
                            value={state.expiry}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </div>
                    <div className='payment-form_two'>
                        <input
                            className='payment-input_two-first'
                            type="text"
                            name="cvc"
                            placeholder="CVC"
                            value={state.cvc}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                        <input
                            className='payment-input'
                            type="text"
                            name="name"
                            placeholder="Cardholder Name"
                            value={state.name}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </div>
                    <button type='submit' className='finally-button-two'>Finalizar Compra</button>
                </form>
            )}
        </div>
    );
}

export default PaymentForm;
