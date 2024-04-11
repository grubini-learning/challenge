import PropTypes from "prop-types";

import { Dot } from "../dot";
import { useCardContext } from "../../App";

import BenepassLogo from "../../assets/images/benepass-logo.svg";
import VisaLogo from "../../assets/images/visa-logo.svg";

import "./card.css";

export const Card = ({ card: { cvc, expiration, number, zip } }) => {
  const { show } = useCardContext();

  const getDetails = () => {
    return (
      <div className="card-details">
        <div className="details">
          <span className="title">valid thru</span>
          <span className="value">{expiration}</span>
        </div>

        <div className="details">
          <span className="title">cvc</span>
          {!show ? (
            <Dot repetition={3} classes={["value"]} />
          ) : (
            <span className="value">{cvc}</span>
          )}
        </div>
      </div>
    );
  };

  return (
    <section>
      <header className="card-header">
        <img srcSet={BenepassLogo} alt="Benepass logo" />
        <span>Virtual</span>
      </header>

      <article className="card-body">
        <span className="card-number">
          {!show ? (
            <>
              <Dot repetition={4} />
              <span>{number.split(" ").at(-1)}</span>
            </>
          ) : (
            <span>{number}</span>
          )}
        </span>

        {getDetails()}
      </article>

      <footer className="card-footer">
        <span>zip {zip}</span>
        <img srcSet={VisaLogo} alt="Visa logo" />
      </footer>
    </section>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    cvc: PropTypes.string,
    expiration: PropTypes.string,
    number: PropTypes.string,
    zip: PropTypes.string,
  }),
};
