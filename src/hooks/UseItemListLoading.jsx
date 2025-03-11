import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../config/firebase.config";

const useItemListLoading = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const itemsCollection = collection(database, "items");
                const snapshot = await getDocs(itemsCollection);
                const fetchedProducts = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(fetchedProducts);
            } catch (err) {
                setError("Error al consultar los datos: " + err.message);
                console.error("Error al consultar los datos:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    return { products, loading, error };
};

export default useItemListLoading;
