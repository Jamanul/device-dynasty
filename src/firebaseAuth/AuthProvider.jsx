import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]= useState(true)
    const auth = getAuth(app)
    const createUser =(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInWithEmail=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser) 
            if (currentUser) {
            setUser(currentUser) 
            setLoading(false)
            } else {
              setUser(null)
            }
          });
          return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo ={
        logInWithEmail,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;