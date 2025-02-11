import Button from "components/Button/Button"
import {
  AdviceRandomizerWrapper,
  AdviceCard,
  AdviceContainer,
  ButtonWrapper,
  AdviceText,
  SpinnerWrapper,
  ErrorWrapper
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomAdviceActions,
  randomAdviceSelectors,
} from "store/redux/adviceRandomizer/adviceRandomizerSlice"
import { v4 } from "uuid"
import Spinner from "components/Spinner/Spinner"

function AdviceRandomizer() {
  const { slip, error, status } = useAppSelector(
    randomAdviceSelectors.adviceData,
  )
  const dispatch = useAppDispatch()

const adviceList = slip.map((advice) => {
    return <AdviceText key={v4()}>{advice}</AdviceText>
 }) 


  const getAdvice = () => {
    dispatch(randomAdviceActions.getAdvice())
  }

  return (
    <AdviceRandomizerWrapper>
      <AdviceCard>
        <ButtonWrapper>
          <Button name="Get Advice" onClick={getAdvice} />
          <SpinnerWrapper> 
          {status === "loading" && <Spinner />}
          </SpinnerWrapper>
        </ButtonWrapper>
        <AdviceContainer>{adviceList}</AdviceContainer>
      </AdviceCard>
      <ErrorWrapper>{error}</ErrorWrapper>
    </AdviceRandomizerWrapper>
  )
}

export default AdviceRandomizer
