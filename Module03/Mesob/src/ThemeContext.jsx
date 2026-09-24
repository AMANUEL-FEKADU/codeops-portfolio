import React, { createContext, useContext, useState } from 'react'

export const ThemeContext=createContext(null)
 export function ThemeProvider({children}) {
    const [theme,setTheme]=useState('light')
    const toggle=()=>{
        setTheme(theme==='light'?'dark':'light')
    }
  
    return (
    <ThemeContext.Provider value={{theme,toggle}}>
          {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
    return useContext(ThemeContext)
}

