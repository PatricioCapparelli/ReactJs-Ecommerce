import { useContext } from 'react';
import { CartContext } from "../../context/cartContext";

const CartItem = ({ id, name, img, stock, price, className, quantity }) => {
    const { removeItem, incrementItemQuantity, removeAllOfItem } = useContext(CartContext);

    const itemClass = stock === '24' ? 'cart-white__item' : 'cart-item';

    return (
        <article className={itemClass} id={id}>
            <div className="cart-item__main">
                <header className="cart-item__detail-header">
                    <picture>
                        <img className="card-item__detail-img" src={`${img}`} alt={name} />
                    </picture>
                    <div>
                        <h2 className="item-detail-header">{name}</h2>
                        <h3>Cantidad: <span className='cart-quantity'>{quantity}</span> </h3>
                        <p className="cart-item__detail-precio">Precio: ${price}</p>
                    </div>
                </header>
                <section style={{ display: 'none'}}>
                    <p className="cart-item__detail-info">Stock disponible: {stock}</p>
                </section> 
                <footer className="cart-item__detail-footer">
                    <div className='container-cart__btns'>
                        <button className='cart-btns btn-uno' onClick={() => incrementItemQuantity(id)}>+</button>
                        <button className='cart-btns btn-dos' onClick={() => removeItem(id)}>-</button>
                    </div>
                </footer>
                <p>Total: ${quantity * price}</p>
                <button className='item-finally' onClick={() => removeAllOfItem(id)}>X</button>
            </div>
        </article>
    );
};

export default CartItem;
