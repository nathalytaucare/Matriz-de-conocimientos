import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import profileCard from "../images/profileCard.png";
import skills from "../images/skills.png";
import light from "../images/light.png";
import EmployeeCarousel from "./EmployeeCarousel";

const EmployeeProfile = () => {
    const history = useHistory();
    return (
        <div>

            <nav className="navbar navbar-light bg-light">
                <img src={logo} width="80" height="50" alt="logo" />
                {/* <a class="navbar-brand">Navbar</a> */}
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="button"
                    onClick={() => history.push("/")}
                >
                    Logout
                </button>
            </nav>
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
                        <div className="col-6 text-center">
                            <section >
                                <EmployeeCarousel />
                            </section>
                            <section className="border p-3">
                                <div>
                                    <img src={light} alt="logo light" className="img-fluid" />
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-space"
                                        onClick={() => history.push("/")}
                                    >
                                        Añadir Skills
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                
            </main>
        </div>
    );
};

export default EmployeeProfile;
