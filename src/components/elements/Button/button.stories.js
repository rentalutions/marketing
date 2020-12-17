import React from "react"
import { Container, Box, Stack } from "@rent_avail/layout"
import Button from "./index"

export default {
  title: "Components/Button",
}

export function Default() {
  return (
    <Box py="10rem">
      <Container>
        <Stack direction={["row"]}>
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
        </Stack>
      </Container>
    </Box>
  )
}

export function WithDarkBg() {
  const background = "blue_500"
  return (
    <Box bg={background} py="10rem">
      <Container>
        <Stack direction={["row"]}>
          <Button background={background}>Default</Button>
          <Button variant="primary" background={background}>
            Primary
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
