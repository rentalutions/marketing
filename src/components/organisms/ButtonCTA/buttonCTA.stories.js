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
        <a href="https://avail.co">
          <Button as="a" variant="primary">
            Button
          </Button>
        </a>
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
        <a href="https://avail.co">
          <Button as="a" variant="primary">
            Button
          </Button>
        </a>
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
        <a href="https://avail.co">
          <Button as="a" variant="primary">
            Right?
          </Button>
        </a>
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
        <a href="https://avail.co">
          <Button as="a" variant="primary">
            Bottom?
          </Button>
        </a>
      }
      orientation="bottom"
    />
  )
}

export function NoTitle() {
  return (
    <ButtonCTA
      button={
        <a href="https://avail.co">
          <Button as="a" variant="primary">
            Lonely Button
          </Button>
        </a>
      }
      orientation="left"
    />
  )
}

export function NoButton() {
  return <ButtonCTA title={<Box as="h1">Lonely Button CTA Title</Box>} />
}
