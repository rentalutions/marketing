import React from "react"
import { Container } from "@rent_avail/layout"
import EmailCapture from "components/molecules/EmailCapture"
import RichText from "components/partials/SliceZone/components/RichText"
import Anchor from "components/elements/Anchor"
import { CONTAINER_WIDTHS, H3_SIZING } from "config"
import { useUrlResolver } from "components/partials/UrlResolver"

const EmailCaptureSlice = ({ slice }) => {
  const urlResolver = useUrlResolver()
  const {
    primary: { title, hash, label, buttonText },
  } = slice
  return (
    <Container maxWidth={CONTAINER_WIDTHS} my="6rem">
      {hash && <Anchor hash={hash} />}
      <Container maxWidth="66rem" px="0">
        <RichText
          my="2.5rem"
          textAlign={["left", "center"]}
          color="blue_500"
          render={title}
          heading
          {...H3_SIZING}
        />
        <EmailCapture
          inputLabel={label}
          buttonText={buttonText}
          buttonUrl={urlResolver("https://www.avail.co/users/new")}
          queryParamName="email"
        />
      </Container>
    </Container>
  )
}

export default EmailCaptureSlice
