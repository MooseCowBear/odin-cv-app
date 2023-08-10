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
    <>
      <div className="form-section-wrapper">
      {educationInputs.map((elem, index) => {
        return (
          <div className="form-section" key={index}>
            <div className="input-wrapper">
              <label>School:</label>
              <input
                name="school"
                value={elem.school}
                onChange={(e) => handleFormChange(index, e)}
              />
            </div>
            <div className="input-wrapper">
              <label>Course of Study:</label>
              <input
                name={"study"}
                value={elem.study}
                onChange={(e) => handleFormChange(index, e)}
              />
            </div>
            <div className="input-wrapper">
              <label>Degree:</label>
              <input
                name={"degree"}
                value={elem.degree}
                onChange={(e) => handleFormChange(index, e)}
              />
            </div>
            <div className="input-wrapper">
              <label>Start Year:</label>
              <input
                name={"start"}
                placeholder="YYYY"
                value={elem.start}
                onChange={(e) => handleFormChange(index, e)}
              />
            </div>
            <div className="input-wrapper">
              <label>End Year:</label>
              <input
                name={"end"}
                placeholder="YYYY"
                value={elem.end}
                onChange={(e) => handleFormChange(index, e)}
              />
            </div>
          </div>
        );
      })}
      </div>
      <button onClick={addEducationFields}>Add Another School</button>
    </>
  );
}

EducationFields.propTypes = {
  educationInputs: PropTypes.array.isRequired,
  updateFields: PropTypes.func.isRequired
};
