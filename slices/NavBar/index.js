import React from "react"
import NavBar from "components/core/NavBar"

const NavBarSlice = ({ slice }) => {
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
  return <NavBar links={links} sticky={sticky} />
}

export default NavBarSlice
