import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../config/firebase.config";

const useDetailItemLoading = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            setError("El ID del producto no está disponible.");
            setLoading(false);
            return;
        }

        const fetchItem = async () => {
            setLoading(true);
            const docRef = doc(database, 'items', id);
            console.log("ID del documento:", id);
            console.log("Referencia del documento:", docRef);

            try {
                const snapshot = await getDoc(docRef);
                if (snapshot.exists()) {
                    setItem({ id: snapshot.id, ...snapshot.data() });
                    console.log('Datos del documento:', snapshot.data());
                } else {
                    setItem(null);
                    setError("El producto no existe.");
                }
            } catch (error) {
                console.error('Error al encontrar el item', error);
                setItem(null);
                setError("Error al obtener el producto. Intenta nuevamente.");
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    return { item, loading, error };
};

export default useDetailItemLoading;
