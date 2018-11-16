import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo900_obscuro_transparente.png'
import { FaSearch } from 'react-icons/fa';

const Navbar = props => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="" className="navbar-item">
        <figure className="image">
          <img src={logo} alt="Zauru" style={{ width: '76px' }} />
        </figure>
        <div style={{ color: `white`}}> &nbsp; // Manual de Usuario</div>
      </Link>
    </div>
    
    <div className="navbar-end">
      {props.search ? 
      <div className="navbar-item field">
        <div className="control has-icons-left" style={{marginBottom: `-0.8rem`}}>
          <input className="input is-rounded" type="text" placeholder="Buscar"/>
          <span className="icon is-left"><FaSearch /></span>
        </div>
      </div> : <span></span>}
      <div className="navbar-item">
        <div className="buttons">
          <a className="navbar-item button" href="http://www.zauru.com/home" target="_blank" rel="noopener noreferrer">
            Conoce m&aacute;s de Zauru
          </a>
          <a className="navbar-item button" href="https://app.zauru.com" target="_blank" rel="noopener noreferrer">
            Ingresar
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar