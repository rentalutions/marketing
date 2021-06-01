import React from "react"

import StaticBasePage from "components/static/StaticBasePage"
import LandlordsFeaturesHero from "./components/landlords-features-hero"
import LandlordsFeaturesCards from "./components/landlords-features-cards"
import LandlordsFeaturesHowItWorks from "./components/landlords-features-how-it-works"
import LandlordsFeaturesTestimonials from "./components/landlords-features-testimonials"
import LandlordsFeaturesEmailCapture from "./components/landlords-features-email-capture"

const LandlordsFeatures = () => {
  return (
    <StaticBasePage
      title="Landlords Features | Avail"
      description="Manage your rental property with free landlord software to simplify the way you find, screen, and manage tenants."
      url="https://info.avail.co/landlords/features"
      background="ui_300"
    >
      <LandlordsFeaturesHero />
      <LandlordsFeaturesCards my={6} />
      <LandlordsFeaturesHowItWorks my={6} py={6} />
      <LandlordsFeaturesTestimonials my={6} />
      <LandlordsFeaturesEmailCapture my={6} />
    </StaticBasePage>
  )
}

export default LandlordsFeatures
