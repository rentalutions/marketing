import React from "react"
import { Heading, Text } from "@rent_avail/typography"
import { Button } from "@rent_avail/controls"
import Link from "next/link"
import { Hero } from "."

export default { title: "Components/Hero" }

export function Default() {
  return (
    <Hero
      title={<Heading as="h1">Hero Title</Heading>}
      description={
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel
          unde velit maxime officia temporibus, esse repellat explicabo, atque
          maiores beatae eius illo. Non esse eius dolores rem in culpa!
        </Text>
      }
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
      description={
        <Text>
          Find tenants, view credit history, sign leases, and collect rent — on
          any device, with tools built specifically for DIY landlords.
        </Text>
      }
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
      description={
        <Text>
          Find qualified tenants without the hassle. Receive an average of 18
          inquiries within 2 weeks and respond from one place.
        </Text>
      }
      bg="blue_100"
      primaryLink={
        <Link href="https://avail.co/">
          <Button variant="primary">Get Started</Button>
        </Link>
      }
      secondaryLink={
        <Link href="https://avail.co/learn-more">
          <Button>Learn More</Button>
        </Link>
      }
    />
  )
}

export function WithSwap() {
  return (
    <Hero
      color="ui_100"
      bg="gold_700"
      image="https://avail-design-site.now.sh/images/building.svg"
      imagePosition="left"
      title={
        <Heading as="h1">
          Feel good about the way you manage your rentals.
        </Heading>
      }
      description={
        <Text>
          Find tenants, view credit history, sign leases, and collect rent — on
          any device, with tools built specifically for DIY landlords.
        </Text>
      }
      primaryLink={
        <Link href="https://avail.co/">
          <Button variant="primary">Get Started</Button>
        </Link>
      }
    />
  )
}
