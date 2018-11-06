import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo900_obscuro_transparente.png'

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="blog" className="navbar-item">
        <figure className="image">
          <img src={logo} alt="Zauru" style={{ width: '76px' }} />
        </figure>
        <div  style={{ color: `white`}}> &nbsp; // Docs</div>
      </Link>
    </div>
  </nav>
)

export default Navbar