import PropTypes from "prop-types";
import "../styles/Education.css";

export function EducationSection({ educationInfo }) {
  return (
    <div className="education-wrapper">
      {educationInfo.map((elem, index) => {
        return (
          <div className="card" key={index}>
            <div className="header">
              <h3>{elem.school}</h3>
              <p>
                {elem.start} - {elem.end === "" ? "present" : elem.end}
              </p>
            </div>
            <div className="details">
              <p>{elem.study}</p>
              <p className="degree">{elem.degree}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

EducationSection.propTypes = {
  educationInfo: PropTypes.array.isRequired,
};
