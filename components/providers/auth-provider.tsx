"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface User {
    email: string
    name: string
}

interface AuthContextType {
    user: User | null
    login: (email: string, password: string) => Promise<boolean>
    logout: () => void
    loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)


const MOCK_USER = {
    email: "magicuentosco@gmail.com",
    password: "Magic2026$$$",
    name: "Admin User",
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        // Simular verificar sesión al cargar
        const storedUser = localStorage.getItem("auth_user")
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser))
            } catch (e) {
                console.error("Error parsing auth user", e)
                localStorage.removeItem("auth_user")
            }
        }
        setLoading(false)
    }, [])

    const login = async (email: string, password: string): Promise<boolean> => {
        // Simular delay de red
        await new Promise((resolve) => setTimeout(resolve, 1000))

        if (email === MOCK_USER.email && password === MOCK_USER.password) {
            const userData = { email: MOCK_USER.email, name: MOCK_USER.name }
            setUser(userData)
            localStorage.setItem("auth_user", JSON.stringify(userData))
            return true
        }
        return false
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("auth_user")
        router.push("/auth")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
