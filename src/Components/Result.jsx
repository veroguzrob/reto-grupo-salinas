import '../Styles/Result.css'
import { useState, useEffect } from "react";
import { onGetForm } from '../Utils/firestore';


const Result = () => {

  useEffect(() => {
    onGetForm((querySnapShot) => {
      const listForm = [];

      querySnapShot.forEach((doc) => {
        const allDataForm = doc.data();
        listForm.push({ ...allDataForm, id: doc.id, });
      });
      setlistForm(listForm)


    });

  }, [])

  const [listForm, setlistForm] = useState(null)


  return (
    <>
      <section className='ctn-txt-result'>
        <p className='txt-result'>Apellido paterno</p>
        <p className='txt-result'>Apellido materno</p>
        <p className='txt-result'>Edad</p>
        <p className='txt-result'>Sexo</p>
        <p className='txt-result'>Correo electrónico</p>
        <p className='txt-result'>Teléfono</p>
        <p className='txt-result'>Acciones</p>
      </section>

      <section className='ctn-result'>
        {listForm && listForm.map((listForm) =>
          <div className="container-note" key={listForm.id} >
            <p className="title"> {listForm.title} </p>
            <p className="text"> {listForm.note} </p>
            <p className='line-result'>{listForm.firstName}</p>
            <p className='line-result'>{listForm.lastNamePat}</p>
            <p className='line-result'>{listForm.lastNameMat}</p>
            <p className='line-result'>{listForm.age}</p>
            <p className='line-result'>sexo</p>
            <p className='line-result'>{listForm.email} electrónico</p>
            <p className='line-result'>{listForm.phone}</p>
            <button className="edit"  >Editar</button>
          </div>)
        }
      </section >

    </>
  )
}
export default Result;
