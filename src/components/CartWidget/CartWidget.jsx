import { Icon } from '@iconify/react';
import Pill from '../Pill/Pill';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { getCartQuantity } = useContext(CartContext); 

    return (
        <div className='cart-widget'>
            <Link to={`/cart`}>
                <Pill quantity={getCartQuantity()} /> 
                <Icon className='cart-widget__icon' icon="heroicons:shopping-cart-20-solid" />
            </Link>
        </div>
    );
}

export default CartWidget;
