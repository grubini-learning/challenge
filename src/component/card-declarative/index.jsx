import PropTypes from "prop-types";

import { Header } from "./header/Header.card";
import { Body } from "./body/Body.card";
import { Footer } from "./footer/Footer.card";

import "./index.css";

export const CardDeclarative = ({ card }) => {
  return (
    <section>
      <Header />
      <Body {...card} />
      <Footer zip={card.zip} />
    </section>
  );
};

CardDeclarative.propTypes = {
  card: PropTypes.shape({
    cvc: PropTypes.string,
    expiration: PropTypes.string,
    number: PropTypes.string,
    zip: PropTypes.string,
  }),
};
