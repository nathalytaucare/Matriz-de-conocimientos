import React, { Fragment, useState, useEffect } from 'react';
import stores from '../firebaseconfig'
import '../components/FilterAndSearch.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar";
import data from "../tecnologias.json"

const FilterAndSearch = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getEmployeesInfo = stores.collection('employees').onSnapshot(snap => {
            const arrayEmployees = snap.docs.map(doc => {
                return {
                    id: doc.id, ...doc.data()
                }
            })
            setTasks(arrayEmployees)

            const select = document.getElementById("selectNumber");
            const options = data.tecnologias;

            for (let i = []; i < options.length; i++) {
                const opt = options[i];
                const el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el);
            };

        })
        return () => getEmployeesInfo();
    }, [])

    const [name, setName] = useState('')

    useEffect(() => {
        const select = document.getElementById("selectNumber");
        const options = data.tecnologias;

        for (let i = []; i < options.length; i++) {
            const opt = options[i];
            const el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
        };

    }, [])

    const filterTech = (name) => {
        /*  tasks.map(item => {
                    return (
                        console.log(item)
                        );
                }) 
               console.log("name " + name) */
    }


    return (
        <Fragment>
            <Navbar />
            <section className="filter_section">
                <p className="title">FILTRAR RESULTADOS</p>
                <div className="form-group row">

                    <div className="form-group col-md-4">
                        <select id="selectNumber" className="form-select form-select-sm" value={name} onChange={(e) => { setName(e.target.value) }}>
                            <option>Tecnologias</option>
                        </select>
                    </div>

                    <div className="form-group col-md-4">
                        <input type="search" className="form-control" id="staticEmail2" placeholder="Otros conocimientos 🔍" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="search" className="form-control" id="staticEmail1" placeholder="ID empleado 🔍" />
                    </div>
                </div>


                <div>
                    <div className="form-check form-check-inline">
                        <p>Nivel de experiencia</p>
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Basico</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Medio</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Avanzado</label>
                    </div>
                </div>

                <button type="submit" className="btn group mb-2" onClick={() => filterTech(name)}>Filtrar</button>
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
                            {tasks.map(item => {
                                return (
                                    <tr key={item.ID}>
                                        <td>{item.Nombre}</td>
                                        <td>{item.ID}</td>
                                        <td>{item.Email}</td>
                                        <td><Link to="/EmployeeProfile" className="btn group">Ver mas</Link></td>
                                    </tr>
                                );
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </Fragment>
    )
}

export default FilterAndSearch;