import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from '../FirebaseConfigrationLayout/FirebaseConfig';

export const AuthContext = createContext(null);
const auth = getAuth(app);

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
        return signInWithEmailAndPassword(auth, email, pass);
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
        handleloginuser
    };

    return (
        <AuthContext.Provider value={AuthValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthConfigration;