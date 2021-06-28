import React from "react"
import { Container, Box } from "@rent_avail/layout"
import EmailCapture from "./index"

export default {
  title: "Components/EmailCapture",
}

export function Default() {
  return (
    <Box>
      <Container py="10rem">
        <EmailCapture
          title={<Box as="h1">Email Capture</Box>}
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
        <EmailCapture
          title={
            <Box as="h1" color="ui_300">
              Email Capture
            </Box>
          }
          inputLabel="Enter your email"
          buttonText="Get started"
          buttonUrl="https://www.avail.co/users/new"
          queryParamName="email"
          containerBg="blue_500"
        />
      </Container>
    </Box>
  )
}
