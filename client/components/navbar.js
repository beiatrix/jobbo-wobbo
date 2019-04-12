import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

export const Navbar = () => (
  <div>
    <nav>
      <h1>jobbo wobbo</h1>
      <div id="links">
        {/* The navbar will show these links before you log in */}
        <Link to="#">link 1</Link>
        <Link to="#">link 2</Link>
      </div>
    </nav>
  </div>
)
