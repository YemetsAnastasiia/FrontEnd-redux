/* 1. Импортируем функцию, с помощью которой мы создаем slice  */
import { createAppSlice } from "../../createAppSlice"
import { CounterStateSlice } from "./type"

// Шаг 4.1. СОздаем объект с первоначальным состоянием, который потом передаем в
// initialState
const counterInitialState: CounterStateSlice = {
  count: 0,
}

/* 2. Создаем слайс для каунтера с помощью вызова функции createAppSlice
в которую передаем объект настройки 
*/
export const counterSlice = createAppSlice({
  /*  3. Создаем имя, под которым будет храниться объект со значением каунтера (его стейт)
   стейт для отдельных частей данных всегда представляет собой объект 
     */
  name: "COUNTER",
  // 4. Задаем объект, в котором будет храниться начальное состояние
  initialState: counterInitialState,
  // 5.  Создаем объект, внутри которого будет храниться редьюсеры
  // (функции, которые отвечают за изменение состояния (state))
  reducers: create => ({
    plus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count - 1
    }),
  }),
  
  // 6. Создаем селекторы, которые позволяют забрать данные из стейта в компонент
  selectors: {
    countValue: (state: CounterStateSlice)=>state.count
  }
})

// 7. Делаем експорт экшенов и селекторов для возможности их использования в компонентах 
export const counterActions = counterSlice.actions
export const counterSelectors = counterSlice.selectors
