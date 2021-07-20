import React from 'react'
import logo from "../images/FrameEverisColor.png";
import '../components/navbar.css'

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand p-1 flex-fill" href="/">
     <img src={logo} width="2" height="33" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
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
          <a className="nav-link" href="/">Perfil</a>
        </li>
        <li className="nav-item dropdown p-2 flex-fill">
          <a className="nav-link dropdown-toggle" href="#/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Notificaciones
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item " href="/">Notificaciones</a></li>
            {/* <li><a className="dropdown-item" href="#/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#/">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item p-2 flex-fill">
          <a className="nav-link" href="/Login" tabIndex="-1">Log Out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
