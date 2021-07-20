import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import "../components/components.css";

const Login = () => {
  const history = useHistory();
  return (
    <main className="login">
      <div className="container col-md-4">
        
        <div class="row justify-content-center align-items-center minh-100">
          <form className="border p-3 form">
              <div className="d-flex justify-content-end ">
              <img src={logo} alt="logo"/>
              </div>
          <h4>Inicie sesión con su cuenta</h4>
            <div className="mb-4">
              <label className="form-label">Correo</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="alguien@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="**********"
              />
            </div>

            <div class="col text-center ">
              <button
                type="button"
                className="btn btn-primary btn-space"
                onClick={() => history.push("/dashboardLeader")}
              >
                Ingreso Lider
              </button>
              <button
                type="button"
                className="btn btn-primary btn-space"
                onClick={() => history.push("/EmployeeProfile")}
              >
                Ingreso Colaborador
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
