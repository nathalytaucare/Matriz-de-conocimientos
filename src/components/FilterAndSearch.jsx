import React, { Fragment, useState, useEffect } from 'react';
import stores from '../firebaseconfig'
import '../components/FilterAndSearch.css';
import Navbar from "./Navbar";
import data from "../technologyDatabase.json";
import MoreInfoEmployee from './MoreInfoEmployee';

const FilterAndSearch = () => {
  const [name, setName] = useState("");
  const [conocimiento, setConocimiento] = useState("");
  const [idColaborador, setIdColaborador] = useState("");
  const [nivel, setNivel] = useState("");

  useEffect(() => {
    const select = document.getElementById("selectNumber");
    const options = data.tecnologias;

    for (let i = []; i < options.length; i++) {
      const opt = options[i];
      const el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }, []);

  const [tasks, setTasks] = useState([]);
  const filterTech = (name) => {
    stores.collection("matrizConocimientos").onSnapshot((snap) => {
      const arrayEmployees = snap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      if (name !== "") {
        let result = "";
        switch (nivel) {
          case "basico":
            result = arrayEmployees.filter(o => o.tecnologias.some(({ nombre, nivel }) => name === nombre && "Basico" === nivel));
            setTasks(result)
            break;
          case "":
            result = arrayEmployees.filter((o) => o.tecnologias.some(({ nombre }) => name === nombre));             
            setTasks(result);
            break;
          case "medio":
            result = arrayEmployees.filter(o => o.tecnologias.some(({ nombre, nivel }) => name === nombre && "Medio" === nivel));
            setTasks(result)
            break;
          case "avanzado":
            result = arrayEmployees.filter(o => o.tecnologias.some(({ nombre, nivel }) => name === nombre && "Avanzado" === nivel));
            setTasks(result)
            break;
          default:
            alert("Seleccione un nivel");
        }
      } else if (conocimiento !== "") {
        let result = arrayEmployees.filter((o) => o.tecnologias.some(({ conocimientos }) => conocimiento === conocimientos));
        setTasks(result);
      } else if (idColaborador !== "") {
        let result = arrayEmployees.filter((o) => o.Numero === parseInt(idColaborador));
        setTasks(result);
      }
    });
  };

  return (
    <Fragment>
      <Navbar />
      <section className="filter_section">
        <p className="title">FILTRAR RESULTADOS</p>
        <div className="form-group row">
          <div className="form-group col-md-4">
            <select
              id="selectNumber"
              className="form-select form-select-sm"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}>
              <option>Tecnologias</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <input
              type="search"
              className="form-control"
              id="staticEmail2"
              placeholder="Otros conocimientos 🔍"
              value={conocimiento}
              onChange={(e) => {
                setConocimiento(e.target.value);
              }}/>
          </div>
          <div className="form-group col-md-4">
            <input
              type="search"
              className="form-control"
              id="staticEmail1"
              placeholder="ID empleado 🔍"
              value={idColaborador}
              onChange={(e) => {
                setIdColaborador(e.target.value);
              }} />
          </div>
        </div>
        <div>
          <div className="form-check form-check-inline">
            <p>Nivel de experiencia</p>
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="basico"
              onChange={(e) => {
                setNivel(e.target.value);
              }}/>
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Basico
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="medio"
              onChange={(e) => {
                setNivel(e.target.value);
              }} />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Medio
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="avanzado"
              onChange={(e) => {
                setNivel(e.target.value);
              }} />
            <label className="form-check-label" htmlFor="inlineCheckbox3">
              Avanzado
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn group mb-2"
          onClick={() => filterTech(name)}>
          Filtrar
        </button>
      </section>
      <p className="title">{tasks.length} RESULTADOS ENCONTRADOS</p>
      <section className="orders_container">
        <div className="employeesTable">
          <table className="table table-hover table-sm table-responsive ">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((item) => {
                return (
                  <tr key={item.ID}>
                    <td>{item.Nombre}</td>
                    <td>{item.Numero}</td>
                    <td>{item.Email}</td>
                    <td><button type="button" className="btn group mt-2 " data-bs-toggle="modal" data-bs-target="#exampleModal" >
                      VER MAS
                      <MoreInfoEmployee />
                    </button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </Fragment>
  );
};

export default FilterAndSearch;
