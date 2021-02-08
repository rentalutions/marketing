import React from "react"
import { Container, Box } from "@rent_avail/layout"
import EmailCaptureInput from "./index"

export default {
  title: "Components/EmailCaptureInput",
}

export function Default() {
  return (
    <Box>
      <Container py="10rem">
        <EmailCaptureInput
          inputLabel="Enter your email"
          buttonText="Get started"
        />
      </Container>
    </Box>
  )
}

export function WithDarkBg() {
  return (
    <Box bg="blue_500">
      <Container py="10rem">
        <EmailCaptureInput
          background="blue_500"
          inputLabel="Enter your email"
          buttonText="Get started"
          buttonUrl="https://www.avail.co/users/new"
          queryParamName="email"
        />
      </Container>
    </Box>
  )
}
