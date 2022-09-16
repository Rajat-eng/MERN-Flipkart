import axios from 'axios';
import * as actionType from '../constants/productConstant'


const URL=''
const getProductsURL=`${URL}/products`;


export const getProducts=()=>async(dispatch)=>{ // thunk = returns getProducts(return async(dispatch))
    try{
        let res=await axios.get(getProductsURL);
        const {data}=res;
        return dispatch({
            type:actionType.GET_PRODUCTS_SUCCESS,
            payload:data
        })
    }catch(error){
        console.log("error while fetching products",error.message)
        return dispatch({
            type:actionType.GET_PRODUCTS_FAILURE,
            payload:error.message
        })
    }
}

export const getProductDetails=(id)=>async(dispatch)=>{
    try{
        // dispatch({type:actionType.GET_PRODUCT_DETAILS_REQUEST})
        let res=await axios.get(`${URL}/product/${id}`);
        const {data}=res;
        dispatch({type:actionType.GET_PRODUCT_DETAILS_SUCCESS,payload:data})
    }catch(err){
        dispatch({type:actionType.GET_PRODUCT_DETAILS_FAILURE,payload:err.message})
    }
}