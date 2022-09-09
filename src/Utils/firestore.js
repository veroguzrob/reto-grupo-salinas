import { db } from './config'
import { addDoc, collection, onSnapshot, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";


export const saveForm = (firstName, lastNamePat, lastNameMat, age, gender, email, phone) => addDoc(collection(db, 'form'), { firstName, lastNamePat, lastNameMat, age, gender, email, phone });

export const onGetForm = (callback) => onSnapshot(collection(db, 'form'), callback);

export const getForm = async (idForm) => {
  const docRef = doc(db, "form", idForm);
  const listForm = await getDoc(docRef);

  if (listForm.exists()) {

    return listForm.data()

  } else {

  }
}

export const updateOnePerson = async (idForm, objStateForm) => {
  const noteRef = doc(db, "form", idForm);
  return await updateDoc(noteRef, objStateForm);
}

export const deleteOnePerson = (idForm) => deleteDoc(doc(db, "notes", idForm));