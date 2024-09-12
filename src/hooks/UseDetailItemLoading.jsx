import { useState, useEffect } from "react";
import getProducts from "../components/asyncMock"; 
import { useParams } from "react-router-dom";

const useDetailItemLoading = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await getProducts();
                const foundItem = response.find(item => item.id === id);
                setItem(foundItem || null); 
            } catch (err) {
                console.error('Error fetching data:', err);
                setItem(null); 
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return { item, loading };
};

export default useDetailItemLoading;

