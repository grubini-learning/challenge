import "./Header.card.css";

import BenepassLogo from "../../../assets/images/benepass-logo.svg";

export const Header = () => {
  return (
    <header className="card-header">
      <img srcSet={BenepassLogo} alt="Benepass logo" />
      <span>Virtual</span>
    </header>
  );
};
