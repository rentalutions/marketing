import React from "react"

import { HowItWorks } from "components/organisms/HowItWorks"
import RichText from "components/partials/SliceZone/components/RichText"

import { CONTAINER_WIDTHS } from "config"

const SECTIONS = [
  {
    image: {
      url: "/feature_overview_pages/simply_life.png",
      alt: "Reduce redundancy",
    },
    title: "Simplify Life as a Landlord",
    description:
      "We help you find, screen and keep tenants to free up valuable time.",
  },
  {
    image: {
      url: "/feature_overview_pages/landlord_feature_landing.png",
      alt: "Simply renting",
    },
    title: "Easily Connect with Tenants",
    description:
      "Streamline communication with your renters for payments, maintenance requests and more.",
  },
  {
    image: {
      url: "/feature_overview_pages/confident_professional_landlord.png",
      alt: "Improve credit",
    },
    title: "Be a Confident and Professional Landlord",
    description:
      "Learn how to be a better landlord through an extensive set of tools, resources and education.",
  },
]

const TenantFeaturesHowItWorks = (props) => {
  const sections = SECTIONS.map(({ image, title, description }) => ({
    uid: title,
    image,
    copy: (
      <RichText
        sx={{ color: "blue_700" }}
        render={[
          {
            text: title,
            type: "heading3",
            spans: [],
          },
          {
            text: description,
            type: "paragraph",
            spans: [],
          },
        ]}
      />
    ),
  }))
  return (
    <HowItWorks
      {...props}
      containerWidth={CONTAINER_WIDTHS}
      sections={sections}
    />
  )
}

export default TenantFeaturesHowItWorks
