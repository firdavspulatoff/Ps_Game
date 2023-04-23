import {createSlice} from '@reduxjs/toolkit'

const initialState={
    game:[]
}

export const searchSlice=createSlice({
    name:"game",
    initialState,
    reducers:{
        setSearchGame:(state,action)=>{
            state.game.push(action.payload)
        },
    },
})

export const {setSearchGame}  = searchSlice.actions
export default searchSlice.reducer