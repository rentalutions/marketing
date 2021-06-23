/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Box } from "@rent_avail/layout"
import Button from "components/elements/Button"
import { CallToAction } from "./index"

export default { title: "Components/CallToAction" }

export function Default() {
  return (
    <CallToAction
      title={<Box as="h1">Ready to get started?</Box>}
      description={<Box as="h2">Sign up for the Unlimited Plan today.</Box>}
      orientation="left"
    >
      <Button forwardedAs="a" variant="primary" href="https://avail.co">
        Start Now
      </Button>
    </CallToAction>
  )
}

export function Top() {
  return (
    <CallToAction
      title={
        <Box as="h1">
          Get your Rent Analysis Report by creating an Avail account.
        </Box>
      }
      description={
        <Box as="p">
          Sign up for your Rent Analysis Report below. You'll create an Avail
          account, add the unit you'd like to receive the report for, and you'll
          access the report instantly online. Easy as pie.
        </Box>
      }
      orientation="top"
    >
      <Button forwardedAs="a" variant="primary" href="https://avail.co">
        Set the best price
      </Button>
    </CallToAction>
  )
}

export function Right() {
  return (
    <CallToAction
      title={<Box as="h1">Ready to get started?</Box>}
      description={<Box as="p">Sign up for the Unlimited Plan today.</Box>}
      orientation="right"
    >
      <Button forwardedAs="a" variant="primary" href="https://avail.co">
        Start now
      </Button>
    </CallToAction>
  )
}

export function Bottom() {
  return (
    <CallToAction
      title={
        <Box as="h1">
          Get your Rent Analysis Report by creating an Avail account.
        </Box>
      }
      orientation="bottom"
    >
      <Button forwardedAs="a" variant="primary" href="https://avail.co">
        Set the best price
      </Button>
    </CallToAction>
  )
}

export function NoTitle() {
  return (
    <CallToAction orientation="left">
      <Button forwardedAs="a" variant="primary" href="https://avail.co">
        Get Started
      </Button>
    </CallToAction>
  )
}

export function NoButton() {
  return (
    <CallToAction title={<Box as="h1">Ready to improve your credit?</Box>} />
  )
}

export function LeftImage() {
  return (
    <CallToAction
      title={<Box as="h1">Ready to improve your credit?</Box>}
      image={<img src="/logo-wordmark.svg" alt="" width="100%" />}
      orientation="right"
    />
  )
}

export function RightImage() {
  return (
    <CallToAction
      title={<Box as="h1">Ready to improve your credit?</Box>}
      image={<img src="/logo-wordmark.svg" alt="" width="100%" />}
      orientation="left"
    />
  )
}

export function BottomImage() {
  return (
    <CallToAction
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
    <CallToAction
      title={<Box as="h1">Ready to improve your credit?</Box>}
      image={<img src="/logo-wordmark.svg" alt="" width="100%" />}
      orientation="bottom"
    />
  )
}
