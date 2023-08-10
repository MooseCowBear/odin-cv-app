import PropTypes from "prop-types";

export function PersonalFields({ personalInput, updateInput }) {

  const updatePersonalInfo = (event) => {
    let data = { ...personalInput };
    data[event.target.name] = event.target.value;
    updateInput(data);
  };

  return (
    <div className="form-section">
      <div className="input-wrapper">
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          value={personalInput.name}
          onChange={(e) => updatePersonalInfo(e)}
        ></input>
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          value={personalInput.email}
          onChange={(e) => updatePersonalInfo(e)}
        ></input>
      </div>
      <div className="input-wrapper">
        <label htmlFor="phone">Phone Number:</label>
        <input
          name="phone"
          type="tel"
          value={personalInput.phone}
          onChange={(e) => updatePersonalInfo(e)}
        ></input>
      </div>
    </div>
  );
}

PersonalFields.propTypes = {
  personalInput: PropTypes.object.isRequired,
  updateInput: PropTypes.func.isRequired
};
