import { useState, useEffect } from "react";
import getProducts from "../components/asyncMock";


const useItemListLoading = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            setLoading(true);
            getProducts()
                .then(response => {
                    setProducts(response);
                })
                .catch(err => {
                    console.log('Error: ', err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, []);
    
        return {products, loading}
}

export default useItemListLoading;