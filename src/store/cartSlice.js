import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartList:[],
        Total:0
    },
    reducers:{
        add(state,action){
            const updateList = state.cartList.concat(action.payload);
            const Tol = state.Total+action.payload.price;
            return {...state,cartList:updateList,Total:Tol};
        },
        remove(state,action){
            const UpdateList = state.cartList.filter(item=>item.id !==action.payload.id)
            const Tol = state.Total - action.payload.price;
            return   {...state,Total:Tol,cartList:UpdateList}

        }
    }
});

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;