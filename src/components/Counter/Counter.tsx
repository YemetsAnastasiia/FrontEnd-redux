import Button from "../Button/Button";
import {
  CounterContainer,
  CounterButtonContainer,
  CounterResultContainer,
} from "./styles";

import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const onPlusClick = (): void => {
    setCounter((prevState) => {
      if (prevState < 20) {
        return prevState + 1;
      }
      return prevState;
    });
  };

  const onMinusClick = (): void => {
    setCounter((prevValue) => prevValue - 1); //  prevState - актуальное значение State
  };

  return (
    <CounterContainer>
      <CounterButtonContainer>
        <Button name="-" type="button" onClick={onMinusClick} />
      </CounterButtonContainer>
      <CounterResultContainer>{counter}</CounterResultContainer>
      <CounterButtonContainer>
        <Button name="+" type="button" onClick={onPlusClick} />
      </CounterButtonContainer>
    </CounterContainer>
  );
}
export default Counter;
