import React, { Fragment } from "react";
// import logo from "../images/logo.png";
import profileCard from "../images/profileCard.png";
import skills from "../images/skills.png";
import NavbarEmployee from "./NavbarEmployee";

const EmployeeView = () => {
    return (
        <Fragment>
            <NavbarEmployee />

            <main>
                <section className="container">
                    <div className="row text-center">

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
                </section>
                
            </main>
        </Fragment>
    )
}

export default EmployeeView