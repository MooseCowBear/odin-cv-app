import PropTypes from "prop-types";
import "../styles/Skills.css";

export function SkillsSection({ skillsInfo }) {
  return (
    <div className="skills-wrapper">
      <h2>Skills</h2>
      <ul>
        {skillsInfo
          .split(",")
          .filter((s) => s.trim() !== "")
          .map((elem, index) => {
            return (
              <li className="" key={index}>
                {elem}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

SkillsSection.propTypes = {
  skillsInfo: PropTypes.string.isRequired,
};
