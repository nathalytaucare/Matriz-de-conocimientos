import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
// import logo from "../images/logo.png";
import profileLeader from "../images/profileLeader.png";
import skillsLeader from "../images/skillsLeader.png";
import light from "../images/light.png";
import EmployeeCarousel from "./EmployeeCarousel";
import Navbar from "./Navbar";

const LeaderProfile = () => {
    const history = useHistory();
    return (
        <Fragment>
            <Navbar />

            <main>
                <section className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="p-3">
                                {<img
                                    src={profileLeader}
                                    alt="profile Card"
                                    className="img-fluid"
                                />}
                            </div>
                            <div className="p-2">
                                <img src={skillsLeader} alt="skills" className="img-fluid" />
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
        </Fragment>
    );
};

export default LeaderProfile;

