import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo900_obscuro_transparente.png'
import SearchBox from './SearchBox';

class Navbar extends React.Component {

  state = { showMenu: false }

	toggleMenu = () => {
		this.setState({
		  showMenu: !this.state.showMenu
		})
	}

  render () {

    const burgerActive = this.state.showMenu ? 'is-active' : ''
    const menuActive = this.state.showMenu ? 'is-active' : ''

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Zauru" style={{ width: '76px' }} />
            </figure>
            <div style={{ color: `white`}}> &nbsp; // Documentación</div>
          </Link>
          {this.props.search ? 
            <div className="navbar-item field">
                <SearchBox />
            </div> : ''}
          <span role="button" className={`navbar-burger ${burgerActive}`} aria-label="menu" aria-expanded="false" style={{color: '#FFF'}} onClick={this.toggleMenu} >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        
        <div className={`navbar-menu ${menuActive}`} id="nav-menu">
          <div className="navbar-start">
          </div>
          <div className="navbar-end">
            <a className="navbar-item button" href="http://www.zauru.com/home" target="_blank" rel="noopener noreferrer" style={{margin: '10px'}}>
              Conoce m&aacute;s de Zauru
            </a>
            <a className="navbar-item button" href="https://app.zauru.com" target="_blank" rel="noopener noreferrer" style={{margin: '10px'}}>
              Ingresar
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar