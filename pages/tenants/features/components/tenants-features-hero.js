import React, { useMemo, useRef } from "react"

import Button from "components/elements/Button"
import { Hero } from "components/organisms/Hero"
import RichText from "components/partials/SliceZone/components/RichText"
import Link from "components/partials/SliceZone/components/Link"

import { CONTAINER_WIDTHS } from "config"
import Image from "next/image"

const HERO_PROPS = {
  title: "An Online Portal to Make Renting Easy",
  description:
    "The Avail resident portal gives you 24-hour access to pay rent, submit maintenance requests, improve your credit, and much more. Renting has never been so easy.",
  image: {
    url: "/tenants/features/hero.png",
    alt: "Tenant hero",
    width: 581,
    height: 413,
  },
}

const TenantFeaturesHero = () => {
  const { title, description, image } = HERO_PROPS
  return (
    <Hero
      title={
        <RichText
          render={[
            {
              text: title,
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
              text: description,
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
      image={
        <Image
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      }
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
