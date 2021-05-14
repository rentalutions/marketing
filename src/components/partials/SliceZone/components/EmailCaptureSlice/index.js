import React from "react"
import { Container } from "@rent_avail/layout"
import EmailCapture from "components/organisms/EmailCapture"
import RichText from "components/partials/SliceZone/components/RichText"
import Anchor from "components/elements/Anchor"
import { CONTAINER_WIDTHS } from "config"
import { useUrlResolver } from "components/partials/UrlResolver"
import { useUID } from "react-uid"
import { useEmailCaptureTracking } from "utils/analytics"
import { AVAIL_BASE_URL } from "utils/env"

const EmailCaptureSlice = ({ slice }) => {
  const {
    primary: {
      title,
      hash,
      label,
      redirectUrl,
      buttonText,
      optInCopy,
      optInContext,
    },
  } = slice

  const urlResolver = useUrlResolver()
  const inputLabelId = useUID()

  const [handleSubmit] = useEmailCaptureTracking({
    Location: "Email Capture Slice",
  })

  let captureRedirectUrl
  let queryParamName

  if (redirectUrl) {
    captureRedirectUrl = redirectUrl
  } else {
    captureRedirectUrl = `${AVAIL_BASE_URL}/users/new`
    queryParamName = "email"
  }

  return (
    <Container maxWidth={CONTAINER_WIDTHS} my="6rem">
      {hash && <Anchor hash={hash} />}
      <Container maxWidth="66rem" px="0">
        <EmailCapture
          title={
            <RichText
              textAlign={["left", "center"]}
              color="blue_500"
              render={title}
            />
          }
          inputLabel={label}
          inputLabelId={inputLabelId}
          buttonText={buttonText}
          buttonUrl={urlResolver(captureRedirectUrl)}
          queryParamName={queryParamName}
          analyticsParamName="Email"
          onSubmit={handleSubmit}
          optInContext={optInContext}
          optInCopy={<RichText render={optInCopy} />}
        />
      </Container>
    </Container>
  )
}

export default EmailCaptureSlice
