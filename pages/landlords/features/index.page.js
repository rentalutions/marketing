import React from "react"
import { NextSeo } from "next-seo"
import { useTheme } from "styled-components"

import { Box } from "@rent_avail/layout"

import NavBar from "components/organisms/NavBar"
import AvailFooter from "components/partials/AvailFooter"

import { CONTAINER_WIDTHS } from "config"

import LandlordsFeaturesHero from "./components/landlords-features-hero"
import LandlordsFeaturesCards from "./components/landlords-features-cards"
import LandlordsFeaturesHowItWorks from "./components/landlords-features-how-it-works"
import LandlordsFeaturesTestimonials from "./components/landlords-features-testimonials"
import LandlordsFeaturesEmailCapture from "./components/landlords-features-email-capture"

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
  {
    text: "For Tenants",
    href: "/tenants/features",
    target: "_blank",
  },
]

const LandlordsFeatures = () => {
  const title = "Landlords Features | Avail"
  const description = ""
  const url = "http://info.avail.co/landlords/features"

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
        <LandlordsFeaturesHero primaryButtonLink={primaryButton?.link} />
        <LandlordsFeaturesCards mt={3} />
        <LandlordsFeaturesHowItWorks mt={3} py={6} />
        <LandlordsFeaturesTestimonials mt={6} />
        <LandlordsFeaturesEmailCapture mt={4} />
      </Box>
      <AvailFooter />
    </React.Fragment>
  )
}

export default LandlordsFeatures
