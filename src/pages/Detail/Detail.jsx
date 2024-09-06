import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import getProducts from "../../components/asyncMock";

const Detail = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then(response => {
                const foundItem = response.find(item => item.id === id);
                setItem(foundItem);
                setLoading(false);
            })
            .catch(err => {
                console.log('error: ', err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    const className = item.stock === '24' ? 'card-white__item' : 'card-item';

    return (
        <>
        <section className='section-container'>
            <div className='section-container__main'>
                <ItemDetail className={className} {...item} />
            </div>
        </section>
        </>
    );
};

export default Detail;

