import React, { Fragment} from "react";
import profileCard from "../images/profileCard.png";
import skills from "../images/skills.png";
import light from "../images/light.png";
import Navbar from "./Navbar";

const LeaderProfile = () => {
    return (
        <Fragment>
           <Navbar />
            <main>
                <section className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="p-3">
                                {<img
                                    src={profileCard}
                                    alt="profile Card"
                                    className="img-fluid"
                                />}
                            </div>
                            <div className="p-2">
                                <img src={skills} alt="skills" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-6 text-center align-self-center">
                        <section className="border p-3">
                                <div>
                                    <img src={light} alt="logo light" className="img-fluid" />
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="btn group mt-2 ml-2 btn-space"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    >
                                        Añadir Skills
                                    </button>

                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Añade tus skills</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="mb-3">

                                                            <select id="selectNumber" className="form-select form-select-sm">
                                                                <option>Tecnologias</option>
                                                            </select>

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


                                                            <label htmlFor="exampleInputEmail1" className="form-label">Otros conocimientos</label>
                                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn group">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                            </div>
                            
                            </div>
                            </section>
</main>
</Fragment>
);
};

export default LeaderProfile
