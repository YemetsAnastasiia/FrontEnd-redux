import { createAppSlice } from "store/createAppSlice"

import { UserData, UserSliceState } from "./type"
import { PayloadAction } from "@reduxjs/toolkit"

const userInitialState: UserSliceState = {
  users: [],
}

export const userSlice = createAppSlice({
  name: "USER",
  initialState: userInitialState,
  reducers: create => ({
    addUser: create.reducer(
      (state: UserSliceState, action: PayloadAction<UserData>) => {
        state.users = [...state.users, action.payload] // добавить нового юзера в массив  payload - когда хотим из компонента пробросить данные сюда 
      },
    ),
  }),
  selectors: {
   users: (state: UserSliceState) => state.users
  }
})


export const usersActions = userSlice.actions
export const usersSelectors = userSlice.selectors
