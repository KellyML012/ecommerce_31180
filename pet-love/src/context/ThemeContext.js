import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [darkTheme, SetDarkTheme] = useState(false)

    const handleTheme = () => {
        SetDarkTheme(!darkTheme)
    }

    const data = {
        darkTheme,
        handleTheme
    }

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext }
export default ThemeProvider