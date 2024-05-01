import PropTypes from "prop-types";

import "./Header.card.css";

export const Header = ({ children }) => {
  return <header className="card-header">{children}</header>;
};

Header.propTypes = {
  children: PropTypes.node,
};
