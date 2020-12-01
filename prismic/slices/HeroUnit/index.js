import React from "react"
import Link from "next/link"
import { Button } from "@rent_avail/controls"
import { Box } from "@rent_avail/layout"
import RichText from "prismic/components/RichText"
import { Hero } from "components/core/Hero"
import { availContainerWidth } from "lib/config"
import { analyzeColor } from "lib/utils"
import {
  ContrastButton,
  ContrastButtonPrimary,
} from "components/core/ContrastButton"
import EmailCapture from "components/core/EmailCapture"

const HeroUnit = ({ slice }) => {
  const {
    primary: {
      title,
      description,
      background,
      skew,
      image,
      imagePosition,
      color,
      primaryButtonText,
      primaryButtonLink,
      secondaryButtonText,
      secondaryButtonLink,
      emailCaptureLabel,
      emailCaptureButtonText,
    },
  } = slice

  const [scheme, isDark] = background ? analyzeColor(background) : []

  const isEmailCapture = emailCaptureLabel && emailCaptureButtonText

  const isPrimaryButton =
    primaryButtonText && primaryButtonLink && !isEmailCapture

  const isSecondaryButton =
    secondaryButtonText && secondaryButtonLink && !isEmailCapture

  return (
    <Hero
      title={<RichText render={title} heading />}
      description={<RichText render={description} />}
      bg={background}
      skew={skew}
      image={image}
      imagePosition={imagePosition}
      color={color}
      primaryLink={
        isPrimaryButton && (
          <Link href={primaryButtonLink.url} passHref>
            {isDark ? (
              <ContrastButtonPrimary scheme={scheme}>
                {primaryButtonText}
              </ContrastButtonPrimary>
            ) : (
              <Button variant="primary">{primaryButtonText}</Button>
            )}
          </Link>
        )
      }
      secondaryLink={
        isSecondaryButton && (
          <Link href={secondaryButtonLink.url} passHref>
            {isDark ? (
              <ContrastButton scheme={scheme}>
                {secondaryButtonText}
              </ContrastButton>
            ) : (
              <Button>{secondaryButtonText}</Button>
            )}
          </Link>
        )
      }
      containerWidth={availContainerWidth}
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

export default HeroUnit
