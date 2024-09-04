import { Icon } from '@iconify/react';
import Pill from '../Pill/Pill';

const CartWidget = ({quantity}) => {
    return (
        <div className='cart-widget'>
            <Pill quantity={quantity}/>
            <Icon className='cart-widget__icon' icon="heroicons:shopping-cart-20-solid" />
        </div>
    )
}

export default CartWidget;