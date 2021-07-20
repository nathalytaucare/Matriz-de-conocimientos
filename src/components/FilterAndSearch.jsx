import React, { Fragment, useState, useEffect } from 'react';
import stores from '../firebaseconfig'
import '../components/FilterAndSearch.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


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
        })
        return () => getEmployeesInfo();
    }, [])

    var select = document.getElementById("selectNumber");
    var options = stores.collection('employees').get()
        .then((snapshot) => {
            snapshot.docs.forEach((docs) => {
                console.log(Object.entries(docs.data()));
            });

            for (var i = []; i < options.length; i++) {
                var opt = options[i];
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el);
            }
        });


    return (
        <Fragment>
            <section className="filter_section">
                <p>FILTRAR RESULTADOS</p>
                <select id="selectNumber">
                    <option>Choose a number</option>
                </select>

                <select class="form-select form-select-sm" aria-label="Default select example">
  <option selected>Tecnologías</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
                </select>

                <input type="search" name="otrosConocimientos" placeholder="Otros conocimientos 🔍" />
                <input type="search" name="IDempleado" placeholder="ID empleado 🔍" />

                <div>
                    <form action="/action_page.php">
                        <p>Nivel de experiencia</p>
                        <input type="checkbox" id="basic" name="basic" value="Basico" />
                        <label htmlFor="basic"> Básico</label><br />

                        <input type="checkbox" id="medium" name="medium" value="Medio" />
                        <label htmlFor="medium"> Medio</label><br />

                        <input type="checkbox" id="advanced" name="advanced" value="Avanzado" />
                        <label htmlFor="advanced"> Avanzado</label><br />

                    </form>
                </div>
            </section>

            <p>{tasks.length} RESULTADOS ENCONTRADOS</p>
            <section className="orders_container">
                <div className="employeesTable">
                    <table className="table table-hover table-sm table-responsive ">
                        {/* table table-hover */}
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
