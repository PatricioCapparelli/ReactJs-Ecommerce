import ItemDetail from "../../components/ItemDetail/ItemDetail";
import useDetailItemLoading from "../../hooks/UseDetailItemLoading";
import Spinner from '../../components/Spinner/Spinner';
import IconPresent from '../../components/IconPresent/IconPresent'

const Detail = () => {
    const { item, loading } = useDetailItemLoading();

    const stock = item?.stock ?? '0'; 

    const className = stock === '24' ? 'card-white__item' : 'card-item';

    return (
        <section className='section-content'>
            <div className='section-container__main'>
                { loading ? <Spinner /> 
                : item ? <ItemDetail className={className} {...item} /> 
                : <IconPresent title='Helado no disponible...' className='icon-present-detail'/> }  
            </div>
        </section>
    );
};

export default Detail;
