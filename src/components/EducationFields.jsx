import { useState } from "react";
import PropTypes from "prop-types";

export function EducationFields({ education }) {
  const [inputFields, setInputFields] = useState([
    { school: "", study: "", degree: "", start: "", end: "" },
  ]);

  const addFields = () => {
    let newField = { school: "", study: "", degree: "", start: "", end: "" };
    console.log("adding more fields");
    setInputFields([...inputFields, newField]);
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  if (education.length > 0) {
    console.log("updating fields to current education");
    setInputFields(structuredClone(education));
  }

  console.log("input fields:", inputFields);

  return (
    <div>
      <p>{inputFields.length}</p>
      {inputFields.map((elem, index) => {
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
      <button onClick={addFields}>Add Another School</button>
    </div>
  );
}

EducationFields.propTypes = {
  education: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired
};
