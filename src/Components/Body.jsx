import '../Styles/Body.css'
import { CgAsterisk } from 'react-icons/cg';


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

        <form className='form'>
          <div className='lines'>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='form-text'> Nombre (s):</p><br />
            <input type="text" />
          </div>
          <div className='lines'>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='form-text'> Apellido paterno:</p><br />
            <input type="text" />
          </div>
          <div className='lines'>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='form-text'> Apellido materno:</p><br />
            <input type="text" />
          </div>

          <div className='lines'>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='form-text'> Edad:</p><br />
            <input type="text" />
          </div>
          <div className='lines'>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='form-text'> Sexo:</p><br />
            <div className='ctn-radio'>
              <div>
                <input type="radio" name="Femenino" id="radio" />
                <p className='radio-text'>Femenino</p>
              </div>
              <div>
                <input type="radio" name="Femenino" id="radio" />
                <p className='radio-text'>Masculino</p>
              </div>
            </div>
          </div>
          <div className='lines'>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='form-text'> Correo electrónico:</p><br />
            <input type="text" />
          </div>

          <div className='lines'>
            <i className='asterisk' ><CgAsterisk /></i>
            <p className='form-text'> Teléfono:</p><br />
            <input type="text" />
          </div>
        </form>

        <div className='ctn-buttons'>
          <button className='btn-cancel'>Cancelar</button>
          <button className='btn-save'>Guardar</button>
        </div>

      </section>

      <section className='ctn-txt-result'>
        <p className='txt-result'>Nombre (s)</p>
        <p className='txt-result'>Apellido paterno</p>
        <p className='txt-result'>Apellido materno</p>
        <p className='txt-result'>Edad</p>
        <p className='txt-result'>Sexo</p>
        <p className='txt-result'>Correo electrónico</p>
        <p className='txt-result'>Teléfono</p>
        <p className='txt-result'>Acciones</p>
      </section>
      <section className='ctn-result'>
        <p className='line-result'>Nombre</p>
        <p className='line-result'>A paterno</p>
        <p className='line-result'>A materno</p>
        <p className='line-result'>Edad</p>
        <p className='line-result'>Sexo</p>
        <p className='line-result'>Correo electrónico</p>
        <p className='line-result'>Teléfono</p>
        <p className='line-result'>Acciones</p>
      </section>
    </>
  )
}
export default Body;
