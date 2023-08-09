import PropTypes from "prop-types";

export function PersonalInfoFields({ general }) {
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={general.name}></input>

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" value={general.email}></input>

      <label htmlFor="phone">Phone Number:</label>
      <input id="phone" type="tel" value={general.phone}></input>
    </div>
  );
}

PersonalInfoFields.propTypes = {
  general: PropTypes.object.isRequired,
};
