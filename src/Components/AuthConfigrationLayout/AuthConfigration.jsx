import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthConfigration = ({children}) => {
    const [user, setUser] = useState("no user");
    const [loading, setLoading] = useState(true);



    // Authcontext value is here
    const AuthValue ={
        user,
        loading
    };

    return (
        <AuthContext.Provider value={AuthValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthConfigration;