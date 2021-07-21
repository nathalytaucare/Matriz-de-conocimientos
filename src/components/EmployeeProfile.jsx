import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
// import logo from "../images/logo.png";
import profileCard from "../images/profileCard.png";
import skills from "../images/skills.png";
import light from "../images/light.png";
import messages from "../images/messages.gif";
import NavbarEmployee from "./NavbarEmployee";

const EmployeeProfile = () => {
    const history = useHistory();
    return (
        <Fragment>
            <NavbarEmployee />

            <main>
                <section className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="p-3">
                                <img
                                    src={profileCard}
                                    alt="profile Card"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="p-2">
                                <img src={skills} alt="skills" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <section >
                            <img src={messages} alt="messages" className="img-fluid"  width="300" height="300"/> 
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

export default EmployeeProfile;
