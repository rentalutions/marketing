import React from "react"
import { Box } from "@rent_avail/layout"
import RichText from "components/partials/SliceZone/components/RichText"
import { Hero } from "components/organisms/Hero"
import EmailCaptureInput from "components/molecules/EmailCaptureInput"
import { CONTAINER_WIDTHS } from "config"
import { useUrlResolver } from "components/partials/UrlResolver"
import { useUID } from "react-uid"
import { useEmailCaptureTracking } from "utils/analytics"
import { AVAIL_BASE_URL } from "utils/env"
import Image from "next/image"
import Embed from "../Embed"

const HeroWithEmailCaptureSlice = ({ slice, sliceIndex }) => {
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
      emailCaptureOptInContext,
      emailCaptureOptInCopy,
      signintext,
      imageBackground,
      contentSize,
      resizeImage,
      backgroundEffect,
    },
  } = slice

  const urlResolver = useUrlResolver()
  const inputLabelId = useUID()

  const isEmailCapture = emailCaptureLabel && emailCaptureButtonText

  const [handleSubmit] = useEmailCaptureTracking({
    Location: "Hero w/ Email Capture Slice",
  })

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
      image={
        image?.url && (
          <Image
            src={image.url}
            width={image.dimensions.width}
            height={image.dimensions.height}
            alt={image.alt}
            title={image.alt}
            layout="intrinsic"
            priority
          />
        )
      }
      imageBackground={imageBackground}
      contentSize={contentSize}
      resizeImage={resizeImage}
      imagePosition={imagePosition}
      backgroundEffect={backgroundEffect}
      video={video?.url && video}
      embed={embed?.html && <Embed embed={embed} />}
      color={color}
      containerWidth={CONTAINER_WIDTHS}
      animationPreset={sliceIndex === 0 ? "none" : undefined}
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
            optInContext={emailCaptureOptInContext}
            optInCopy={<RichText render={emailCaptureOptInCopy} />}
            signintext={<RichText render={signintext} />}
          />
        </Box>
      )}
    </Hero>
  )
}

export default HeroWithEmailCaptureSlice
