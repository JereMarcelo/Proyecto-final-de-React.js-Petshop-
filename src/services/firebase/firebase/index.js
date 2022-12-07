import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Inicialize Firebase
const app = initializeApp(firebaseConfig);
//aca agarro la base de datos de mi proyecto de firebase. Yo utilizo de referencia la base de datos 
export const db = getFirestore(app)