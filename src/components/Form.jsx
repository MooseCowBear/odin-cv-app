import PropTypes from "prop-types";
import { PersonalInfoFields } from "./PersonalInfoFields";

export function Form({ general }) {
  return (
    <>
      <PersonalInfoFields general={general} />
    </>
  );
}

Form.propTypes = {
  general: PropTypes.object.isRequired,
};
