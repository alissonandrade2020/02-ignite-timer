import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Moon, Scroll, Sun, Timer } from 'phosphor-react'

import { ThemeContext } from '../../App'

import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  const { toogleTheme, theme } = useContext(ThemeContext)

  function handleToogleTheme() {
    toogleTheme()
  }

  return (
    <HeaderContainer>
      <div>
        <img src={logoIgnite} alt="" />

        <button onClick={toogleTheme}>
          {theme === 'default' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
