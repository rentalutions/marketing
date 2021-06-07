import React from "react"

import StaticBasePage from "components/static/StaticBasePage"
import SliceZone from "components/partials/SliceZone"
import HomeHowItWorks from "./components/home-how-it-works"
import HomeTestimonials from "./components/home-testimonials"
import HomeShowcase from "./components/home-showcase"
import HomeEmailCapture from "./components/home-email-capture"
import data from "./data"

const TenantFeatures = () => {
  const {
    meta_title: title,
    meta_description: description,
    url,
    background = "ui_100",
    body: slices,
  } = data
  return (
    <StaticBasePage
      title={title}
      description={description}
      url={url}
      background={background}
    >
      <SliceZone slices={slices} />
      <HomeHowItWorks id="use-cases" />
      <HomeTestimonials />
      <HomeShowcase my={6} />
      <HomeEmailCapture my={6} />
    </StaticBasePage>
  )
}

export default TenantFeatures
