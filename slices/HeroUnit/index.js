import React, { useMemo } from "react"
import Link from "next/link"
import { Button } from "@rent_avail/controls"
import RichText from "prismic-reactjs/src/Component"
import Heading from "components/prismic/Heading"
import { Hero } from "components/core/Hero"
import { useTheme } from "styled-components"

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

  const { colors } = useTheme()

  const darkBg = useMemo(() => {
    if (typeof background !== "string") {
      return false
    }
    const [scheme, intensity] = background.split("_")
    switch (scheme) {
      case "straw":
      case "gold":
        return intensity > 700
      case "ui":
        return intensity > 500
      default:
        return intensity > 300
    }
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
          <Link href={primaryButtonLink.url}>
            <Button
              {...(darkBg
                ? { color: "gold_500", textColor: colors[background] }
                : { variant: "primary" })}
            >
              {primaryButtonText}
            </Button>
          </Link>
        )
      }
      secondaryLink={
        secondaryButtonText &&
        secondaryButtonLink && (
          <Link href={secondaryButtonLink.url}>
            <Button
              {...(darkBg
                ? { color: "gold_500", textColor: colors[background] }
                : null)}
            >
              {secondaryButtonText}
            </Button>
          </Link>
        )
      }
    />
  )
}

export default HeroUnit
