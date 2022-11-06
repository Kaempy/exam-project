import React, { useContext } from "react";
import useAuth from "../hooks/useAuth";


const AuthContextProvider = ({ children }) => {
    const { isAuth, user, handleSignOut, handleSignIn } = useAuth();
    const value = { isAuth, user, handleSignOut, handleSignIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const AuthContext = useContext();
export default AuthContextProvider;
