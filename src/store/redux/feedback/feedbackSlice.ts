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
            /* reset : create.reducer((state: FeedbackStateSlice)=> {state.likes = 0, state.dislikes = 0} ) */
            // аналог - чтобы не переписывать каждое свойство, а сразу вернуться в первоначальное состояние 
            reset : create.reducer(() => feedbackInitialState)
        }),
        //6
        selectors: {
         /*    feedbackLikesValue: (state: FeedbackStateSlice) => state.likes,
            feedbackDislikeValue : (state: FeedbackStateSlice) => state.dislikes */
           // упрощение когда несколько свойств
           // возвращаем сразу весь объект, и уже в компаненте забираем отдельные свойства 
           feedbackData : (state: FeedbackStateSlice) => state
        }
    })

    // 7
    export const feedbackAction = feedbackSlice.actions
    export const feedbackSelectors = feedbackSlice.selectors