import React from "react"
import { Hero } from "../Hero"
import { Heading, Text } from "@rent_avail/typography"

export default { title: "Hero" }

export function Default() {
  return (
    <Hero
      title={<Heading as="h1">Hero Title</Heading>}
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel unde velit maxime officia temporibus, esse repellat explicabo, atque maiores beatae eius illo. Non esse eius dolores rem in culpa!"
    />
  )
}

export function WithIllustration() {
  return (
    <Hero
      color="ui_100"
      bg="#0f3e6f"
      image="https://avail-design-site.now.sh/images/building.svg"
      title={
        <Heading as="h1">
          Feel good about the way you manage your rentals.
        </Heading>
      }
      description="Find tenants, view credit history, sign leases, and collect rent — on any device, with tools built specifically for DIY landlords."
    />
  )
}

export function WithBgColor() {
  return (
    <Hero
      skew="left"
      title={
        <Heading as="h1">
          Publish your listing to over a dozen top rental sites all at once.
        </Heading>
      }
      description="Find qualified tenants without the hassle. Receive an average of 18 inquiries within 2 weeks and respond from one place."
      bg="#e9edf1"
      primaryLink={{ url: "https://avail.co", text: "Get Started" }}
      secondaryLink={{ url: "https://avail.co/learn-more", text: "Learn More" }}
    />
  )
}
