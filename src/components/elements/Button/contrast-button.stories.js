import React from "react"
import { Container, Box, Stack } from "@rent_avail/layout"
import Button from "./index"

export default {
  title: "Components/ContrastButton",
}

export function Default() {
  return (
    <Box bg="blue_500" py="10rem">
      <Container>
        <Stack direction={["row"]}>
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
        </Stack>
      </Container>
    </Box>
  )
}
