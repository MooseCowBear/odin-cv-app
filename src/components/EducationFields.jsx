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

  const removeFields = (index) => {
    let data = [...educationInputs];
    data.splice(index, 1);
    updateFields(data);
  }

  return (
    <>
      <div className="form-section-wrapper">
      {educationInputs.map((elem, index) => {
        return (
          <div key={index}>
            <div className="form-section">
              <div className="input-wrapper">
                <label>School:</label>
                <input
                  type="text"
                  name="school"
                  value={elem.school}
                  onChange={(e) => handleFormChange(index, e)}
                />
              </div>
              <div className="input-wrapper">
                <label>Course of Study:</label>
                <input
                  type="text"
                  name={"study"}
                  value={elem.study}
                  onChange={(e) => handleFormChange(index, e)}
                />
              </div>
              <div className="input-wrapper">
                <label>Degree:</label>
                <input
                  type="text"
                  name={"degree"}
                  value={elem.degree}
                  onChange={(e) => handleFormChange(index, e)}
                />
              </div>
              <div className="input-wrapper">
                <label>Start Year:</label>
                <input
                  type="text"
                  name={"start"}
                  placeholder="YYYY"
                  value={elem.start}
                  onChange={(e) => handleFormChange(index, e)}
                />
              </div>
              <div className="input-wrapper">
                <label>End Year:</label>
                <input
                  type="text"
                  name={"end"}
                  placeholder="YYYY"
                  value={elem.end}
                  onChange={(e) => handleFormChange(index, e)}
                />
              </div>
            </div>
            <button
              className="button-remove"
              onClick={() => {
                removeFields(index);
              }}
            >
              Remove
            </button>
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
