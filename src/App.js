import { useState, createContext, useContext } from "react";

import {
  Checkbox,
  CardDeclarative,
  BenepassLogo,
  Tag,
  Body,
} from "./component";

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
        <CardDeclarative cardBackground="https://imagedelivery.net/srz7f0QqFI2B_1dARS7nLA/9660e2a1-e323-4aa3-4224-9bb432e37300/public">
          <CardDeclarative.Header>
            <BenepassLogo />
            <Tag textColor="white" tagColor="rgb(255 255 255/0.1)">
              Physical
            </Tag>
          </CardDeclarative.Header>

          <Body {...cardsProps} />

          <CardDeclarative.Footer>
            <span>zip {cardsProps.zip}</span>
          </CardDeclarative.Footer>
        </CardDeclarative>

        <CardDeclarative cardBackground="https://imagedelivery.net/srz7f0QqFI2B_1dARS7nLA/473bb8ef-8f07-4255-a245-ee109df9ea00/public">
          <CardDeclarative.Header>
            <BenepassLogo />
            <Tag>Physical</Tag>
          </CardDeclarative.Header>

          <Body {...cardsProps} />

          <CardDeclarative.Footer>
            <span>zip {cardsProps.zip}</span>
          </CardDeclarative.Footer>
        </CardDeclarative>

        <CardDeclarative cardBackground="https://imagedelivery.net/srz7f0QqFI2B_1dARS7nLA/27558906-18fe-4587-55fa-342239bd4900/public">
          <CardDeclarative.Header>
            <BenepassLogo textColor={"hsla(245, 53%, 24%, 1)"} />
            <Tag tagColor="hsla(245, 53%, 24%, 1)" textColor="white">
              Physical
            </Tag>
          </CardDeclarative.Header>

          <Body {...cardsProps} textColor="black" />

          <CardDeclarative.Footer textColor="black">
            <span>zip {cardsProps.zip}</span>
          </CardDeclarative.Footer>
        </CardDeclarative>

        <CardDeclarative cardBackground="https://imagedelivery.net/srz7f0QqFI2B_1dARS7nLA/27558906-18fe-4587-55fa-342239bd4900/public">
          <CardDeclarative.Header>
            <BenepassLogo textColor={"hsla(245, 53%, 24%, 1)"} />
            <Tag tagColor="dodgerblue" textColor="white">
              Virtual
            </Tag>
          </CardDeclarative.Header>

          <Body {...cardsProps} textColor="black" />

          <CardDeclarative.Footer textColor="black">
            <span>zip {cardsProps.zip}</span>
          </CardDeclarative.Footer>
        </CardDeclarative>

        <Checkbox>Show details</Checkbox>
      </CardContextProvider>
    </div>
  );
}

export default App;
