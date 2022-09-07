import '../Styles/Header.css';
import menu from '../assets/icons/ico-menu.svg';
import logo from '../assets/icons/logo.svg';
import user from '../assets/icons/ico-user.svg';
import arrow from '../assets/icons/ico-pleca.svg'


const Header = () => {
  return (
    <section className='container-header'>
      <img src={menu} alt="menu" className='menu' />
      <img src={logo} alt="logo" className='logo' />
      <div className='div-rol'>
        <p className='name'>Arantxa Sara <br />Castañeda Dorantes</p>
        <p className='rol'>Administrador</p>
      </div>
      <div className='div-user'>
        <img src={user} alt="user" className='user' />
        <img src={arrow} alt="arrrow" className='arrow' />
      </div>
      <p className='date'>16/Mar/2022 <br />12:00 hrs.</p>
    </section>
  )
}

export default Header;