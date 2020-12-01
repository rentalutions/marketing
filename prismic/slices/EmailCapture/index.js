import React from "react"
import { Container } from "@rent_avail/layout"
import EmailCapture from "components/core/EmailCapture"
import RichText from "prismic/components/RichText"
import { availContainerWidth } from "lib/config"
import Anchor from "prismic/components/Anchor"

const EmailCaptureSlice = ({ slice }) => {
  const {
    primary: { title, hash, label, buttonText },
  } = slice
  return (
    <Container maxWidth={availContainerWidth} my="6rem">
      {hash && <Anchor hash={hash} />}
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
