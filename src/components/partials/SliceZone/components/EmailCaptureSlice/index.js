import React from "react"
import { Container } from "@rent_avail/layout"
import EmailCapture from "components/organisms/EmailCapture"
import RichText from "components/partials/SliceZone/components/RichText"
import Anchor from "components/elements/Anchor"
import { CONTAINER_WIDTHS } from "config"
import { useUrlResolver } from "components/partials/UrlResolver"
import { useUID } from "react-uid"
import { analyticsVar, useAnalytics } from "utils/analytics"
import { useReactiveVar } from "@apollo/client"

const EmailCaptureSlice = ({ slice }) => {
  const {
    primary: { title, hash, label, buttonText },
  } = slice

  const urlResolver = useUrlResolver()
  const inputLabelId = useUID()
  const analyticsParams = useReactiveVar(analyticsVar)
  const { identify } = useAnalytics(analyticsParams)

  const handleSubmit = (values) => identify(values)

  const captureRedirectUrl = `${
    process.env.NEXT_PUBLIC_AVAIL_BASE_URL || "https://www.avail.co"
  }/users/new`

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
          queryParamName="email"
          analyticsParamName="Email"
          onSubmit={handleSubmit}
        />
      </Container>
    </Container>
  )
}

export default EmailCaptureSlice
