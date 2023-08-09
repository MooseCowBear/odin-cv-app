import PropTypes from "prop-types";
import { useState } from "react";
import { EducationFields } from "./EducationFields";
import { PersonalFields } from "./PersonalFields";
import { ExperienceFields } from "./ExperienceFields";

export function Form({
  general,
  updateGeneral,
  education,
  updateEducation,
  experience,
  updateExperience,
  updateStatus,
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

  const submitForm = (e) => {
    e.preventDefault();
    updateGeneral(personalInfo);
    // not quite right because want to remove if object in arr only has empty string values
    // want to do validations? and cleaning here before updating
    updateEducation(educationInputFields.filter((elem) => !isEmpty(elem)));
    updateExperience(experienceInputFields.filter((elem) => !isEmpty(elem)));
    updateStatus();
  };

  const cancelForm = () => {
    updateStatus();
  };

  return (
    <div>
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

      <h2>Experience</h2>
      <ExperienceFields
        experienceInputs={experienceInputFields}
        updateFields={updateExperienceFields}
      />

      <input type="submit" onClick={submitForm} />
      <button onClick={cancelForm}>Cancel</button>
    </div>
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
};
