import PropTypes from "prop-types";
import { PersonalInfoFields } from "./PersonalInfoFields";
// import { EducationFields } from "./EducationFields";
import { useState } from "react";

export function Form({ general, education, updateEducation, updateStatus }) {
  // going to need callbacks passed to children so that they can return their info to form
  // form will do the updating to app states with its own callbacks...

  const [educationInputFields, setEducationInputFields] = useState([
    { school: "", study: "", degree: "", start: "", end: "" },
  ]);


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

  // is this right? 
  if (education.length > 0) {
    console.log("updating fields to current education");
    setEducationInputFields(education);
  }

  console.log("education input fields:", educationInputFields);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("form was submitted");
    // not quite right because want to remove if object only has empty string values
    updateEducation(educationInputFields);
    updateStatus();
  }

  return (
    <div>
      <h2>Personal Info:</h2>
      <PersonalInfoFields general={general} />
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
    </div>
  );
}

Form.propTypes = {
  general: PropTypes.object.isRequired,
  education: PropTypes.array.isRequired,
  updateEducation: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired
};
