import React from "react"

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
      description="Avail makes renting easier. Pay rent, submit maintenance requests, boost your credit score, and manage all of your renting tasks online."
      url="https://www.avail.co/tenants/features"
      background="ui_300"
    >
      <TenantFeaturesHero />
      <TenantFeaturesCards my={6} />
      <TenantFeaturesHowItWorks my={6} py={6} />
      <TenantFeaturesTestimonials my={6} />
      <TenantFeaturesEmailCapture my={6} />
    </StaticBasePage>
  )
}

export default TenantFeatures
