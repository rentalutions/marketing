import React, { useMemo, useRef } from "react"

import Button from "components/elements/Button"
import { Hero } from "components/organisms/Hero"
import RichText from "components/partials/SliceZone/components/RichText"
import Link from "components/partials/SliceZone/components/Link"

import { CONTAINER_WIDTHS } from "config"

const HERO_PROPS = {
  title: "An Online Portal to Make Renting Easy",
  description:
    "The Avail resident portal gives you 24-hour access to pay rent, submit maintenance requests, improve your credit, and much more. Renting has never been so easy.",
  image: {
    url: "/tenants/features/hero.png",
    alt: "Tenant hero",
  },
}

const TenantFeaturesHero = () => {
  return (
    <Hero
      title={
        <RichText
          render={[
            {
              text: HERO_PROPS.title,
              type: "heading1",
              spans: [],
            },
          ]}
        />
      }
      description={
        <RichText
          sx={{ color: "blue_500" }}
          render={[
            {
              text: HERO_PROPS.description,
              type: "paragraph",
              spans: [],
            },
          ]}
        />
      }
      containerWidth={CONTAINER_WIDTHS}
      bg="green_100"
      skew="left"
      stretch
      imagePosition="right"
      image={{
        ...HERO_PROPS.image,
        props: { maxWidth: ["100%", "100%", "100%", "160%"] },
      }}
      overflow="hidden"
      color="blue_900"
      primaryLink={
        <Link
          link={{
            url: "https://www.avail.co/users/new",
          }}
        >
          <Button forwardedAs="a" variant="primary">
            Join Today
          </Button>
        </Link>
      }
    />
  )
}

export default TenantFeaturesHero
