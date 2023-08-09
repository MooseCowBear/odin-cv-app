import PropTypes from "prop-types";
// import { PersonalInfoFields } from "./PersonalInfoFields";
// import { EducationFields } from "./EducationFields";
import { useState } from "react";

export function Form({ general, updateGeneral, education, updateEducation, updateStatus }) {
  const [educationInputFields, setEducationInputFields] = useState(
    education.length > 0
      ? education
      : [{ school: "", study: "", degree: "", start: "", end: "" }]
  );

  const addEducationFields = () => {
    let newField = { school: "", study: "", degree: "", start: "", end: "" };
    console.log("adding more fields");
    setEducationInputFields([...educationInputFields, newField]);
  };

  const handleFormChange = (index, event) => {
    let data = [...educationInputFields];
    data[index][event.target.name] = event.target.value;
    setEducationInputFields(data);
  };

  console.log("education input fields:", educationInputFields);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("form was submitted");
    updateGeneral(personalInfo[0]);
    // not quite right because want to remove if object in arr only has empty string values
    updateEducation(educationInputFields);
    updateStatus();
  };

  const cancelForm = () => {
    console.log("form was canceled");
    updateStatus();
  };

  const [personalInfo, setPersonalInfo] = useState([general]);

  console.log(personalInfo);

  const updatePersonalInfo = (event) => {
    // why didn't this work without being wrapped in an array?
    let data = [...personalInfo];
    data[0][event.target.name] = event.target.value;
    setPersonalInfo(data);
  };

  return (
    <div>
      <h2>Personal Info:</h2>
      {personalInfo.map((elem, index) => {
        return (
          <div key={index}>
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              type="text"
              value={elem.name}
              onChange={(e) => updatePersonalInfo(e)}
            ></input>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              value={elem.email}
              onChange={(e) => updatePersonalInfo(e)}
            ></input>
            <label htmlFor="phone">Phone Number:</label>
            <input
              name="phone"
              type="tel"
              value={elem.phone}
              onChange={(e) => updatePersonalInfo(e)}
            ></input>
          </div>
        );
      })}

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
  updateStatus: PropTypes.func.isRequired,
};
