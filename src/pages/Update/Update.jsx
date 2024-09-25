import { doc, writeBatch } from "firebase/firestore";
import { database } from "../../config/firebase.config";
import Spinner from "../../components/Spinner/Spinner";
import useItemListLoading from "../../hooks/UseItemListLoading";

const Update = () => {
    const { loading, products, error } = useItemListLoading();

    const bulkInsert = async (dataArray) => {
        const batch = writeBatch(database);

        dataArray.forEach((element, index) => {
            const docRef = doc(database, 'items', `item-${index}`);
            batch.set(docRef, element);
        });

        try {
            await batch.commit();
        } catch (error) {
            console.error('Error escribiendo el batch', error);
        }
    };

    if (error) {
        return <div>Error al cargar los productos: {error.message}</div>; 
    }

    return (
        <main className="section-content">
            <h2>Añadir los ítems a la colección</h2>
            <button onClick={() => bulkInsert(products)} disabled={loading}>
                Añadir ítems
            </button>

            {loading && (
                <div>
                    <h3>Insertando nuevos registros...</h3>
                    <Spinner />
                </div>
            )}
        </main>
    );
}

export default Update;
