import React from "react"

import { Box } from "@rent_avail/layout"

import StaticBasePage from "components/static/StaticBasePage"
import TenantFeaturesHero from "./components/tenants-features-hero"
import TenantFeaturesCards from "./components/tenants-features-cards"
import TenantFeaturesHowItWorks from "./components/tenants-features-how-it-works"
import TenantFeaturesTestimonials from "./components/tenants-features-testimonials"
import TenantFeaturesEmailCapture from "./components/tenants-features-email-capture"

const TenantFeatures = () => {
  return (
    <StaticBasePage
      title="Tenant Features | Avail"
      description=""
      url="https://www.avail.co/tenants/features"
    >
      <Box bg="ui_300" pb="18rem">
        <TenantFeaturesHero />
        <TenantFeaturesCards mt={3} />
        <TenantFeaturesHowItWorks mt={3} py={6} />
        <TenantFeaturesTestimonials mt={6} />
        <TenantFeaturesEmailCapture mt={4} />
      </Box>
    </StaticBasePage>
  )
}

export default TenantFeatures
