import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>Navbar
      <ul>
          <li>
            <Link to="/login">Login</Link>
            <Link to="/signup">sign up</Link>
          </li>
          </ul>
    </div>
  )
}

export default Navbar