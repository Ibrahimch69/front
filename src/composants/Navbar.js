import React from 'react'
import { Link } from 'react-router-dom';
 

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <ul class="navbar-nav">
        

       <Link to={"/signup"}> <p className='nav-link active'>Register</p></Link>
          <li class="nav-item">
          <Link to={"/"}> <p className='nav-link active'>login</p></Link>
          </li>
        
        </ul>
      </div>

  </nav>
  )
}

export default Navbar