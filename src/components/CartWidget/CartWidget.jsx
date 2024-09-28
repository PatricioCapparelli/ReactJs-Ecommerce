import { Icon } from '@iconify/react';
import Pill from '../Pill/Pill';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const CartWidget = () => {
    const { getCartQuantity } = useContext(CartContext); 

    return (
        <div className='cart-widget'>
            <Pill quantity={getCartQuantity()} /> 
            <Icon className='cart-widget__icon' icon="heroicons:shopping-cart-20-solid" />
        </div>
    );
}

export default CartWidget;
