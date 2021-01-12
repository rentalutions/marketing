import React from "react"
import { ButtonCTA } from "components/organisms/ButtonCTA"
import { CONTAINER_WIDTHS } from "config"

const ButtonSlice = ({ slice }) => {
  const {
    primary: {
      title,
      buttonText,
      buttonLink,
      background,
      color,
      position,
      skew,
    },
  } = slice

  return (
    <ButtonCTA
      title={title}
      buttonText={buttonText}
      buttonLink={buttonLink}
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      position={position}
      skew={skew}
    />
  )
}

export default ButtonSlice
