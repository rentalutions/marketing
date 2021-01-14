import React from "react"
import Button from "components/elements/Button"
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
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      orientation={orientation}
      skew={skew}
      title={title && <RichText render={title} />}
      button={
        buttonText &&
        buttonLink && (
          <Link link={buttonLink}>
            <Button as="a" variant="primary" background={background}>
              {buttonText}
            </Button>
          </Link>
        )
      }
    />
  )
}

export default ButtonCTASlice
