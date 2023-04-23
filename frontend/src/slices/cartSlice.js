import {createSlice} from '@reduxjs/toolkit'

const initialState={
    itemCart:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        setItemCart:(state,action)=>{
            state.itemCart.push(action.payload)
        },
        setDeleteItem:(state,action)=>{
            state.itemCart=state.itemCart.filter(game=>game.id !== action.payload)
        }
    }
})


export const {setItemCart,setDeleteItem}=cartSlice.actions
export default cartSlice.reducer