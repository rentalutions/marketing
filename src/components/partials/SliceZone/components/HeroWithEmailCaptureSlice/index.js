import React from "react"
import { Box } from "@rent_avail/layout"
import RichText from "components/partials/SliceZone/components/RichText"
import { Hero } from "components/organisms/Hero"
import EmailCapture from "components/molecules/EmailCapture"
import { CONTAINER_WIDTHS } from "config"

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

  const isEmailCapture = emailCaptureLabel && emailCaptureButtonText

  return (
    <Hero
      title={<RichText render={title} heading />}
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
          <EmailCapture
            background={background}
            inputLabel={emailCaptureLabel}
            buttonText={emailCaptureButtonText}
            buttonUrl="https://www.avail.co/users/new"
            queryParamName="email"
          />
        </Box>
      )}
    </Hero>
  )
}

export default HeroWithEmailCaptureSlice
