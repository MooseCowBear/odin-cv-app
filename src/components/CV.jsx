import PropTypes from "prop-types";
import { PersonalSection } from "./Personal";

export function Cv({ general, education, experience }) {
  return (
    <>
      <PersonalSection 
        personalInfo={general}
      />

      <div className="education-wrapper">
        {education.map((elem, index) => {
          return (
            <div className="card" key={index}>
              <div className="header">
                <h3>{elem.school}</h3>
                <p>{elem.start} - {elem.end === "" ? "present" : elem.end}</p>
              </div>
              <div className="details">
                <p>{elem.study}</p>
                <p>{elem.degree}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="experience-wrapper">
        {experience.map((elem, index) => {
          return (
            <div className="card" key={index}>
              <div className="header">
                <div>
                  <h3>{elem.company}</h3>
                  <p>{elem.position}</p>
                </div>
                <p>{elem.start} - {elem.end === "" ? "present" : elem.end}</p>
              </div>
              <ul>
                {elem.responsibilities.split(".").filter(elem => elem !== "").map((resp, index) => {
                  return (
                    <li key={`resp_${index}`}>{resp}</li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

Cv.propTypes = {
  general: PropTypes.object.isRequired,
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
};
