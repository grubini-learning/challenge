import PropTypes from "prop-types";

import VisaLogo from "../../../assets/images/visa-logo.svg";

import "./Footer.card.css";

export const Footer = ({ zip }) => {
  return (
    <footer className="card-footer">
      <span>zip {zip}</span>
      <img srcSet={VisaLogo} alt="Visa logo" />
    </footer>
  );
};

Footer.propTypes = {
  zip: PropTypes.string,
};
