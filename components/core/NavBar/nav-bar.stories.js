import React from "react"
import { Container } from "@rent_avail/layout"
import NavBar from "./index"

export default {
  title: "Components/NavBar",
}

export function Default() {
  const links = [
    { text: "Overview", href: "#overview" },
    { text: "Features", href: "#features" },
    { text: "Use cases", href: "#use-cases" },
    { text: "Pricing", href: "#pricing", push: true },
    {
      text: "Create account",
      href: "https://www.avail.co/users/new",
      primary: true,
      push: true,
    },
  ]
  return (
    <Container px="0" maxWidth="96rem">
      <NavBar links={links} />
    </Container>
  )
}
