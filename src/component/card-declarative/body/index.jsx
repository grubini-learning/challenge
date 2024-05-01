import PropTypes from "prop-types";

import { Dot } from "../../dot";
import { useCardContext } from "../../../App";

import "./Body.card.css";

export const Body = ({ cvc, expiration, number, textColor = "white" }) => {
  const { show } = useCardContext();
  const cardNumbers = show ? (
    <span>{number}</span>
  ) : (
    <>
      <Dot repetition={4} />
      <span>{number.split(" ").at(-1)}</span>
    </>
  );

  const getDetails = () => {
    const cvcNumbers = show ? (
      <span className="value">{cvc}</span>
    ) : (
      <Dot repetition={3} classes={["value"]} />
    );

    return (
      <div className="card-details">
        <div className="details">
          <span className="title">valid thru</span>
          <span className="value">{expiration}</span>
        </div>

        <div className="details">
          <span className="title">cvc</span>
          {cvcNumbers}
        </div>
      </div>
    );
  };

  return (
    <article className="card-body" style={{ color: textColor }}>
      <span className="card-number">{cardNumbers}</span>
      {getDetails()}
    </article>
  );
};

Body.propTypes = {
  cvc: PropTypes.string,
  expiration: PropTypes.string,
  number: PropTypes.string,
  textColor: PropTypes.string,
};
