import React from "react"
import { NextSeo } from "next-seo"
import { useTheme } from "styled-components"

import { Box } from "@rent_avail/layout"

import NavBar from "components/organisms/NavBar"
import AvailFooter from "components/partials/AvailFooter"

import { CONTAINER_WIDTHS } from "config"

import HomeHero from "./components/home-hero"
import HomeHowItWorks from "./components/home-how-it-works"
import HomeTestimonials from "./components/home-testimonials"
import HomeShowcase from "./components/home-showcase"
import HomeEmailCapture from "./components/home-email-capture"

const primaryButton = {
  text: "Try Now",
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
    target: "_blank",
  },
  {
    text: "Features",
    href: "/tenants/features",
    target: "_blank",
  },
  {
    text: "Use Cases",
    href: "#use-cases",
    target: "_self",
  },
]

const TenantFeatures = () => {
  const title = "Tenant Features | Avail"
  const description = ""
  const url = "http://info.avail.co/tenants/features"

  const { colors } = useTheme()

  return (
    <React.Fragment>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
        }}
      />
      <NavBar
        borderBottom={`1px solid ${colors.ui_500}`}
        containerWidth={CONTAINER_WIDTHS}
        type="Avail"
        sticky
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
        links={links}
      />
      <Box bg="ui_300" pb="18rem">
        <HomeHero mb="20rem" />
        <HomeHowItWorks id="use-cases" />
        <HomeTestimonials />
        <HomeShowcase mt={8} />
        <HomeEmailCapture mt={8} />
      </Box>
      <AvailFooter />
    </React.Fragment>
  )
}

export default TenantFeatures
