import React from "react"
import { Box } from "@rent_avail/layout"
import RichText from "components/partials/SliceZone/components/RichText"
import { Hero } from "components/organisms/Hero"
import EmailCaptureInput from "components/molecules/EmailCaptureInput"
import { CONTAINER_WIDTHS } from "config"
import { useUrlResolver } from "components/partials/UrlResolver"
import { useUID } from "react-uid"

const HeroWithEmailCaptureSlice = ({ slice }) => {
  const {
    primary: {
      title,
      description,
      background,
      skew,
      image,
      imagePosition,
      color,
      emailCaptureLabel,
      emailCaptureButtonText,
    },
  } = slice

  const urlResolver = useUrlResolver()

  const isEmailCapture = emailCaptureLabel && emailCaptureButtonText

  const inputLabelId = useUID()

  return (
    <Hero
      title={<RichText render={title} />}
      description={<RichText render={description} />}
      bg={background}
      skew={skew}
      image={image}
      imagePosition={imagePosition}
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
            buttonUrl={urlResolver("https://www.avail.co/users/new")}
            queryParamName="email"
          />
        </Box>
      )}
    </Hero>
  )
}

export default HeroWithEmailCaptureSlice
