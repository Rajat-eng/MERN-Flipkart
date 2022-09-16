import { createContext,useState } from "react";


const initialState={
    user:null
}


export const AuthContext=createContext(initialState);

const AuthProvider=({children})=>{
    
    //const auth=useProviderAuth();

    const [user,setUser]=useState('');
    
    return(
            <AuthContext.Provider value={
                {user,setUser}
            }>
                {children}
            </AuthContext.Provider>
    )
}

export default AuthProvider;