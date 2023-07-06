import { createContext, useState } from "react"

// Criação do contexto
export const ThemeContext = createContext()

// Componente de provider que recebe um filho
export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        console.log('Alterar Tema')
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}