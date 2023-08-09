import PropTypes from "prop-types";
import '../styles/Personal.css'

export function PersonalSection({ personalInfo }) {
  return (
    <div className="personal-info-wrapper">
      <h3>{personalInfo.name}</h3>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phone}</p>
    </div>
  );
}

PersonalSection.propTypes = {
  personalInfo: PropTypes.object.isRequired
};
