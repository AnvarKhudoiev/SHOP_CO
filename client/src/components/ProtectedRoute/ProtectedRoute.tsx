import { useSelector } from "react-redux";
import { type RootState } from "@/store";
import { Navigate } from "react-router-dom";
import type { JSX } from "react";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const token = useSelector((state: RootState) => state.auth.token);
    console.log(token)
    if (!token) {
        console.log(token)
        return <Navigate to="/login" replace />
    };

    return children;
};