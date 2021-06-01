import React from "react"
import { CONTAINER_WIDTHS } from "config"
import { useTheme } from "styled-components"
import PageNavBar from "components/partials/PageNavBar"

const primaryButton = {
  text: "Sign up",
  link: {
    url: "https://www.avail.co/users/new",
    target: "_blank",
  },
}

const secondaryButton = {
  text: "Log In",
  link: {
    url: "https://www.avail.co/login",
    target: "_blank",
  },
}

const links = [
  {
    text: "Pricing",
    href: "/pricing",
  },
  {
    text: "Landlords",
    href: "/landlords/features",
  },
  {
    text: "Tenants",
    href: "/tenants/features",
  },
]

export default function StaticNavBar() {
  const { colors } = useTheme()

  return (
    <PageNavBar
      borderBottom={`1px solid ${colors.ui_500}`}
      containerWidth={CONTAINER_WIDTHS}
      type="Avail"
      sticky
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      links={links}
    />
  )
}
