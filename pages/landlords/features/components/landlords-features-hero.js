import React from "react"

import Button from "components/elements/Button"
import { Hero } from "components/organisms/Hero"
import RichText from "components/partials/SliceZone/components/RichText"
import Link from "components/partials/SliceZone/components/Link"
import Image from "next/image"

import { CONTAINER_WIDTHS } from "config"

const HERO_PROPS = {
  title: "Manage Your Rental Property With Ease",
  description:
    "Simplify how you find, screen, and manage your tenants with our software. You’ll gain access to our complete set of tools, guidance, and best-in-class educational content to help you be a confident and professional landlord whether you have one unit or 10.",
  image: {
    url: "/landlord_hero.png",
    alt: "Landlords hero",
    width: 648,
    height: 792,
  },
}

const TenantFeaturesHero = () => {
  const { title, description, image } = HERO_PROPS
  return (
    <Hero
      title={
        <RichText
          sx={{ color: "ui_300" }}
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
          sx={{ color: "ui_300" }}
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
      bg="blue_500"
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
            Try It For Free
          </Button>
        </Link>
      }
    />
  )
}

export default TenantFeaturesHero
