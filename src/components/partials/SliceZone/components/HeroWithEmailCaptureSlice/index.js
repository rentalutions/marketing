import React from "react"
import { Box } from "@rent_avail/layout"
import RichText from "components/partials/SliceZone/components/RichText"
import { Hero } from "components/organisms/Hero"
import EmailCaptureInput from "components/molecules/EmailCaptureInput"
import { CONTAINER_WIDTHS } from "config"
import { useUrlResolver } from "components/partials/UrlResolver"
import { useUID } from "react-uid"
import Embed from "../Embed"

const HeroWithEmailCaptureSlice = ({ slice }) => {
  const {
    primary: {
      title,
      description,
      background,
      skew,
      image,
      mediaPosition,
      video,
      embed,
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
      mediaPosition={mediaPosition}
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
            buttonUrl={urlResolver("https://www.avail.co/users/new")}
            queryParamName="email"
          />
        </Box>
      )}
    </Hero>
  )
}

export default HeroWithEmailCaptureSlice
