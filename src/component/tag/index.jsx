import PropTypes from "prop-types";

import "./tag.css";

export const Tag = ({
  textColor = "hsla(245, 53%, 24%, 1)",
  tagColor = "white",
  children,
}) => {
  return (
    <span
      style={{ color: textColor, backgroundColor: tagColor }}
      className="tag"
    >
      {children}
    </span>
  );
};

Tag.propTypes = {
  textColor: PropTypes.string,
  tagColor: PropTypes.string,
  children: PropTypes.node,
  //   tagColor: PropTypes.string,
};
