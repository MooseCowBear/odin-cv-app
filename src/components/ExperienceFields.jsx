import PropTypes from "prop-types";

export function ExperienceFields({ experienceInputs, updateFields }) {
  const handleFormChange = (index, event) => {
    let data = [...experienceInputs];
    data[index][event.target.name] = event.target.value;
    updateFields(data);
  };

  const addExperienceFields = () => {
    let newField = {
      company: "",
      position: "",
      responsibilities: "",
      start: "",
      end: "",
    };
    updateFields([...experienceInputs, newField]);
  };

  return (
    <>
      {experienceInputs.map((elem, index) => {
        return (
          <>
            <div className="form-section" key={index}>
              <div className="input-wrapper">
                <label>Company/Organization:</label>
                <input
                  name="company"
                  value={elem.company}
                  onChange={(e) => handleFormChange(index, e)}
                />
              </div>
              <div className="input-wrapper">
                <label>Position:</label>
                <input
                  name="position"
                  value={elem.position}
                  onChange={(e) => handleFormChange(index, e)}
                />
              </div>

              <div className="input-wrapper">
                <label>Start:</label>
                <input
                  name={"start"}
                  placeholder="YYYY"
                  value={elem.start}
                  onChange={(e) => handleFormChange(index, e)}
                />
              </div>
              <div className="input-wrapper">
                <label>End:</label>
                <input
                  name={"end"}
                  placeholder="YYYY"
                  value={elem.end}
                  onChange={(e) => handleFormChange(index, e)}
                />
              </div>
            </div>
            <div className="input-wrapper textarea">
              <label>Responsibilities: (separate each with a period.)</label>
              <textarea
                name={"responsibilities"}
                value={elem.responsibilities}
                onChange={(e) => handleFormChange(index, e)}
              />
            </div>
          </>
        );
      })}
      <button onClick={addExperienceFields}>Add Another Company</button>
    </>
  );
}

ExperienceFields.propTypes = {
  experienceInputs: PropTypes.array.isRequired,
  updateFields: PropTypes.func.isRequired
};