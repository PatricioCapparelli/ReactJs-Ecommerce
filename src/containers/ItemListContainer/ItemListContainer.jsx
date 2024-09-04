import { useEffect, useState } from 'react'
import getProducts from '../../components/asyncMock'
import Search from '../../components/Search/Search'

const ItemListContainer = ({ title }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(err => {
            console.log('error: ', err);
        })
    },[])

    return (
        <section className='section-container'>
            <div className='section-container__main'>
                <Search products={products}/>
            </div>
        </section>
    )
}

export default ItemListContainer;