import ItemButton from '../ItemButton/ItemButton'
import RemoveAddButton from '../RemoveAddButton/RemoveAddButton';

const Item = ({ name, img, stock, price, className, href }) => {
    return (
        <article className={className}>
            <picture>
                <img className="card-item__img" src={img} alt={name} />
            </picture>
            <div className="card-item__main">
                <header className="card-item__header">
                    <h2 className="item-header">
                        {name}
                    </h2>
                </header>
                <section>
                    <p className="card-item__info">
                        Stock disponible: {stock}
                    </p>
                </section>
                <h3>Tipo de orden:</h3>
                <div className='card-buttons'>
                    <ItemButton name='Local' />
                    <ItemButton name='Delivery' />
                </div>
                <footer className="card-item__footer">
                    <p className="card-item__precio">
                        Precio: ${price}
                    </p>
                    <RemoveAddButton/>
                    <button href={href}>detalle</button>
                </footer>
        </div>
        </article >

    )
}

export default Item;