import { useState, useEffect } from "react";
import getProducts from "../components/asyncMock";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { database } from "../config/Firebase.config";


const useItemListLoading = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            setLoading(true);
            
            // getProducts()
            //     .then(response => {
            //         setProducts(response);
            //     })
            //     .catch(err => {
            //         console.log('Error: ', err);
            //     })
            //     .finally(() => {
            //         setLoading(false);
            //     });

                // opciones para usar firestore

            // const dataDoc = doc(database, 'items', 'nVJsozhUdhVZLdv53TLd')
            // getDoc(dataDoc)
            // .then((snapshot) => {
            //     if(snapshot.exists()){
            //     setProducts([ 
            //         { id: snapshot.id, ...snapshot.data() }
            //     ]
            //     );
            //     };
                
            // })
            // .catch((err) => console.log('Error al consultar los datos: ', err))
            // .finally(() =>  setLoading(false))

            const itemsCollection = collection(database, 'items');
            getDocs(itemsCollection)
            .then(snapshot => {
                setProducts(snapshot.docs.map(doc => {
                    return {id: doc.id , ...doc.data()}
                }));
                
            })
            .catch((err) => console.log('Error al consultar los datos: ', err))
            .finally(() => setLoading(false))



        }, []);

    
        return {products, loading}
}

export default useItemListLoading;