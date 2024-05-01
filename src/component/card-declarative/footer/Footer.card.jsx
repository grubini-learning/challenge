import PropTypes from "prop-types";

import "./Footer.card.css";

export const Footer = ({ textColor = "white", children }) => {
  return (
    <footer style={{ color: textColor }} className="card-footer">
      {children}
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
  textColor: PropTypes.string,
};
