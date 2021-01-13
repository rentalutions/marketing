import React from "react"
import { ButtonCTA } from "components/organisms/ButtonCTA"
import Link from "components/partials/SliceZone/components/Link"
import RichText from "components/partials/SliceZone/components/RichText"
import { CONTAINER_WIDTHS } from "config"

const ButtonCTASlice = ({ slice }) => {
  const {
    primary: {
      title,
      buttonText,
      buttonLink,
      background,
      color,
      orientation = "left",
      skew = "none",
    },
  } = slice

  return (
    <ButtonCTA
      title={title && <RichText render={title} />}
      buttonText={buttonText}
      buttonLink={buttonLink && <Link link={buttonLink} />}
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      orientation={orientation}
      skew={skew}
    />
  )
}

export default ButtonCTASlice
