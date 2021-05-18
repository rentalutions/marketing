import React from "react"

import Button from "components/elements/Button"
import { Hero } from "components/organisms/Hero"
import RichText from "components/partials/SliceZone/components/RichText"
import Link from "components/partials/SliceZone/components/Link"

import { CONTAINER_WIDTHS } from "config"

const HERO_PROPS = {
  title: "Manage Your Rental Property With Ease",
  description:
    "Simplify how you find, screen, and manage your tenants with our software. You’ll gain access to our complete set of tools, guidance, and best-in-class educational content to help you be a confident and professional landlord whether you have one unit or 10.",
  image: {
    url: "/landlord_hero.png",
    alt: "Landlords hero",
  },
}

const TenantFeaturesHero = () => {
  return (
    <Hero
      title={
        <RichText
          sx={{ color: "ui_300" }}
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
          sx={{ color: "ui_300" }}
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
      bg="blue_500"
      skew="left"
      stretch
      imagePosition="right"
      image={HERO_PROPS.image}
      overflow="hidden"
      color="blue_900"
      primaryLink={
        <Link
          link={{
            url: "https://www.avail.co/users/new",
          }}
        >
          <Button forwardedAs="a" variant="primary">
            Try It For Free
          </Button>
        </Link>
      }
    />
  )
}

export default TenantFeaturesHero
