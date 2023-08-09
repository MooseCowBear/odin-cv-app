import PropTypes from "prop-types";
import { PersonalSection } from "./Personal";
import { EducationSection } from "./Education";
import { ExperienceSection } from "./Experience";
import "../styles/Cv.css"

export function Cv({ general, education, experience }) {
  return (
    <>
      <PersonalSection 
        personalInfo={general}
      />

      <h2>Education</h2>
      <EducationSection
        educationInfo={education}
      />

      <h2>Experience</h2>
      <ExperienceSection
        experienceInfo={experience}
      />
    </>
  );
}

Cv.propTypes = {
  general: PropTypes.object.isRequired,
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
};
