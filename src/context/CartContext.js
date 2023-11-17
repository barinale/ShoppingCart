import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../UseReducer/CartReducer";

const initialState = {
    cartList:[],
    total:0
}

export const CartContext = createContext(initialState);

export const CartProvider = ({children})=>{
    const [state,dispatch]= useReducer(CartReducer,initialState)

    const AddToCart=(product)=>{
        const updateCart = state.cartList.concat(product)
        UpdateTotal(updateCart)
        dispatch({type:'ADD_TO_CART',
        payload:{cartList:updateCart}})
    }

    const RemoveCart = (product)=>{
        const updatedCart = state.cartList.filter((item)=>item.id !== product.id)
        UpdateTotal(updatedCart)
        dispatch({type:"REMOVE_FROM_CART",payload:{cartList:updatedCart}})
    }


    const UpdateTotal= (products)=>{
        let TotalC = 0;
        products.forEach(element => {
            TotalC = TotalC+element.price;
        });    
        dispatch({type:"UPDATE_TOTAL",payload:{total:TotalC}})
    }
   const value = {
    total:state.total,
    cartList:state.cartList
   }

    return (
        <CartContext.Provider value={{ value,AddToCart,RemoveCart }}>
            {children}
        </CartContext.Provider>
    )
}
export const UseCart = ()=>{
    return useContext(CartContext)
}