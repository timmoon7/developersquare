import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({ experience }) => (
  <div className="profile-exp bg-white p-2">
    <h2 className="text-primary">Experience</h2>
    {experience.length > 0 ? (
      experience.map(exp => (
        <div key={exp._id}>
          <h3 className="text-dark">{exp.company}</h3>
          <p>
            <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
            {!exp.to ? "Now" : <Moment format="DD/MM/YYYY">{exp.to}</Moment>}
          </p>
          <p>
            <strong>Position: </strong>
            {exp.title}
          </p>
          <p>
            <strong>Description: </strong>
            {exp.description}
          </p>
        </div>
      ))
    ) : (
      <h4>No experience credentials</h4>
    )}
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired
};

export default ProfileExperience;
