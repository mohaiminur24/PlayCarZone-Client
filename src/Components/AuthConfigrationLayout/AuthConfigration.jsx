import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from '../FirebaseConfigrationLayout/FirebaseConfig';
import {Helmet} from "react-helmet";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const AuthConfigration = ({children}) => {
    const [user, setUser] = useState("no user");
    const [loading, setLoading] = useState(true);

    // Registration user function is here
    const handlecreatenewuser = (email, pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);  
    };

    // logout user function is here
    const loggedout = ()=>{
        setLoading(true);
        return signOut(auth);
    };

    // login user function is here
    const handleloginuser = (email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    };

    // user login with google function is here
    const handlegooglelogin =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleprovider);
    };

    // current user function is here
    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, loggeduser =>{
            setUser(loggeduser);
            setLoading(false);
        });

        return ()=>{
            return unsuscribe;
        }
    },[]);

    // Authcontext value is here
    const AuthValue ={
        user,
        loading,
        handlecreatenewuser,
        loggedout,
        handleloginuser,
        handlegooglelogin,
    };

    return (
        <AuthContext.Provider value={AuthValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthConfigration;