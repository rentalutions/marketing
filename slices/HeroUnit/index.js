import React from "react"
import Link from "next/link"
import { Button } from "@rent_avail/controls"
import RichText from "prismic-reactjs/src/Component"
import Heading from "components/prismic/Heading"
import { Hero } from "components/core/Hero"
import { availContainerWidth } from "lib/config"
import { analyzeColor } from "lib/utils"
import {
  ContrastButton,
  ContrastButtonPrimary,
} from "components/core/ContrastButton"

const HeroUnit = ({ slice }) => {
  const {
    primary: {
      title: [title],
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
    },
  } = slice

  const [scheme, isDark] = background ? analyzeColor(background) : []

  return (
    <Hero
      title={<Heading render={title} />}
      description={<RichText render={description} />}
      bg={background}
      skew={skew}
      image={image.url}
      imagePosition={imagePosition}
      color={color}
      primaryLink={
        primaryButtonText &&
        primaryButtonLink && (
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
        secondaryButtonText &&
        secondaryButtonLink && (
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
    />
  )
}

export default HeroUnit
