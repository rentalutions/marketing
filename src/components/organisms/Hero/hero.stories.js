import React from "react"
import { Text } from "@rent_avail/typography"
import { Button } from "@rent_avail/controls"
import Link from "next/link"
import { Box } from "@rent_avail/layout"
import ResponsiveEmbed from "components/elements/ResponsiveEmbed"
import { Hero } from "./index"

export default { title: "Components/Hero" }

export function Default() {
  return (
    <Hero
      title={<Box as="h1">Hero Title</Box>}
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
      image={{
        url: "https://avail-design-site.now.sh/images/building.svg",
        alt: "",
      }}
      title={
        <Box as="h1">Feel good about the way you manage your rentals.</Box>
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
        <Box as="h1">
          Publish your listing to over a dozen top rental sites all at once.
        </Box>
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
      image={{
        url: "https://avail-design-site.now.sh/images/building.svg",
        alt: "",
      }}
      imagePosition="left"
      title={
        <Box as="h1">Feel good about the way you manage your rentals.</Box>
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

export function WithVideo() {
  return (
    <Hero
      skew="left"
      title={
        <Box as="h1">
          Publish your listing to over a dozen top rental sites all at once.
        </Box>
      }
      description={
        <Text>
          Find qualified tenants without the hassle. Receive an average of 18
          inquiries within 2 weeks and respond from one place.
        </Text>
      }
      bg="blue_100"
      video={{
        url: "/media/sample-video.mp4",
      }}
    />
  )
}

export function WithEmbed() {
  return (
    <Hero
      skew="left"
      title={
        <Box as="h1">
          Publish your listing to over a dozen top rental sites all at once.
        </Box>
      }
      description={
        <Text>
          Find qualified tenants without the hassle. Receive an average of 18
          inquiries within 2 weeks and respond from one place.
        </Text>
      }
      bg="blue_100"
      embed={
        <ResponsiveEmbed aspect={{ width: 200, height: 113 }}>
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe
            width="200"
            height="113"
            src="https://www.youtube.com/embed/RMMatpUtmZo?feature=oembed"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </ResponsiveEmbed>
      }
    />
  )
}
