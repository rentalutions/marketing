import React from "react"
import Anchor from "components/elements/Anchor"
import { EmailCapture } from "components/organisms/EmailCapture"
import RichText from "components/partials/SliceZone/components/RichText"
import { CONTAINER_WIDTHS } from "config"

const EmailCaptureSlice = ({ slice }) => {
  const {
    primary: { title, hash, label, buttonText },
  } = slice
  
  return (
    <EmailCapture
      containerWidth={CONTAINER_WIDTHS}
      hash={hash && <Anchor hash={hash} />}
      title={title && <RichText render={title} />}
      label={label}
      buttonText={buttonText}
    />
  )
}

export default EmailCaptureSlice
