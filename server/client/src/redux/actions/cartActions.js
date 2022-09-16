import * as actionType from '../constants/cartConstant';


export const addToCart=(product)=>(dispatch)=>{
    dispatch({
        type:actionType.ADD_TO_CART,
        payload:product
    })
}


export const removeFromCart=(id)=>(dispatch)=>{
    dispatch({
        type:actionType.REMOVE_FROM_CART,
        payload:id
    })
}

export const increaseQuantity=(item,quantity)=>{
    return{
        type:actionType.INCREASE_QUANTITY,
        payload:item
    }
}

export const decreaseQuantity=(item,quantity)=>{
    return{
        type:actionType.DECREASE_QUANTITY,
        payload:item
    }
}