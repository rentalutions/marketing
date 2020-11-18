import React from "react"
import NavBar from "components/core/NavBar"
import { useTheme } from "styled-components"

const NavBarSlice = ({ slice }) => {
  const { colors } = useTheme()
  const {
    primary: { sticky },
  } = slice
  const links = slice.items.map(
    ({ buttonText, buttonLink, buttonHash, primary, push, breakpoint }) => ({
      text: buttonText,
      href: buttonHash ? `#${buttonHash.replace(/^#/, "")}` : buttonLink.url,
      primary,
      push,
      breakpoint,
    })
  )
  return (
    <NavBar
      links={links}
      sticky={sticky}
      borderBottom={sticky ? `1px solid ${colors.ui_500}` : "none"}
    />
  )
}

export default NavBarSlice
