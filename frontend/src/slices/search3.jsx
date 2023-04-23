import {createSlice} from '@reduxjs/toolkit'

const initialState={
    game:[]
}

export const searchSlice3=createSlice({
    name:"game",
    initialState,
    reducers:{
        setSearchGame:(state,action)=>{
            state.game.push(action.payload)
        },
    },
})

export const {setSearchGame}  = searchSlice3.actions
export default searchSlice3.reducer