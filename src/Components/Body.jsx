import '../Styles/Body.css'
import { CgAsterisk } from 'react-icons/cg';
import { saveForm } from '../Utils/firestore';

const Body = () => {
  return (
    <>
      <section className="header">
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
            <p className='form-text'> Nombre (s):</p><br />
            <input type="text" id='firstName' />
          </div>
          <div className='lines'>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='form-text'> Apellido paterno:</p><br />
            <input type="text" id='lastNamePat' />
          </div>
          <div className='lines'>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='form-text'> Apellido materno:</p><br />
            <input type="text" id='lastNameMat' />
          </div>

          <div className='lines'>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='form-text'> Edad:</p><br />
            <input type="text" id='age' />
          </div>
          <div className='lines'>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='form-text'> Sexo:</p><br />
            <div className='ctn-radio'>
              <input type="radio" name="gender" className="radio" id='fem' value='Femenino' />Femenino
              <input type="radio" name="gender" className="radio" id='mal' value='Masculino' />Masculino
            </div>
          </div>
          <div className='lines'>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='form-text'> Correo electrónico:</p><br />
            <input type="text" id='email' />
          </div>

          <div className='lines'>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='form-text'> Teléfono:</p><br />
            <input type="text" id='phone' />
          </div>
        </form>

        <div className='ctn-buttons'>
          <button className='btn-cancel'>Cancelar</button>
          <button className='btn-save' onClick={() => {

            const formList = document.getElementById('form');

            const firstName = document.getElementById('firstName').value;
            const lastNamePat = document.getElementById('lastNamePat').value;
            const lastNameMat = document.getElementById('lastNameMat').value;
            const age = document.getElementById('age').value;

            const gender = document.getElementsByName('gender');
            let genderSelect = '';
            for (let i = 0; i < gender.length; i++) {
              if (gender[i].checked) {
                genderSelect = gender[i].value;
              }
            }

            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            saveForm(firstName, lastNamePat, lastNameMat, age, genderSelect, email, phone);


            formList.reset()


          }}>Guardar</button>
        </div>

      </section>
    </>
  )
}
export default Body;
