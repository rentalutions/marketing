import React from "react"
import { Box } from "@rent_avail/layout"
import RichText from "components/partials/SliceZone/components/RichText"
import { Hero } from "components/organisms/Hero"
import EmailCaptureInput from "components/molecules/EmailCaptureInput"
import { CONTAINER_WIDTHS } from "config"
import { useUrlResolver } from "components/partials/UrlResolver"
import { useUID } from "react-uid"
import { useAnalytics } from "utils/analytics"
import { AVAIL_BASE_URL } from "utils/env"
import Embed from "../Embed"

const HeroWithEmailCaptureSlice = ({ slice }) => {
  const {
    primary: {
      title,
      description,
      background,
      skew,
      stretch,
      image,
      imagePosition,
      video,
      embed,
      color,
      emailCaptureLabel,
      emailCaptureButtonText,
      emailCaptureRedirectUrl,
    },
  } = slice

  const urlResolver = useUrlResolver()
  const { identify, track } = useAnalytics()
  const inputLabelId = useUID()

  const isEmailCapture = emailCaptureLabel && emailCaptureButtonText

  const handleSubmit = async ({ email }) => {
    const traits = { Email: email }
    await identify(traits)
    await track("Marketing Site Form Submission", {
      type: "Email Capture",
      location: "Hero w/ Email Capture Slice",
      ...traits,
    })
  }

  let captureRedirectUrl
  let queryParamName

  if (emailCaptureRedirectUrl) {
    captureRedirectUrl = emailCaptureRedirectUrl
  } else {
    captureRedirectUrl = `${AVAIL_BASE_URL}/users/new`
    queryParamName = "email"
  }

  return (
    <Hero
      title={<RichText render={title} />}
      description={<RichText render={description} />}
      bg={background}
      skew={skew}
      stretch={stretch}
      image={image}
      imagePosition={imagePosition}
      video={video?.url && video}
      embed={embed?.html && <Embed embed={embed} />}
      color={color}
      containerWidth={CONTAINER_WIDTHS}
    >
      {isEmailCapture && (
        <Box pt="2rem">
          <EmailCaptureInput
            background={background}
            inputLabel={emailCaptureLabel}
            inputLabelId={inputLabelId}
            buttonText={emailCaptureButtonText}
            buttonUrl={urlResolver(captureRedirectUrl)}
            onSubmit={handleSubmit}
            queryParamName={queryParamName}
          />
        </Box>
      )}
    </Hero>
  )
}

export default HeroWithEmailCaptureSlice
