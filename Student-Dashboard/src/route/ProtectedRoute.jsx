import { useContext } from "react";
import {AuthContext} from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({children}){
    const{user} = useContext(AuthContext);

    if(!user){
        return <Navigate to ="/"/>
    }
    return children;
}

// user exist-> user=admin and dashboard allow