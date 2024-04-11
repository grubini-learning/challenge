import PropTypes from "prop-types";

import "./dot.css";

export const Dot = ({ repetition = 0, classes = [] }) => {
  const reps = Array.from({ length: repetition }, (_, index) => index + 1);
  const finalClasses = classes.join(" ");

  return (
    <div className={`secret-group ${finalClasses}`}>
      {reps.map((el) => (
        <div key={el} className="secret" />
      ))}
    </div>
  );
};

Dot.propTypes = {
  repetition: PropTypes.number,
  classes: PropTypes.arrayOf(PropTypes.string),
};
