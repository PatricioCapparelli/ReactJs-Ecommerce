import { collection, doc, setDoc } from "firebase/firestore";
import { database } from "../config/firebase.config";

const useUpdateOrders = () => {
    
    const insertOrder = async (orderData) => {
        try {
            const orderRef = doc(collection(database, 'orders'));
            await setDoc(orderRef, orderData);
            
        } catch (error) {
            console.error("Error al guardar el pedido: ", error);
        }
    };

    return { insertOrder }
}

export default useUpdateOrders;