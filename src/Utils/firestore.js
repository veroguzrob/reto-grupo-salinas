import { db } from './config'
import { addDoc, collection, onSnapshot } from "firebase/firestore";


export const saveForm = (firstName, lastNamePat, lastNameMat, age, email, phone) => addDoc(collection(db, 'form'), { firstName, lastNamePat, lastNameMat, age, email, phone });

export const onGetForm = (callback) => onSnapshot(collection(db, 'form'), callback);
