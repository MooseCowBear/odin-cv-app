import PropTypes from "prop-types";
// import { PersonalInfoFields } from "./PersonalInfoFields";
// import { EducationFields } from "./EducationFields";
import { useState } from "react";

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

  const addEducationFields = () => {
    let newField = { school: "", study: "", degree: "", start: "", end: "" };
    setEducationInputFields([...educationInputFields, newField]);
  };

  const handleFormChange = (index, event) => {
    let data = [...educationInputFields];
    data[index][event.target.name] = event.target.value;
    setEducationInputFields(data);
  };

  const submitForm = (e) => {
    e.preventDefault();
    updateGeneral(personalInfo);
    // not quite right because want to remove if object in arr only has empty string values
    // want to do validations? and cleaning here before updating
    updateEducation(educationInputFields);
    updateExperience(experienceInputFields);
    updateStatus();
  };

  const cancelForm = () => {
    updateStatus();
  };

  const [personalInfo, setPersonalInfo] = useState(general);

  const updatePersonalInfo = (event) => {
    let data = { ...personalInfo };
    data[event.target.name] = event.target.value;
    setPersonalInfo(data);
  };

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

  return (
    <div>
      <h2>Personal Info:</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          value={personalInfo.name}
          onChange={(e) => updatePersonalInfo(e)}
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          value={personalInfo.email}
          onChange={(e) => updatePersonalInfo(e)}
        ></input>
        <label htmlFor="phone">Phone Number:</label>
        <input
          name="phone"
          type="tel"
          value={personalInfo.phone}
          onChange={(e) => updatePersonalInfo(e)}
        ></input>
      </div>

      <h2>Education:</h2>
      <div>
        <p>{educationInputFields.length}</p>
        {educationInputFields.map((elem, index) => {
          return (
            <div key={index}>
              <input
                name={"school"}
                placeholder="School"
                value={elem.school}
                onChange={(e) => handleFormChange(index, e)}
              />
              <input
                name={"study"}
                placeholder="Course of Study"
                value={elem.study}
                onChange={(e) => handleFormChange(index, e)}
              />
              <input
                name={"degree"}
                placeholder="Degree"
                value={elem.degree}
                onChange={(e) => handleFormChange(index, e)}
              />
              <input
                name={"start"}
                placeholder="Start YYYY"
                value={elem.start}
                onChange={(e) => handleFormChange(index, e)}
              />
              <input
                name={"end"}
                placeholder="End YYYY"
                value={elem.end}
                onChange={(e) => handleFormChange(index, e)}
              />
            </div>
          );
        })}
        <button onClick={addEducationFields}>Add Another School</button>
      </div>

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
