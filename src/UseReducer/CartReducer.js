export const CartReducer = (state,action)=>{
    
    const {type,payload}  = action;

    switch(type){
        case 'ADD_TO_CART': 
            return{
                ...state,
                    cartList:payload.cartList}
        case 'REMOVE_FROM_CART': 
                return{
                    ...state,
                        cartList:payload.cartList
                }
        case 'UPDATE_TOTAL':
            return{
                ...state,
                    total:payload.total
            }                
        default:
            console.log("nothing from lesting Abouve;")    


    }
}