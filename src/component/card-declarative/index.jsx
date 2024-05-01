import PropTypes from "prop-types";

import { Header } from "./header/Header.card";
import { Footer } from "./footer/Footer.card";

import "./index.css";

export const CardDeclarative = ({
  cardBackground = "https://imagedelivery.net/srz7f0QqFI2B_1dARS7nLA/27558906-18fe-4587-55fa-342239bd4900/public",
  children,
}) => {
  return (
    <section style={{ backgroundImage: `url(${cardBackground})` }}>
      {children}
    </section>
  );
};

CardDeclarative.Header = Header;
CardDeclarative.Footer = Footer;

CardDeclarative.propTypes = {
  children: PropTypes.node,
  cardBackground: PropTypes.string,
};
