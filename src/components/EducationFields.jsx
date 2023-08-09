import PropTypes from "prop-types";

export function EducationFields({ educationInputs, updateFields }) {
  const handleFormChange = (index, event) => {
    let data = [...educationInputs];
    data[index][event.target.name] = event.target.value;
    updateFields(data);
  };

  const addEducationFields = () => {
    let newField = { school: "", study: "", degree: "", start: "", end: "" };
    updateFields([...educationInputs, newField]);
  };

  return (
    <div>
      <p>{educationInputs.length}</p>
      {educationInputs.map((elem, index) => {
        return (
          <div key={index}>
            <label>School:</label>
            <input
              name="school"
              value={elem.school}
              onChange={(e) => handleFormChange(index, e)}
            />
            <label>Course of Study:</label>
            <input
              name={"study"}
              value={elem.study}
              onChange={(e) => handleFormChange(index, e)}
            />
            <label>Degree:</label>
            <input
              name={"degree"}
              value={elem.degree}
              onChange={(e) => handleFormChange(index, e)}
            />
            <label>Start Year:</label>
            <input
              name={"start"}
              placeholder="YYYY"
              value={elem.start}
              onChange={(e) => handleFormChange(index, e)}
            />
            <label>End Year:</label>
            <input
              name={"end"}
              placeholder="YYYY"
              value={elem.end}
              onChange={(e) => handleFormChange(index, e)}
            />
          </div>
        );
      })}
      <button onClick={addEducationFields}>Add Another School</button>
    </div>
  );
}

EducationFields.propTypes = {
  educationInputs: PropTypes.array.isRequired,
  updateFields: PropTypes.func.isRequired
};
