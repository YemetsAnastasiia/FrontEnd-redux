import { count } from "console"
import Button from "../Button/Button"
import {
  CounterContainer,
  CounterButtonContainer,
  CounterResultContainer,
} from "./styles"

// Шаг 9. Импоруем хуки для диспатча и получения данных (селекторов)
import { useAppDispatch, useAppSelector } from "store/hooks"

// Шаг 10. Импортируем экшены и селекторы, которые были созданы и экспортированы в фпйле со слайсами
import {
  counterActions,
  counterSelectors,
} from "store/redux/counter/counterSlice"

function Counter() {
  // Шаг 11. Забираем значение каунтера из store
  const counter = useAppSelector(counterSelectors.countValue)

  // Шаг 12. Получаем функцию dispatch, которую возвращает хук useDispatch 
  const dispatch = useAppDispatch()

  const onMinus = () => {
// Шаг 13. Диспатчим екшен (передаем в вызов функции dispatch необходимый идентификатор действия (action))
dispatch(counterActions.minus())
  }

  const onPlus = () => {
    dispatch(counterActions.plus())
  }

  return (
    <CounterContainer>
      <CounterButtonContainer>
        <Button name="-" type="button" onClick={onMinus} />
      </CounterButtonContainer>
      <CounterResultContainer>{counter}</CounterResultContainer>
      <CounterButtonContainer>
        <Button name="+" type="button" onClick={onPlus} />
      </CounterButtonContainer>
    </CounterContainer>
  )
}
export default Counter
