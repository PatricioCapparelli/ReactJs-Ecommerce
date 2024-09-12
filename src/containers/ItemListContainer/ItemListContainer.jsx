import Search from '../../components/Search/Search';
import Spinner from '../../components/Spinner/Spinner';
import useItemListLoading from '../../hooks/UseItemListLoading';

const ItemListContainer = () => {
    const {loading, products} = useItemListLoading()

    if (loading) {
        return (
            <section className='section-content'>
                <Spinner />
            </section>
        );
    }

    return (
        <section className='section-container'>
            <div className='section-container__main'>
                <Search products={products} />
            </div>
        </section>
    );
}

export default ItemListContainer;
