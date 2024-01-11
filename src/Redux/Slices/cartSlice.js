import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name:'cart',
initialState:[],
reducers:{
    addToCart:(state,action)=>{
        const existingProduct = state.find(item=>item.id==action.payload.id)
        if(existingProduct){
        const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
         existingProduct.quantity++
         existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
         state = [...remainingProducts,existingProduct]
        }else{
        state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
        }
    },
    removeCartItem:(state,action)=>{
        return state.filter(item=>item.id!=action.payload)
    },
    emptyCart:(state)=>{
        return state = []
    },
    incQuantity:(state,action)=>{
        const existingProduct = state.find(item=>item.id==action.payload.id)
        existingProduct.quantity++
        existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
        const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
        state = [...remainingProducts,existingProduct]

    },
    decQuantity:(state,action)=>{
        const existingProduct = state.find(item=>item.id==action.payload.id)
        existingProduct.quantity--
        existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
        const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
        state = [...remainingProducts,existingProduct]

    },

}


})


export const {addToCart, removeCartItem , emptyCart, incQuantity, decQuantity} = cartSlice.actions
export default cartSlice.reducer