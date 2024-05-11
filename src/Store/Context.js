import { createContext, useState } from "react";

export const authContext=createContext(null);

export const Context=({children})=>{
  const [User,setUser]=useState('hi iam a context');
  

  return(
    <authContext.Provider value={{User,setUser}}>
        {children}
    </authContext.Provider>
  )
}
