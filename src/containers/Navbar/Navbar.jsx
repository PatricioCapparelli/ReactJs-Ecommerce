import { Icon } from '@iconify/react';
import helado from '../../assets/helado.png';
import Title from '../../components/Title/Title';
import CartWidget from '../../components/CartWidget/Cart';
import ItemList from '../../components/ItemList/ItemList';

const Navbar = () => {
    const links = [
        { name: 'Shop', href: '#' },
        { name: 'Know Us', href: '#' },
        { name: 'Close By', href: '#' }
    ];

    return (
        <header className="header">
            <nav className="navbar container">
                <figure className="navbar__logo">
                    <img className='navbar__logo--img' src={helado} alt="logo helado" />
                    <Title name='Drop' lastname='Creem' />
                </figure>
                <ul className="navbar__menu">
                    <ItemList items={links} />
                    <Icon className='navbar__menu--icon' icon="tabler:search" />
                </ul>
                <div className='navbar__icons'>
                    <Icon className='navbar__icon' icon="ri:menu-3-fill" />
                    <CartWidget />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

    // const [quantity, setQuantity] = useState(0);

    // const changeQuantity = () => {
    //     setQuantity(quantity + 1)
    // }
