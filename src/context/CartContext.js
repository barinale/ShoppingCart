import { createContext, useContext } from "react";

const initialState = {
    cartList:[],
    total:0
}

export const CartContext = createContext(initialState);

export const CartProvider = ({children})=>{

    return (
        <CartContext.Provider value={''}>
            {children}
        </CartContext.Provider>
    )
}
export const UseCart = ()=>{
    return useContext(CartContext)
}