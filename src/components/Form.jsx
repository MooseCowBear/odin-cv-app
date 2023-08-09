import PropTypes from "prop-types";
import { useState } from "react";
import { EducationFields } from "./EducationFields";
import { PersonalFields } from "./PersonalFields";

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

  const addExperienceFields = () => {
    let newField = {
      company: "",
      position: "",
      responsibilities: "",
      start: "",
      end: "",
    };
    setExperienceInputFields([...experienceInputFields, newField]);
  };

  const handleExperienceFormChange = (index, event) => {
    let data = [...experienceInputFields];
    data[index][event.target.name] = event.target.value;
    setExperienceInputFields(data);
  };

  const isEmpty = (object) => {
    for (const [ , value] of Object.entries(object)) {
      if (value !== "") {
        return false;
      }
    }
    return true;
  }

  // for component...
  const updateEducationFields = (newValue) => {
    setEducationInputFields(newValue);
  }

  const updatePersonal = (newValue) => {
    setPersonalInfo(newValue);
  }

  // end callbacks for components

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
      <div>
        <p>{experienceInputFields.length}</p>
        {experienceInputFields.map((elem, index) => {
          return (
            <div key={index}>
              <input
                name="company"
                placeholder="Company"
                value={elem.company}
                onChange={(e) => handleExperienceFormChange(index, e)}
              />
              <input
                name="position"
                placeholder="Position"
                value={elem.position}
                onChange={(e) => handleExperienceFormChange(index, e)}
              />
              <textarea
                name={"responsibilities"}
                placeholder="Responsibilities"
                value={elem.responsibilities}
                onChange={(e) => handleExperienceFormChange(index, e)}
              />
              <input
                name={"start"}
                placeholder="Start YYYY"
                value={elem.start}
                onChange={(e) => handleExperienceFormChange(index, e)}
              />
              <input
                name={"end"}
                placeholder="End YYYY"
                value={elem.end}
                onChange={(e) => handleExperienceFormChange(index, e)}
              />
            </div>
          );
        })}
        <button onClick={addExperienceFields}>Add Another Company</button>
      </div>

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
