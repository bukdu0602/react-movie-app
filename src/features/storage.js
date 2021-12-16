import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    liked: []
  }

function getIndex(like, arr) {
    return arr.findIndex(arrItem => arrItem.id === like.id)
}

export const userSlice = createSlice({
    name: "user", 
    initialState,
    reducers: {
        addLike: (state, action) => {
            state.liked = [...state.liked, action.payload]
        }, 
        removeLike: (state, action) => {
            state.liked.splice(getIndex(action.payload, state.liked), 1)
        }
    }
})


export const { addLike, removeLike } = userSlice.actions
export default userSlice.reducer