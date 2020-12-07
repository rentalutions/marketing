import React from "react"
import { Container, Box, Stack } from "@rent_avail/layout"
import { ContrastButton, ContrastButtonPrimary } from "./index"

export default {
  title: "Components/ContrastButton",
}

export function Default() {
  return (
    <Box bg="blue_500" py="10rem">
      <Container>
        <Stack direction={["row"]}>
          <ContrastButton>Default</ContrastButton>
          <ContrastButtonPrimary>Primary</ContrastButtonPrimary>
        </Stack>
      </Container>
    </Box>
  )
}
