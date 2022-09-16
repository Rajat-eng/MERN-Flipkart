import * as actionType from '../constants/cartConstant';

export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        
        case actionType.ADD_TO_CART:
            const item=action.payload;
            const exist=state.cartItems.find(product=>product.id===item.id);

            if(exist){
                return({
                    ...state,  
                    cartItems:state.cartItems.map(data=>data._id===exist._id ? item:data) 
                })
            }else{
                return({
                    ...state,
                    cartItems:[item,...state.cartItems]
                })
            }

        case actionType.REMOVE_FROM_CART:
            return({
                ...state,
                cartItems:state.cartItems.filter(product=>product.id!==action.payload)
            })
            
        case actionType.INCREASE_QUANTITY:
            const increaseItem=action.payload;
            const currentItem=state.cartItems.find(product=>product.id===increaseItem.id);
            currentItem.quantity+=1
            return({
                ...state,
                cartItems:state.cartItems.map(data=>data._id===currentItem._id ? increaseItem:data) 
            })

        case actionType.DECREASE_QUANTITY:
            const desiredItem=action.payload;
            const existItem=state.cartItems.find(product=>product.id===desiredItem.id);
            existItem.quantity-=1
            return({
                ...state,
                cartItems:state.cartItems.map(data=>data._id===existItem._id ? desiredItem:data) 
            })
        
        default:return state
    }
}