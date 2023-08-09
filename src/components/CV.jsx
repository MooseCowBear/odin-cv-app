import PropTypes from "prop-types";
import { PersonalSection } from "./Personal";
import { EducationSection } from "./Education";
import { ExperienceSection } from "./Experience";

export function Cv({ general, education, experience }) {
  return (
    <>
      <PersonalSection 
        personalInfo={general}
      />

      <EducationSection
        educationInfo={education}
      />

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
