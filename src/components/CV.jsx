import PropTypes from "prop-types";

export function Cv({ general, education }) {
  return (
    <>
      <div className="general-wrapper">
        <p>{general.name}</p>
        <p>{general.email}</p>
        <p>{general.phone}</p>
      </div>
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
  general: PropTypes.object.isRequired,
  education: PropTypes.array.isRequired,
};
