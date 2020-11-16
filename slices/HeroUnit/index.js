import React from "react"
import Link from "next/link"
import { Button } from "@rent_avail/controls"
import RichText from "prismic-reactjs/src/Component"
import Heading from "components/prismic/Heading"
import { Hero } from "components/core/Hero"

const HeroUnit = ({ slice }) => {
  const {
    primary: {
      title: [title],
      description,
      background,
      skew,
      image,
      color,
      primaryButtonText,
      primaryButtonLink,
      secondaryButtonText,
      secondaryButtonLink,
    },
  } = slice
  return (
    <Hero
      title={<Heading render={title} />}
      description={<RichText render={description} />}
      bg={background}
      skew={skew}
      image={image.url}
      color={color}
      primaryLink={
        primaryButtonText &&
        primaryButtonLink && (
          <Link href={primaryButtonLink.url}>
            <Button variant="primary">{primaryButtonText}</Button>
          </Link>
        )
      }
      secondaryLink={
        secondaryButtonText &&
        secondaryButtonLink && (
          <Link href={secondaryButtonLink.url}>
            <Button>{secondaryButtonText}</Button>
          </Link>
        )
      }
    />
  )
}

export default HeroUnit
