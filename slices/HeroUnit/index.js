import React, { useMemo } from "react"
import Link from "next/link"
import { Button } from "@rent_avail/controls"
import RichText from "prismic-reactjs/src/Component"
import Heading from "components/prismic/Heading"
import { Hero } from "components/core/Hero"
import styled, { useTheme } from "styled-components"
import { availContainerWidth } from "lib/config"

const isDark = (scheme, intensity) => {
  switch (scheme) {
    case "straw":
    case "gold":
      return intensity > 700
    case "ui":
      return intensity > 500
    default:
      return intensity > 300
  }
}

const ContrastButton = styled(Button)(({ theme: { colors }, scheme }) => ({
  background: "transparent",
  borderColor: colors[`${scheme}_100`],
  color: colors[`${scheme}_100`],
  "&:hover": {
    background: colors[`${scheme}_100`],
    color: colors[`${scheme}_500`],
  },
  "&:focus": {
    background: colors[`${scheme}_100`],
  },
}))

const ContrastPrimaryButton = styled(Button)(
  ({ theme: { colors }, scheme }) => ({
    background: colors[`${scheme}_100`],
    borderColor: colors[`${scheme}_100`],
    color: colors[`${scheme}_500`],
    "&:hover": {
      background: colors.ui_100,
      borderColor: colors.ui_100,
      color: colors[`${scheme}_700`],
    },
    "&:focus": {
      background: colors.ui_100,
    },
  })
)

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

  const [scheme, dark] = useMemo(() => {
    if (typeof background !== "string") {
      return false
    }
    // eslint-disable-next-line no-shadow
    const [scheme, intensity] = background.split("_")
    return [scheme, isDark(scheme, intensity)]
  }, [background])

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
            {dark ? (
              <ContrastPrimaryButton scheme={scheme}>
                {primaryButtonText}
              </ContrastPrimaryButton>
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
            {dark ? (
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
