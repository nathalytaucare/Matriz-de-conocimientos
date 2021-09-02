import React, { Fragment } from "react";
import profileCard from "../images/profileCard.png";
import skills from "../images/skills.png";

const EmployeeView = () => {
  return (
    <Fragment>
      <main>
        <section className="container">
          <div className="row text-center">
            <div className="p-3">
              {<img src={profileCard} alt="profile Card" className="img-fluid" />}
            </div>
            <div className="p-2">
              <img src={skills} alt="skills" className="img-fluid" />
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default EmployeeView;
