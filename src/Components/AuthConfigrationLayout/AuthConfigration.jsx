import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthConfigration = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    return (
        <div>
            {children}
        </div>
    );
};

export default AuthConfigration;