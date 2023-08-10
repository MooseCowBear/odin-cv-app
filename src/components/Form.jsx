import PropTypes from "prop-types";
import { useState } from "react";
import { EducationFields } from "./EducationFields";
import { PersonalFields } from "./PersonalFields";
import { ExperienceFields } from "./ExperienceFields";
import { SkillsFields } from "./SkillsFields";
import "../styles/Form.css";

export function Form({
  general,
  updateGeneral,
  education,
  updateEducation,
  experience,
  updateExperience,
  updateStatus,
  skills,
  updateSkillsInfo
}) {
  const [educationInputFields, setEducationInputFields] = useState(
    education.length > 0
      ? education
      : [{ school: "", study: "", degree: "", start: "", end: "" }]
  );

  const [personalInfo, setPersonalInfo] = useState(general);

  const [experienceInputFields, setExperienceInputFields] = useState(
    experience.length > 0
      ? experience
      : [
          {
            company: "",
            position: "",
            responsibilities: "",
            start: "",
            end: "",
          },
        ]
  );

  const [skillsInfo, setSkillsInfo] = useState(skills);

  const isEmpty = (object) => {
    for (const [ , value] of Object.entries(object)) {
      if (value !== "") {
        return false;
      }
    }
    return true;
  }

  const updateEducationFields = (newValue) => {
    setEducationInputFields(newValue);
  }

  const updatePersonal = (newValue) => {
    setPersonalInfo(newValue);
  }

  const updateExperienceFields = (newValue) => {
    setExperienceInputFields(newValue);
  }

  const updateSkills = (newValue) => {
    setSkillsInfo(newValue);
  }

  const submitForm = (e) => {
    // this is where validations would be...
    e.preventDefault();
    updateGeneral(personalInfo);
    updateEducation(educationInputFields.filter((elem) => !isEmpty(elem)));
    updateExperience(experienceInputFields.filter((elem) => !isEmpty(elem)));
    updateSkillsInfo(skillsInfo);
    updateStatus();
  };

  const cancelForm = () => {
    updateStatus();
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <h2>Personal Info:</h2>
      <PersonalFields
        personalInput={personalInfo}
        updateInput={updatePersonal}
      />

      <h2>Education:</h2>
      <EducationFields
        educationInputs={educationInputFields}
        updateFields={updateEducationFields}
      />

      <h2>Experience:</h2>
      <ExperienceFields
        experienceInputs={experienceInputFields}
        updateFields={updateExperienceFields}
      />

      <h2>Skills:</h2>
      <SkillsFields skillsInput={skillsInfo} updateInput={updateSkills} />

      <input type="submit" />
      <button className="button-cancel" onClick={cancelForm}>
        Cancel
      </button>
    </form>
  );
}

Form.propTypes = {
  general: PropTypes.object.isRequired,
  updateGeneral: PropTypes.func.isRequired,
  education: PropTypes.array.isRequired,
  updateEducation: PropTypes.func.isRequired,
  experience: PropTypes.array.isRequired,
  updateExperience: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
  skills: PropTypes.string.isRequired,
  updateSkillsInfo: PropTypes.func.isRequired
};
