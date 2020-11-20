import React from "react"
import { Container } from "@rent_avail/layout"
import EmailCapture from "components/core/EmailCapture"
import RichText from "components/prismic/RichText"
import { availContainerWidth } from "lib/config"

const EmailCaptureSlice = ({ slice }) => {
  const {
    primary: { title, label, buttonText },
  } = slice
  return (
    <Container maxWidth={availContainerWidth} my="6rem">
      <Container maxWidth="66rem" px="0">
        <RichText
          my="2.5rem"
          textAlign={["left", "center"]}
          fontSize="3rem"
          color="blue_500"
          render={title}
          heading
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
