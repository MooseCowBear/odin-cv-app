import PropTypes from "prop-types";
import "../styles/Experience.css";

export function ExperienceSection({ experienceInfo }) {
  return (
    <div className="experience-wrapper">
      <h2>Experience</h2>
      {experienceInfo.map((elem, index) => {
        return (
          <div className="card" key={index}>
            <div className="header">
              <div>
                <h3>{elem.company}</h3>
                <p>{elem.position}</p>
              </div>
              <p>
                {elem.start} - {elem.end === "" ? "present" : elem.end}
              </p>
            </div>
            <ul>
              {elem.responsibilities
                .split(".")
                .filter((item) => item.trim() !== "")
                .map((resp, index) => {
                  return <li key={`resp_${index}`}>{resp}</li>;
                })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

ExperienceSection.propTypes = {
  experienceInfo: PropTypes.array.isRequired,
};