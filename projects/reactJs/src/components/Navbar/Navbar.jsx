import { Icon } from '@iconify/react/dist/iconify.js';
import helado from '../../assets/helado.png'
import Title from '../Title/Title'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/Cart';

const Navbar = () => {
    return (
        <>
            <header className="header">
                <nav className="navbar container">
                    <figure className="navbar__logo">
                        <img className='navbar__logo--img' src={helado} alt="logo helado"/>
                        <Title name='Drop' lastname='Creem'/>
                    </figure>
                    <ul className="navbar__menu">
                        <li className="navbar__item">
                            <Button name='Shop'/>
                        </li>
                        <li className="navbar__item">
                            <Button name='Know Us'/>
                        </li>
                        <li className="navbar__item">
                            <Button name='Close By'/>
                        </li>
                        <Icon className='navbar__menu--icon' icon="tabler:search" />
                    </ul>
                    <div className='navbar__icons'>
                        <Icon className='navbar__icon' icon="ri:menu-3-fill" />
                        <CartWidget quantity={2}/>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;