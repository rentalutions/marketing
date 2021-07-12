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
      buttonId,
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
      py={["3rem", "4.5rem"]}
      title={title && <RichText render={title} />}
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

export default ButtonCTASlice
