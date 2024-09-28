import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../config/firebase.config";


const useItemListLoading = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

        useEffect(() => {

        const itemsCollection = collection(database, 'items');
        setLoading(true)
        getDocs(itemsCollection)
        .then(snapshot => {
            setProducts(snapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }));

            })
            .catch((err) => console.log('Error al consultar los datos: ', err))
            .finally(() => setLoading(false))
        }, []);


    return { products, loading, setLoading }
}

export default useItemListLoading;