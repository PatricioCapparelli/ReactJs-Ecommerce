import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADJzGTrqXitM6uU8Z_Acg3wVg5dV5DAyE",
    authDomain: "ch-reactjs-project.firebaseapp.com",
    projectId: "ch-reactjs-project",
    storageBucket: "ch-reactjs-project.firebasestorage.app",
    messagingSenderId: "585684535001",
    appId: "1:585684535001:web:625fc361e3a31cd1d7e0c8"
};

// inicializar firebase

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
