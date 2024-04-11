import PropTypes from "prop-types";

import { useCardContext } from "../../App";

import "./checkbox.css";

export const Checkbox = ({ children }) => {
  const { handleChange } = useCardContext();

  return (
    <label>
      <input type="checkbox" onChange={handleChange} />
      <span>{children}</span>
    </label>
  );
};

Checkbox.propTypes = {
  children: PropTypes.elementType,
};
