import React from "react"

import StaticBasePage from "components/static/StaticBasePage"
import HomeHero from "./components/home-hero"
import HomeHowItWorks from "./components/home-how-it-works"
import HomeTestimonials from "./components/home-testimonials"
import HomeShowcase from "./components/home-showcase"
import HomeEmailCapture from "./components/home-email-capture"

const TenantFeatures = () => {
  return (
    <StaticBasePage
      title="Free Landlord Software: Rental Listings, Tenant Screening &amp; More | Avail"
      description="Free landlord software to help you manage your rental properties. List your rental, find and screen tenants, draft leases, collect rent online, and more."
      url="https://info.avail.co/"
      background="ui_300"
    >
      <HomeHero mb="20rem" />
      <HomeHowItWorks id="use-cases" />
      <HomeTestimonials />
      <HomeShowcase my={6} />
      <HomeEmailCapture my={6} />
    </StaticBasePage>
  )
}

export default TenantFeatures
