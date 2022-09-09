import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { CgAsterisk } from 'react-icons/cg';
import { deleteOnePerson, getForm, updateOnePerson } from '../Utils/firestore';
import Header from './Header';
import Result from './Result';


const EditForm = () => {
  const params = useParams();
  const [dataForm, setDataForm] = useState(null)


  const handleChangeName = (e) => {
    setDataForm((formGet) => {
      return { ...formGet, firstName: e.target.value }
    })
  }
  const handleChangeLnP = (e) => {
    setDataForm((formGet) => {
      return { ...formGet, lastNamePat: e.target.value }
    })
  }
  const handleChangeLnM = (e) => {
    setDataForm((formGet) => {
      return { ...formGet, lastNameMat: e.target.value }
    })
  }
  const handleChangeAge = (e) => {
    setDataForm((formGet) => {
      return { ...formGet, age: e.target.value }
    })
  }
  const handleChangeGender = (e) => {
    setDataForm((formGet) => {
      return { ...formGet, gender: e.target.value }

    })
  }
  const handleChangeEmail = (e) => {
    setDataForm((formGet) => {
      return { ...formGet, email: e.target.value }
    })
  }
  const handleChangePhone = (e) => {
    setDataForm((formGet) => {
      return { ...formGet, phone: e.target.value }
    })
  }

  useEffect(() => {
    const getData = async () => {
      return await getForm(params.idEdit)
    }
    getData().then((data) => { setDataForm(data) })
  }, [params])

  const navigate = useNavigate()

  return (
    <>
      <Header />
      {dataForm && <> <section className="header">
        <p className="title1">inicio / Formulario Reactivo</p>
        <p className="title2">Formulario Reactivo</p>
      </section>
        <section className='container-form'>
          <div className='recomendation'>
            <p className='recomendation'>Favor de completar los siguentes campos. Los campos con </p>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='recomendation'> son obligatorios</p>
          </div>

          <form className='form' id='form'>
            <div className='lines'>
              <i className='asterisk' ><CgAsterisk /></i>
              <label className='form-text'> Nombre (s):</label><br />
              <input type="text" id='firstName' value={dataForm.firstName} onChange={handleChangeName} />
              <div id='error'></div>
            </div>
            <div className='lines'>
              <i className='asterisk' ><CgAsterisk /></i>
              <label className='form-text'> Apellido paterno:</label><br />
              <input type="text" id='lastNamePat' value={dataForm.lastNamePat} onChange={handleChangeLnP} />
            </div>
            <div className='lines'>
              <i className='asterisk' ><CgAsterisk /></i>
              <label className='form-text'> Apellido materno:</label><br />
              <input type="text" id='lastNameMat' value={dataForm.lastNameMat} onChange={handleChangeLnM} />
            </div>

            <div className='lines'>
              <i className='asterisk' ><CgAsterisk /></i>
              <label className='form-text'> Edad:</label><br />
              <input type="text" id='age' value={dataForm.age} onChange={handleChangeAge} />
            </div>
            <div className='lines'>
              <i className='asterisk' ><CgAsterisk /></i>
              <label className='form-text'> Sexo:</label><br />
              <div className='ctn-radio'>
                <input type="radio" name="gender" className="radio" value={dataForm.gender} onChange={handleChangeGender} />Femenino
                <input type="radio" name="gender" className="radio" value={dataForm.gender} onChange={handleChangeGender} />Masculino
              </div>
            </div>
            <div className='lines'>
              <i className='asterisk' ><CgAsterisk /></i>
              <label className='form-text'> Correo electrónico:</label><br />
              <input type="text" id='email' value={dataForm.email} onChange={handleChangeEmail} />
            </div>

            <div className='lines'>
              <i className='asterisk' ><CgAsterisk /></i>
              <label className='form-text'> Teléfono:</label><br />
              <input type="text" id='phone' value={dataForm.phone} onChange={handleChangePhone} />
            </div>
          </form>

          <div className='ctn-buttons'>
            <button className='btn-cancel' onClick={() => {
              navigate('/')
            }}>Cancelar</button>

            <button className='btn-save' onClick={() => {
              updateOnePerson(params.idEdit, dataForm).then(() => {
                navigate('/')
              })
            }}>Guardar</button>
          </div>

        </section>
      </>
      }
      <Result />
    </>
  )
}
export default EditForm;