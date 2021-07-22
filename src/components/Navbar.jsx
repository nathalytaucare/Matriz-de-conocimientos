import React from 'react'
import logo from "../images/FrameEverisColor.png";
import '../components/navbar.css'
import { BsFillBellFill } from "react-icons/bs";


const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* IMAGEN LOGO */}
    <a className="navbar-brand p-2 flex-fill" href="/">
     <img src={logo} width="2" height="33" alt="" className="navbar_img" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item p-2 flex-fill">
          <a className="nav-link active" aria-current="page" href="/FilterAndSearch">Busqueda</a>
        </li>
        <li className="nav-item p-2 flex-fill">
          <a className="nav-link" href="/DashboardLeader">Dashboard</a>
        </li>
        <li className="nav-item p-2 flex-fill">
          <a className="nav-link" href="/leaderProfile">Perfil</a>
        </li>
        {/* MENU NOTIFICACIONES */}
        <li className="nav-item dropdown p-2 flex-fill">
          <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Notificaciones <BsFillBellFill />
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item " href="/">Nombre 1 solicita validar conocimientos</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Nombre 2 solicita validar conocimientos</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Alguien mas solicita validar conocimientos</a></li>
          </ul>
          
        </li>
        <li className="nav-item p-2 flex-fill">
          <a className="nav-link" href="/" tabIndex="-1">Log Out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
