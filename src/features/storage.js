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
            console.log(state.liked)
            let stringData = JSON.stringify(state.liked[state.liked.length-1])
            const movieId = state.liked[state.liked.length-1].id
            if(localStorage.getItem(movieId) === null){
                localStorage.setItem(movieId, stringData)
            }
            
        }, 
        removeLike: (state, action) => {
            state.liked.splice(getIndex(action.payload, state.liked), 1)
            localStorage.removeItem(action.payload.id)
        }, 
        removeAll: (state, action) => {
            console.log("hj")
            state.liked = []
        }
    }
})


export const { addLike, removeLike, removeAll } = userSlice.actions
export default userSlice.reducer