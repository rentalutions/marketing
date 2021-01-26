import React from "react"
import { Container } from "@rent_avail/layout"
import EmailCapture from "components/organisms/EmailCapture"
import RichText from "components/partials/SliceZone/components/RichText"
import Anchor from "components/elements/Anchor"
import { CONTAINER_WIDTHS, STYLING } from "config"
import { useUrlResolver } from "components/partials/UrlResolver"
import { useUID } from "react-uid"

const EmailCaptureSlice = ({ slice }) => {
  const urlResolver = useUrlResolver()
  const {
    primary: { title, hash, label, buttonText },
  } = slice
  const inputLabelId = useUID()
  return (
    <Container maxWidth={CONTAINER_WIDTHS} my="6rem">
      {hash && <Anchor hash={hash} />}
      <Container maxWidth="66rem" px="0">
        <RichText
          my="2.5rem"
          textAlign={["left", "center"]}
          color="blue_500"
          render={title}
          sx={{ ...STYLING.title }}
        />
        <EmailCapture
          inputLabel={label}
          inputLabelId={inputLabelId}
          buttonText={buttonText}
          buttonUrl={urlResolver("https://www.avail.co/users/new")}
          queryParamName="email"
        />
      </Container>
    </Container>
  )
}

export default EmailCaptureSlice
