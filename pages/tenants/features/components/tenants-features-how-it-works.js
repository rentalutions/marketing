import React from "react"

import { HowItWorks } from "components/organisms/HowItWorks"
import RichText from "components/partials/SliceZone/components/RichText"

import { CONTAINER_WIDTHS } from "config"

const SECTIONS = [
  {
    image: {
      url: "/feature_overview_pages/reduce_redundancy.png",
      alt: "Reduce redundancy",
    },
    title: "Save Time and Streamline The Process",
    description:
      "Share your renter profile with as many landlords as you need. Your profile automatically updates with your residence history over time.",
  },
  {
    image: {
      url: "/feature_overview_pages/simply_renting.png",
      alt: "Simply renting",
    },
    title: "Simplify Everyday Renting Tasks",
    description:
      "Access to an online rental portal allows you to easily sign, set up automatic rent payments and submit a maintenance request all in one place.",
  },
  {
    image: {
      url: "/feature_overview_pages/improve_credit.png",
      alt: "Improve credit",
    },
    title: "Improve Your Credit",
    description:
      "Build credit simply by paying your rent each month. Avail reports on-time rent payments to credit bureaus.",
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
