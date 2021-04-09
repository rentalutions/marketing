import React from "react"
import { NextSeo } from "next-seo"
import { useTheme } from "styled-components"

import { Box } from "@rent_avail/layout"

import NavBar from "components/organisms/NavBar"
import AvailFooter from "components/partials/AvailFooter"

import { CONTAINER_WIDTHS } from "config"

import TenantFeaturesHero from "./components/tenants-features-hero"
import TenantFeaturesCards from "./components/tenants-features-cards"
import TenantFeaturesHowItWorks from "./components/tenants-features-how-it-works"
import TenantFeaturesTestimonials from "./components/tenants-features-testimonials"
import TenantFeaturesEmailCapture from "./components/tenants-features-email-capture"

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
    href: "/info/pricing",
    target: "_blank",
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
        <TenantFeaturesHero primaryButtonLink={primaryButton?.link} />
        <TenantFeaturesCards mt={3} />
        <TenantFeaturesHowItWorks mt={3} py={6} />
        <TenantFeaturesTestimonials mt={6} />
        <TenantFeaturesEmailCapture mt={4} />
      </Box>
      <AvailFooter />
    </React.Fragment>
  )
}

export default TenantFeatures
