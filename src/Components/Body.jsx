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
              <div>
                <input type="radio" name="Femenino" id="radio" />
                <p className='radio-text' id='fem'>Femenino</p>
              </div>
              <div>
                <input type="radio" name="Femenino" id="radio" />
                <p className='radio-text' id='mal'>Masculino</p>
              </div>
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
            //const sexFem = document.getElementById('fem').value;
            //const sexMal = document.getElementById('mal').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            saveForm(firstName, lastNamePat, lastNameMat, age, email, phone);


            formList.reset()


          }}>Guardar</button>
        </div>

      </section>
    </>
  )
}
export default Body;
