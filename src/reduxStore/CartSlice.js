import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.splice(0,1)
        },
        clearCart:(state)=>{
            state.items.length = 0
        }
    }
})

export default CartSlice.reducer
export let {addItem,removeItem,clearCart} = CartSlice.actions