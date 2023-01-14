import { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CyclesContextProvider } from './contexts/CyclesContext'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { lightTheme } from './styles/themes/light'

type Themes = 'default' | 'light'

interface ThemeContextType {
  theme: Themes
  toogleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

export function App() {
  const [theme, setTheme] = useState<Themes>(() => {
    const storageValue = localStorage.getItem('@ignite-timer:theme-1.0.0')

    if (storageValue) {
      return JSON.parse(storageValue)
    }

    return 'default'
  })

  function toogleTheme() {
    const themeNow = theme === 'default' ? 'light' : 'default'

    setTheme(themeNow)

    localStorage.setItem('@ignite-timer:theme-1.0.0', JSON.stringify(themeNow))
  }

  return (
    <ThemeProvider theme={theme === 'default' ? defaultTheme : lightTheme}>
      <ThemeContext.Provider value={{ theme, toogleTheme }}>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
