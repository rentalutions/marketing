import React from "react"
import { Box } from "@rent_avail/layout"
import { EmailCapture } from "./index"

export default { title: "Components/EmailCapture" }

export function Default() {
  return (
    <EmailCapture
      title={<Box as="h1">Your first unit is always FREE</Box>}
      label="Enter your email"
      buttonText="Join Today"
    />
  )
}

export function WithoutTitle() {
  return (
    <EmailCapture
      label="Your first unit is always FREE"
      buttonText="Join Today"
    />
  )
}

