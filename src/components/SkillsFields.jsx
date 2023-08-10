import PropTypes from "prop-types";

export function SkillsFields({ skillsInput, updateInput }) {
  const updateSkillsInfo = (event) => {
    let data = event.target.value;
    updateInput(data);
  };

  return (
    <div className="form-section">
      <div className="input-wrapper">
        <label>Skills: (enter skills in a comma separated list)</label>
        <textarea
          name="skills"
          value={skillsInput}
          onChange={(e) => updateSkillsInfo(e)}
        ></textarea>
      </div>
    </div>
  );
}

SkillsFields.propTypes = {
  skillsInput: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired,
};
