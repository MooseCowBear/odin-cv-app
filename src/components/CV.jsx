import PropTypes from "prop-types";

export function Cv({ education }) {
  return (
    <>
      <div className="education-wrapper">
      {education.map((elem, index) => {
        return (
          <div key={index}>
            <p>{elem.school}</p>
            <p>{elem.study}</p>
            <p>{elem.degree}</p>
            <p>{elem.start}</p>
            <p>{elem.end}</p>
          </div>
        );
      })}
      </div>
    </>
  );
}

Cv.propTypes = {
  education: PropTypes.array.isRequired,
};
