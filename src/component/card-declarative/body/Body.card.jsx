import PropTypes from "prop-types";

import { Dot } from "../../dot";
import { useCardContext } from "../../../App";

import "./Body.card.css";

export const Body = ({ cvc, expiration, number }) => {
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
  );
};

Body.propTypes = {
  cvc: PropTypes.string,
  expiration: PropTypes.string,
  number: PropTypes.string,
};
