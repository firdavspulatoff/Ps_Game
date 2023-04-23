import {createSlice} from '@reduxjs/toolkit'

const initialState={
    game:[]
}

export const searchSlice2=createSlice({
    name:"game",
    initialState,
    reducers:{
        setSearchGame:(state,action)=>{
            state.game.push(action.payload)
        },
    },
})

export const {setSearchGame}  = searchSlice2.actions
export default searchSlice2.reducer