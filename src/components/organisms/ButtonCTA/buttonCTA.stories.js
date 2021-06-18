import React from "react"
import { Box } from "@rent_avail/layout"
import Button from "components/elements/Button"
import { ButtonCTA } from "./index"

export default { title: "Components/CTA" }

export function Default() {
  return (
    <ButtonCTA
      title={<Box as="h1">CTA Title</Box>}
      description={<Box as="p">CTA Description</Box>}
      button={
        <Button forwardedAs="a" variant="primary" href="https://avail.co">
          Button
        </Button>
      }
      orientation="left"
    />
  )
}

export function Top() {
  return (
    <ButtonCTA
      title={<Box as="h1">🔝 CTA Title</Box>}
      button={
        <Button forwardedAs="a" variant="primary" href="https://avail.co">
          Button
        </Button>
      }
      orientation="top"
    />
  )
}

export function Right() {
  return (
    <ButtonCTA
      title={<Box as="h1">Right CTA Title</Box>}
      description={<Box as="p">Right CTA Description</Box>}
      button={
        <Button forwardedAs="a" variant="primary" href="https://avail.co">
          Right?
        </Button>
      }
      orientation="right"
    />
  )
}

export function Bottom() {
  return (
    <ButtonCTA
      title={<Box as="h1">Bottom CTA Title</Box>}
      button={
        <Button forwardedAs="a" variant="primary" href="https://avail.co">
          Bottom?
        </Button>
      }
      orientation="bottom"
    />
  )
}

export function NoTitle() {
  return (
    <ButtonCTA
      button={
        <Button forwardedAs="a" variant="primary" href="https://avail.co">
          Lonely Button
        </Button>
      }
      orientation="left"
    />
  )
}

export function NoButton() {
  return <ButtonCTA title={<Box as="h1">Lonely CTA Title</Box>} />
}

export function LeftImage() {
  return (
    <ButtonCTA
      title={<Box as="h1">Left Image Right CTA Title</Box>}
      image={<img src="/logo-wordmark.svg" alt="" width="100%" />}
      orientation="right"
    />
  )
}

export function RightImage() {
  return (
    <ButtonCTA
      title={<Box as="h1">Right Image Left CTA Title</Box>}
      image={<img src="/logo-wordmark.svg" alt="" width="100%" />}
      orientation="left"
    />
  )
}

export function BottomImage() {
  return (
    <ButtonCTA
      title={
        <Box as="h1">
          Why online rental applications protect your investment
        </Box>
      }
      description={
        <Box as="p">
          Knowing an applicants financial and rental history can help you make
          the best decision when choosing your next renter. We’ve crafted an
          application that gives you all the data you need, while being painless
          for your tenants to fill out.
        </Box>
      }
      image={
        <img src="/storybook/science_applications.png" alt="" width="100%" />
      }
      orientation="top"
    />
  )
}

export function TopImage() {
  return (
    <ButtonCTA
      title={<Box as="h1">Top Image Bottom CTA Title</Box>}
      image={<img src="/logo-wordmark.svg" alt="" width="100%" />}
      orientation="bottom"
    />
  )
}
