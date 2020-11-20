import React from "react"
import { Container } from "@rent_avail/layout"
import EmailCapture from "components/core/EmailCapture"
import Heading from "components/prismic/Heading"
import { availContainerWidth } from "../../lib/config"

const EmailCaptureSlice = ({ slice }) => {
  const {
    primary: {
      title: [title],
      label,
      buttonText,
    },
  } = slice
  return (
    <Container maxWidth={availContainerWidth} my="6rem">
      <Container maxWidth="66rem" px="0">
        <Heading
          my="2.5rem"
          textAlign={["left", "center"]}
          fontSize="3rem"
          color="blue_500"
          render={title}
        />
        <EmailCapture
          inputLabel={label}
          buttonText={buttonText}
          buttonUrl="https://www.avail.co/users/new"
          queryParamName="email"
        />
      </Container>
    </Container>
  )
}

export default EmailCaptureSlice
