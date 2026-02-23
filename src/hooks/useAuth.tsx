"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export type UserRole = "buyer" | "seller" | "admin" | "expert";

interface AuthContextType {
    role: UserRole | null;
    isAuthenticated: boolean;
    login: (role: UserRole) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const [role, setRole] = useState<UserRole | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isClientAuthLoaded, setIsClientAuthLoaded] = useState(false);

    useEffect(() => {
        // Check localStorage on component mount
        const storedRole = localStorage.getItem("kalika_krisi_role") as UserRole | null;
        if (storedRole) {
            setRole(storedRole);
            setIsAuthenticated(true);
        }
        setIsClientAuthLoaded(true);
    }, []);

    const login = (newRole: UserRole) => {
        setRole(newRole);
        setIsAuthenticated(true);
        localStorage.setItem("kalika_krisi_role", newRole);

        if (newRole === "seller") navigate("/inventory");
        else if (newRole === "admin") navigate("/dashboard");
        else if (newRole === "expert") navigate("/consultations");
        else navigate("/");
    };

    const logout = () => {
        setRole(null);
        setIsAuthenticated(false);
        localStorage.removeItem("kalika_krisi_role");
        navigate("/login");
    };

    if (!isClientAuthLoaded) {
        return null; // prevent hydration mismatch
    }

    return (
        <AuthContext.Provider value={{ role, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
