import React from "react"

import { HowItWorks } from "components/organisms/HowItWorks"
import RichText from "components/partials/SliceZone/components/RichText"
import Image from "next/image"

import { CONTAINER_WIDTHS } from "config"

const SECTIONS = [
  {
    image: {
      url: "/feature_overview_pages/simply_life.png",
      alt: "Reduce redundancy",
      width: 540,
      height: 311,
    },
    title: "Simplify Life as a Landlord",
    description:
      "We help you find, screen and keep tenants to free up valuable time.",
  },
  {
    image: {
      url: "/feature_overview_pages/landlord_feature_landing.png",
      alt: "Simply renting",
      width: 540,
      height: 346,
    },
    title: "Easily Connect with Tenants",
    description:
      "Streamline communication with your renters for payments, maintenance requests and more.",
  },
  {
    image: {
      url: "/feature_overview_pages/confident_professional_landlord.png",
      alt: "Improve credit",
      width: 540,
      height: 311,
    },
    title: "Be a Confident and Professional Landlord",
    description:
      "Learn how to be a better landlord through an extensive set of tools, resources and education.",
  },
]

const TenantFeaturesHowItWorks = (props) => {
  const sections = SECTIONS.map(({ image, title, description }) => ({
    uid: title,
    image: (
      <Image
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
    ),
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
