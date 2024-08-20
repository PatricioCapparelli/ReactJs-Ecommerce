import { Icon } from '@iconify/react';
import Pill from '../Pill/Pill';

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <Pill quantity={2}/>
            <Icon className='cart-widget__icon' icon="heroicons:shopping-cart-20-solid" />
        </div>
    )
}

export default CartWidget;