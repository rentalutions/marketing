import React, { useRef } from "react"

import { Hero } from "components/organisms/Hero"
import RichText from "components/partials/SliceZone/components/RichText"
import Link from "components/partials/SliceZone/components/Link"
import Button from "components/elements/Button"
import { CONTAINER_WIDTHS } from "config"

const HeroSlice = ({ slice }) => {
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
    },
  } = slice

  const buttonRef = useRef()

  const showPrimaryButton = primaryButtonText && primaryButtonLink
  const showSecondaryButton = secondaryButtonText && secondaryButtonLink

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
      primaryLink={
        showPrimaryButton && (
          <Link link={primaryButtonLink}>
            <Button
              ref={buttonRef}
              forwardedAs="a"
              background={background}
              variant="primary"
            >
              {primaryButtonText}
            </Button>
          </Link>
        )
      }
      secondaryLink={
        showSecondaryButton && (
          <Link link={secondaryButtonLink}>
            <Button background={background}>{secondaryButtonText}</Button>
          </Link>
        )
      }
    />
  )
}

export default HeroSlice
