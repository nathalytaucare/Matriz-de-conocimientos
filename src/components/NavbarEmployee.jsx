import React from 'react'
import logo from "../images/FrameEverisColor.png";
import '../components/navbar.css'

const NavbarEmployee = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* IMAGEN LOGO */}
    <a className="navbar-brand p-2 flex-fill" href="/">
     <img src={logo} className="navbar_img" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item p-6 flex-fill">
          <a className="nav-link d-flex flex-row-reverse" href="/" tabIndex="-1">Log Out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavbarEmployee
