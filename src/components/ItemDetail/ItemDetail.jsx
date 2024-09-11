import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import ItemButton from '../ItemButton/ItemButton'; 
import RemoveAddButton from '../RemoveAddButton/RemoveAddButton'; 


const ItemDetail = ({ id, name, img, stock, price, className }) => {
    const {addItem} = useContext(CartContext);

    const handleAdd = () => {
        addItem({id, name, img, stock, price, className })
    }
    
    return (
        <article className={className}>
            <picture>
                <img className="card-item__detail-img" src={`../${img}`} alt={name} />
            </picture>
            <div className="card-item__main">
                <header className="card-item__detail-header">
                    <h2 className="item-detail-header">
                        {name}
                    </h2>
                </header>
                <section>
                    <p className="card-item__detail-info">
                        Stock disponible: {stock}
                    </p>
                </section>
                <h3>Tipo de orden:</h3>
                <div className='card-buttons__detail'>
                    <ItemButton className='item-button' name='Local' />
                    <ItemButton className='item-button' name='Delivery' />
                </div>
                <footer className="card-item__detail-footer">
                    <p className="card-item__detail-precio">
                        Precio: ${price}
                    </p>
                    <RemoveAddButton name='+1' lastname='-1'> <p> Or </p>  </RemoveAddButton>
                </footer>
                <ItemButton eventHandler={handleAdd} className='item-button__foot' name='Agregar al carrito'></ItemButton>
            </div>
        </article>
    );
}

export default ItemDetail;
