import React, { useState, useEffect } from "react"

import { Home } from "styled-icons/fa-solid/Home"
import { Search } from "styled-icons/fa-solid/Search"
import { ArrowUp as Arrow } from "styled-icons/fa-solid/ArrowUp"
import { ColorLens } from "styled-icons/material/ColorLens"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { ThList as List } from "styled-icons/fa-solid/ThList"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isBlueMode = theme === "blue"
  const isGreenMode = theme === "green"
  const isLightMode = theme === "light"

  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          cover
          direction="right"
          bg="var(--background)"
          duration={0.6}
          to="/"
          title="Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          cover
          direction="right"
          bg="var(--background)"
          duration={0.6}
          to="/search/"
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(
              isBlueMode
                ? "green"
                : isGreenMode
                ? "light"
                : isLightMode
                ? "blue"
                : "blue"
            )
          }}
          className={theme}
        >
          <ColorLens />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
