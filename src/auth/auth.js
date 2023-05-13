import React, { createContext, useContext, useEffect, useState } from 'react';
import Auth from '@0441design/auth-fg-browser'; // Assume your Auth class is exported from auth.js

const AuthContext = createContext();

const AUTH_DATA = {
    LOGINURL: 'https://localhost:3000/authorize/login',
    CALLBACKURL: 'https://localhost:3000/authorize/callback'
}

const API_URL = 'https://localhost:3000/api'

export default function AuthProvider({ children, authData, apiUrl }) {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const authInstance = new Auth(AUTH_DATA, API_URL);
        setAuth(authInstance);
    }, []);

    if (!auth) {
        return null; // or your loading state
    }

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
