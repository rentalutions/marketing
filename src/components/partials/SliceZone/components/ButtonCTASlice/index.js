import React from "react"
import Button from "components/elements/Button"
import { CallToAction } from "components/organisms/CallToAction"
import Link from "components/partials/SliceZone/components/Link"
import RichText from "components/partials/SliceZone/components/RichText"
import Image from "next/image"
import { CONTAINER_WIDTHS } from "config"

const CallToActionSlice = ({ slice }) => {
  const {
    primary: {
      title,
      description,
      image,
      buttonText,
      buttonLink,
      buttonId,
      background,
      color,
      orientation = "left",
      skew = "none",
    },
  } = slice

  return (
    <CallToAction
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      orientation={orientation}
      skew={skew}
      title={title && <RichText render={title} />}
      description={description && <RichText render={description} />}
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
      button={
        buttonText && (
          <Link link={buttonLink}>
            <Button
              forwardedAs="a"
              variant="primary"
              background={background}
              id={buttonId}
            >
              {buttonText}
            </Button>
          </Link>
        )
      }
    />
  )
}

export default CallToActionSlice
