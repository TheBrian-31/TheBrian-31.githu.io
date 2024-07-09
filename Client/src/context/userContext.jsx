// userContext.jsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { userService } from '../services/user.service';
import { authenticateService } from '../services/auth.service';

const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState();
    const [tokenVerified, setTokenVerified] = useState(false);

    useEffect(() => {
        const verifyTokenAsync = async () => {
            const lsToken = getToken();
        
            // Verificación del token con el back-end
            if (lsToken && !tokenVerified) {
                //const { email, roles } = await verifyToken(lsToken);
                const res = await userService.verifyToken(lsToken);
                console.log("USER CONTEXT",res);
                if (res) {
                    //let roleList = roles.map(role => role.id);
                    setUser(res);
                    
                    //console.log(res);
                    setTokenAll(lsToken);
                    
                }
                setTokenVerified(true);
            }
        };
        

        verifyTokenAsync();
    }, [token, tokenVerified]);

    const setTokenAll = (newToken) => {
        if (newToken) {
            localStorage.setItem("token", newToken);
        } else {
            localStorage.removeItem("token");
        }
        setToken(newToken);
    };

    const logout = useCallback(() => {
        setUser(undefined);
        setTokenAll(undefined);
    }, []);

    const loginWithGoogle = useCallback((googleToken) => {
        const loginWithGoogleAsync = async () => {
            let status = false;
            try {
                const signInResponse = await authenticateService(googleToken);

                if (signInResponse.ok) {
                    const { token: tokenRes } = signInResponse.data;
                    setTokenAll(tokenRes);
                    status = true;
                    
                    //Guarda los rols en localStorage
                    //Set roles in localStorage
                    const res = await userService.verifyToken(tokenRes);
                    if (res) {
                        localStorage.setItem("roles", JSON.stringify(res.roles.map(role => role.id)));
                    }
                }
            } catch (error) {
                console.error(error);
            } finally {
                return status;
            }
        };

        return loginWithGoogleAsync();
    }, []);

    const value = useMemo(() => ({
        token,
        user: user,
        logout,
        loginWithGoogle,
    }), [token, user, logout, loginWithGoogle]);

    return <UserContext.Provider value={value} {...props} />;
}

export const useUserContext = () => {
    const context = React.useContext(UserContext);

    if (!context) {
        throw new Error("useUserContext() isn't inside of UserProvider");
    }

    return context;
}

const getToken = () => localStorage.getItem("token");

//export { UserContext };