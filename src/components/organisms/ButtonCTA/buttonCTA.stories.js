import React from "react"
import { Box } from "@rent_avail/layout"
import Button from "components/elements/Button"
import { ButtonCTA } from "./index"

export default { title: "Components/ButtonCTA" }

export function Default() {
  return (
    <ButtonCTA
      title={<Box as="h1">Button CTA Title</Box>}
      button={
        <Button as="a" variant="primary" href="https://avail.co">
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
        <Button as="a" variant="primary" href="https://avail.co">
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
      title={<Box as="h1">Right Button CTA Title</Box>}
      button={
        <Button as="a" variant="primary" href="https://avail.co">
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
        <Button as="a" variant="primary" href="https://avail.co">
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
        <Button as="a" variant="primary" href="https://avail.co">
          Lonely Button
        </Button>
      }
      orientation="left"
    />
  )
}

export function NoButton() {
  return <ButtonCTA title={<Box as="h1">Lonely Button CTA Title</Box>} />
}
