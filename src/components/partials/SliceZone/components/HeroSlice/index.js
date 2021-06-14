import React, { useRef } from "react"

import { Hero } from "components/organisms/Hero"
import RichText from "components/partials/SliceZone/components/RichText"
import Link from "components/partials/SliceZone/components/Link"
import Button from "components/elements/Button"
import { CONTAINER_WIDTHS } from "config"
import Image from "next/image"
import Embed from "../Embed"

const HeroSlice = ({ slice, sliceIndex }) => {
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
      primaryButtonText,
      primaryButtonLink,
      primaryButtonId,
      secondaryButtonText,
      secondaryButtonLink,
      secondaryButtonId,
      outro,
    },
  } = slice

  const buttonRef = useRef()

  return (
    <Hero
      title={<RichText render={title} />}
      description={<RichText render={description} />}
      bg={background}
      skew={skew}
      stretch={stretch}
      animationPreset={sliceIndex === 0 ? "none" : undefined}
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
      outro={outro && <RichText render={outro} />}
    />
  )
}

export default HeroSlice
