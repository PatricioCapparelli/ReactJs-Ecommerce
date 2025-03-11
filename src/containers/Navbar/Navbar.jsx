import { Icon } from '@iconify/react';
import helado from '/assets/helado.png';
import Title from '../../components/Title/Title';
import CartWidget from '../../components/CartWidget/CartWidget';
import ItemList from '../../components/ItemList/ItemList';
import Accordion from '../../components/Accordion/Accordion';

const Navbar = () => {
    const links = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/Shop' },
        { name: 'Contact', href: '#'}
    ];

    return (
        <header className="header">
            <nav className="navbar container">
                <figure className="navbar__logo">
                    <img className='navbar__logo--img' src={helado} alt="logo helado" />
                    <Title className='navbar' name='Drop' lastname='Creem' />
                </figure>
                <ul className="navbar__menu">
                    <ItemList className='navbar__items' items={links} />
                    <Icon className='navbar__menu--icon' icon="tabler:search" />
                </ul>
                <div className='navbar__icons'>
                    <Accordion/>
                    <CartWidget />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

