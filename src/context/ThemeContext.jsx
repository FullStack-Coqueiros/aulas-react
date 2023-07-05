import { createContext, useState } from "react";

// Crio o contexto
export const ThemeContext = createContext()

// Agora crio o provider
// Ele recebe filhos como "props" e os renderiza
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}