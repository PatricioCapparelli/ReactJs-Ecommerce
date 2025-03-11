import { Icon } from '@iconify/react';
import helado from '/assets/helado.png';
import Title from '../../components/Title/Title';
import ItemList from '../../components/ItemList/ItemList';
import IconPresent from '../../components/IconPresent/IconPresent';

const Footer = () => {

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/Shop' },
        { name: 'Detail', href: '#' },
        { name: 'Carrito', href: '/cart' },
        { name: 'Sabores', href: '#' },
        { name: 'Postres', href: '#' },
        { name: 'Paletas', href: '#' },
    ];


    return (
        <>
        <footer className="footer">
            <section className="footer-container">
                <div>
                    <figure className="footer__logo">
                        <img className='footer__logo--img' src={helado} alt="logo helado" />
                        <Title className='navbar' name='Drop' lastname='Creem' />
                    </figure>
                    <div className='footer__icons'>
                        <Icon className='footer__icon' icon="ei:sc-facebook"/>
                        <Icon className='footer__icon' icon="tabler:brand-instagram" />
                    </div>
                </div>
                <ul className="footer__menu">
                    <ItemList className='footer__items' items={links} />
                    <Icon className='footer__menu--icon' icon="tabler:search" />
                </ul>
                <div className='footer__icons'>
                    <div>
                    <IconPresent className='icon-present-footer' title='contacto' />
                    <p>Visitanos en nuestras sucursales</p>
                    <p>Dejanos tu consulta</p>
                    <p>Seguinos en instagram!</p>
                    </div>
                    <Icon className='footer__icon' icon="ri:menu-3-fill" />
                </div>
                
            </section>
            <section className='footer__final'>
                <div></div>
                <p>Diseñada por Drop Creem | Copyright © 2024 Drop Creem Helados</p>
            </section>
        </footer>
        </>
    )
}

export default Footer;