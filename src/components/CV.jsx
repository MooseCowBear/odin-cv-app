import PropTypes from "prop-types";
import { PersonalSection } from "./Personal";
import { EducationSection } from "./Education";
import { ExperienceSection } from "./Experience";
import "../styles/Cv.css"

export function Cv({ general, education, experience }) {
  return (
    <div className="cv-wrapper">
      <PersonalSection 
        personalInfo={general}
      />

      <EducationSection
        educationInfo={education}
      />

      <ExperienceSection
        experienceInfo={experience}
      />
    </div>
  );
}

Cv.propTypes = {
  general: PropTypes.object.isRequired,
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
};
