import React, { useRef } from "react"

import { Hero } from "components/organisms/Hero"
import RichText from "components/partials/SliceZone/components/RichText"
import Link from "components/partials/SliceZone/components/Link"
import Button from "components/elements/Button"
import { CONTAINER_WIDTHS } from "config"
import Embed from "../Embed"

const HeroSlice = ({ slice }) => {
  const {
    primary: {
      title,
      description,
      background,
      skew,
      image,
      imagePosition,
      video,
      embed,
      color,
      primaryButtonText,
      primaryButtonLink,
      primaryButtonId,
      secondaryButtonText,
      secondaryButtonLink,
      secondaryButtonId,
    },
  } = slice

  const buttonRef = useRef()

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
      video={video?.url && video}
      embed={embed?.html && <Embed embed={embed} />}
      primaryLink={
        primaryButtonText && (
          <Link link={primaryButtonLink}>
            <Button
              ref={buttonRef}
              forwardedAs="a"
              background={background}
              variant="primary"
              id={primaryButtonId}
            >
              {primaryButtonText}
            </Button>
          </Link>
        )
      }
      secondaryLink={
        secondaryButtonText && (
          <Link link={secondaryButtonLink}>
            <Button background={background} id={secondaryButtonId}>
              {secondaryButtonText}
            </Button>
          </Link>
        )
      }
    />
  )
}

export default HeroSlice
