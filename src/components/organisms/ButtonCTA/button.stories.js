import React from "react"
import { Box } from "@rent_avail/layout"
import { ButtonCTA } from "./index"

export default { title: "Components/Testimonials" }

export function Default() {
  return (
    <ButtonCTA
      title={<Box as="h1">Button CTA Title</Box>}
      buttonText="Button"
      position="left"
    />
  )
}

export function Top() {
  return (
    <ButtonCTA
      title={<Box as="h1">Button CTA Title</Box>}
      buttonText="Button"
      position="top"
    />
  )
}

export function Right() {
  return (
    <ButtonCTA
      title={<Box as="h1">Button CTA Title</Box>}
      buttonText="Button"
      position="right"
    />
  )
}

export function Bottom() {
  return (
    <ButtonCTA
      title={<Box as="h1">Button CTA Title</Box>}
      buttonText="Button"
      position="bottom"
    />
  )
}
