import axios from 'axios';

const URL=''

const signupURL=`${URL}/signup`;
const loginURL=`${URL}/login`


export const authenticateSignup=async(data)=>{
    try{
        return await axios.post(signupURL,data);
    }catch(err){
        console.log("error in signup",err);
    }
}

export const authenticateLogin=async(data)=>{
    try{
        return await axios.post(loginURL,data);
    }catch(err){
        console.log("error in login",err);
        return err.response;
    }
}

export const payUsingPaytm=async(data)=>{
    try{
        let res=await axios.post(`${URL}/payment`,data)
        return res.data;
    }catch(err){
        console.log("error in payment",err);
    }
}