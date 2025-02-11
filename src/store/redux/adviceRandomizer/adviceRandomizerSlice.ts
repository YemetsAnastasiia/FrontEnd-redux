
import { createAppSlice } from "store/createAppSlice";
import {adviceRandomizerSliceState} from './types'
import axios from "axios";

const adviceRandomizerInitialState : adviceRandomizerSliceState = {
    slip: [],
    error: undefined,
    status: 'default'
}

export const adviceRandomizerSlice = createAppSlice(
    {
        name: 'RANDON_ADVICE',
        initialState: adviceRandomizerInitialState,
        reducers: create => ({
            getAdvice: create.asyncThunk(
                async (arg, thunkApi) => {
                    try{
                    const result = await axios.get('https://api.adviceslip.com/advice')
                    return result.data
                    }catch (error){
                        return thunkApi.rejectWithValue(error)
                    }
                },
                {
                    pending: (state: adviceRandomizerSliceState) => {
                        state.status = 'loading'
                        state.error = undefined
                    },
                    fulfilled: (state: adviceRandomizerSliceState, action: any) => {
                        state.slip = [...state.slip, action.payload.slip.advice];
                        state.status = 'success'
                    },
                    rejected: (state: adviceRandomizerSliceState, action: any) => {
                        state.error = action.payload.message
                        state.status = 'error'
                    }
                }
            )
        }),

        selectors: {
            adviceData: (state: adviceRandomizerSliceState) => state
        }
    
    }
)

export const randomAdviceActions = adviceRandomizerSlice.actions
export const randomAdviceSelectors = adviceRandomizerSlice.selectors