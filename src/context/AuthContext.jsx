import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})

    const login = (userData) => {
        if (!userData) {
            return;
        }
        setIsLoggedIn(true)
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("jwt")
        setIsLoggedIn(false)
        setUser(null)
    }

    /** AVANÇADO */
    // Verificar se já existe um estado de autenticação armazenado no localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
            setUser(JSON.parse(storedUser))
            setIsLoggedIn(true)
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}