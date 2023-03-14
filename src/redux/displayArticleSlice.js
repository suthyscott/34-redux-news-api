import { createSlice } from "@reduxjs/toolkit";

export const displayArticleSlice = createSlice({
    name: 'displayArticle',
    initialState: {
        value: {
            title: 'This is the initial display article state'
        }
    },
    reducers: {
        setDisplayArticle: (state, action) => {
            state.value = action.payload
        },
        deleteDisplayArticle: (state) => {
            state.value = null 
        }
    }
})

export const {setDisplayArticle, deleteDisplayArticle} = displayArticleSlice.actions

export const selectDisplay = (state) => {
    console.log(state)
    return state.displayArticle.value
}

export default displayArticleSlice.reducer