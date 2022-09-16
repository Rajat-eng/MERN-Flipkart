
import * as actionType from '../constants/productConstant';


const initialState={
    products:[],
    error:null
}

export const getProductsReducer=(state=initialState,action)=>{

    switch(action.type){

        case actionType.GET_PRODUCTS_SUCCESS:
        return{
            ...state,
            products:action.payload
        }
        case actionType.GET_PRODUCTS_FAILURE:
        return{
            ...state,
            error:action.payload
        }

        default: return state;
    }
}


export const getProductDetailsReducer=(state={product:{},loading:true,error:null},action)=>{
    switch(action.type){
        // case actionType.GET_PRODUCT_DETAILS_REQUEST:
        // return{
        //     ...state,loading:true
        // }

        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
        return{
            ...state,loading:false,product:action.payload
        }

        case actionType.GET_PRODUCT_DETAILS_FAILURE:
        return{
            ...state,
            error:action.payload,
            loading:false
        }

        default:return state;
    }
}

