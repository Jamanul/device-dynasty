import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]= useState(true)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const createUser =(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInWithEmail=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser=(name,photoUrl)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
          })
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
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
        logInWithEmail,createUser,updateUser,setUser,user,logOut,loginWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;