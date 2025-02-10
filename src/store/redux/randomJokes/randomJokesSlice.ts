import axios from "axios"
import { RandomJokesSliceState } from "./type"

//1
import { createAppSlice } from "store/createAppSlice"

// 2.1
const randomJokesItitialState: RandomJokesSliceState = {
  data: [],
  error: undefined,
  status: "default",
}

//2
export const randomJokesSlice = createAppSlice({
  name: "RANDOM_JOKES",
  initialState: randomJokesItitialState,
  // 1. middleware создаем в объекте reducers вместе с обычными редьюсерами,
  //но с использлванием метода asyncThunk
  reducers: create => ({
    // 2. Создаем middleware c помощью метода asyncThunk из объекта create
    // метод asyncThunk принимает два аргумента -
    /* 1-й  агрумент - ассинхронная функция для отправки запроса 
        2-й аргумент - объект, с 3-мя свойствами, которые содежат функции обрабатывающие результат 
        выполнения асинхронной функции */
    getJoke: create.asyncThunk(
      /* асинхронная функция принимает два аргумента
        1-й аргумент - arg, он позволяет передавать данные из компонента в ассинхронную функцию,
        например для отправки данных на сервер при работе с методом post 

        2-й аргумент - thunkApi (объект, кот содержит вспомагательные функции для работы с передачей 
        полученных данных из ассинхронной функции в редьюсеры (fulfilled, rejected))
         */
      async (arg, thunkApi) => {
        try {
          const result = await axios.get(
            "https://official-joke-api.appspot.com/random_joke",
          )
          // 3. В случае успешного завершения запроса возвращаем полученные данные для того, чтобы
          // получить их в обработчике fulfilled (так как только редьюсеры имеют право изменять state)
          return result.data
        } catch (error) {
          // в случае ошибки ее нужно отправить в обработчик rejected с помощью метода rejectWithValue
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        /* 5. Обрабатываем действия, кот должны происходить когда произошла отправка запроса, 
        но результат мы еще ждем  */
        pending: (state: RandomJokesSliceState) => {
          state.status = "loading"
          state.error = undefined // на случай если до этого была ошибка - очищаем ее
        },
        /* 6. Обработка успешного результата  */
        fulfilled: (state: RandomJokesSliceState, action: any) => {
          state.data = [
            ...state.data,
            `${action.payload.setup} - ${action.payload.punchline}`
          ],
          state.status = "success"
        },
        // 7. Обработка ошибки
        rejected: (state: RandomJokesSliceState, action: any) => {
            state.error= action.payload.message
            state.status = 'error'
        },
      },
    ),
  }),
 // 8
selectors: {
    jokeData: (state: RandomJokesSliceState) => state
}

})

// 9
export const randomJokesActions = randomJokesSlice.actions
export const randomJokesSelectors = randomJokesSlice.selectors
