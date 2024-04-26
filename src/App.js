import { useState, createContext, useContext } from "react";

import { Card, Checkbox, CardDeclarative } from "./component";

import { cards } from "./data";

const CardContext = createContext(null);

const CardContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleChange = (value) => {
    const userPreference = value.target.checked;
    setShow(userPreference);
  };

  return (
    <CardContext.Provider value={{ show, handleChange }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const ctx = useContext(CardContext);

  if (ctx === null) {
    throw new Error("Card context is null");
  }

  return ctx;
};

function App() {
  const cardsProps = { ...cards[0] };

  return (
    <div className="App">
      <CardContextProvider>
        <Card card={cardsProps} />
        <Checkbox>Show details</Checkbox>
        <CardDeclarative card={cardsProps} />
      </CardContextProvider>
    </div>
  );
}

export default App;
