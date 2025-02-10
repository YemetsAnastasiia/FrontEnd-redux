//1
import { createAppSlice } from "store/createAppSlice";
import {FeedbackStateSlice} from './type'

//4.1
const feedbackInitialState = { likes: 0, dislikes: 0}

//2
export const feedbackSlice = createAppSlice(
    {
        //3
        name: 'FEEDBACK',
        //4
        initialState: feedbackInitialState,
        //5
        reducers: create => ({
            like: create.reducer((state: FeedbackStateSlice) => { state.likes = state.likes + 1}),
            dislikes: create.reducer((state:FeedbackStateSlice ) => {state.dislikes = state.dislikes + 1}),
            reset : create.reducer((state: FeedbackStateSlice)=> {state.likes = 0, state.dislikes = 0} ) 
        }),
        //6
        selectors: {
            feedbackLikesValue: (state: FeedbackStateSlice) => state.likes,
            feedbackDislikeValue : (state: FeedbackStateSlice) => state.dislikes
        }
    })

    // 7
    export const feedbackAction = feedbackSlice.actions
    export const feedbackSelectors = feedbackSlice.selectors