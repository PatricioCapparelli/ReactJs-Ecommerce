import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../config/firebase.config";

const useDetailItemLoading = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            if (!id) {
                console.error("El ID es indefinido");
                setLoading(false);
                return;
            }

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
                }
            } catch (error) {
                console.error('Error al encontrar el item', error);
                setItem(null);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    return { item, loading };
};

export default useDetailItemLoading;
